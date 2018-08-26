<template lang="pug">
  div.wrapper
    div.container#share-lounge
      h2.title.isSub STEP2
      h1.title.isMain 結界を共有しよう
      
      div.field
        input(id="link" type="text" :value="link" readonly="readonly")
        div.field__action(@click="copy()") 
          i.fas.fa-clone
      
      p.isCentered or

      p.isCentered(id="share-button")
        a LINEで共有
</template>

<script>
export default {
  name: "ShowLounge",
  data(){
    return {
      link: 'http://localhost:8080/lounge/12345/members/create',//TODO Correct base url
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
