<template lang="pug">
  div.wrapper
    div.container#register-pref
      h1.title.isMain 希望順位を登録
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
