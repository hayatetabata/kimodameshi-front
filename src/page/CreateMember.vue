<template lang="pug">
  div(id="create-member")
    h1 create member
    router-link(:to="{name: 'WaitingMember', params: {lounge_id: 12345}}") waiting member
</template>

<script>
export default {
  name: "CreateMember",
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
