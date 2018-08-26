<template lang="pug">
  div
    h1 結界を共有しよう
    input(id="link" type="text" :value="link" readonly="readonly")
    button(@click="copy()") copy

    div(id="share-button")
      button Line
</template>

<script>
export default {
  name: "ShowLounge",
  data(){
    return {
      link: 'https://localhost/lounge/12345',//TODO Correct base url
    }
  },
  props: [
    'lounge_id'
  ],
  methods: {
    copy () {
      var link = document.getElementById('link').select();
      document.execCommand('copy');
      alert('Copy!')
    }
  },
  created(){
    // when created
  },
}
</script>

<style lang="stylus">


</style>
