<template lang="pug">
  div.wrapper
    div.container#waiting-member
      h1 Now Waiting...
      MemberList
      button(@click="close()") 受付を終了する
</template>

<script>
import MemberList from '@/components/molecules/MemberList'

export default {
  name: "WaitingMember",
  data(){
    return {
      // data
    }
  },
  props: {
    // props
  },
  methods: {
    close () {
      this.$router.push({
        name: 'RegisterPref',
        params: {lounge_id: 12345, member_id: 12345}
      });
    }
  },
  created(){
    // when created
  },
  components: {
    MemberList
  }
  
}
</script>

<style lang="stylus">


</style>
