<template lang="pug">
  div.wrapper
    div.container#waiting-member
      h1.title.isMain Now Waiting...
      MemberList
      a.button(@click="close()") 受付を終了する
</template>

<script>
import MemberList from '@/components/molecules/MemberList'

export default {
  name: "WaitingMember",
  data(){
    return {
      members: [
          {'name': 'Tabata', 'member_id': 'fjfjfjfxf'},
          {'name': 'Matsumura', 'member_id': 'fjfjfjfjf'},
      ]
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
    },
    fetch () {
    }
  },
  watch : {
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
