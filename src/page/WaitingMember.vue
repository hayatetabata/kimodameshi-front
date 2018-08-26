<template lang="pug">
  div(id="waiting-member")
    h1 wait member
    router-link(:to="{name: 'RegisterPref', params: {lounge_id: 12345, member_id: 12345}}") Regist prefs
</template>

<script>
export default {
  name: "CreateLounge",
  data(){
    return {
      // data
    }
  },
  props: {
    // props
  },
  methods: {
    // functions
  },
  created(){
    // when created
  }
  
}
</script>

<style lang="stylus">


</style>
