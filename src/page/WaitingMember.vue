<template lang="pug">
  div(id="waiting-member")
    h1 ユーザー登録待ち
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
