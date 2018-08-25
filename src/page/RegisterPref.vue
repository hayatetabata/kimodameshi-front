<template lang="pug">
  div
    h1
      | Please order based on your preference
    RegistPrefForm(:member_id="member_id")
</template>

<script>
import RegistPrefForm from '../components/organisms/RegistPrefForm'

export default {
  name: "RegisterPref",
  data(){
    return {
      // data
    }
  },
  props: [
    'member_id'
  ],
  methods: {
    // functions
  },
  created(){
    // when created
  },
  components: {
    RegistPrefForm
  }
}
</script>

<style lang="stylus">


</style>
