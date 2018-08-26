<template lang="pug">
  div.wrapper
    div.container#waiting-member
      h1.title.isMain Now Waiting...
      MemberList
      a.button(@click="close()") 受付を終了する
</template>

<script>
import MemberList from '@/components/molecules/MemberList'
import {createRequest} from '@/api/util'
import {ENDPOINTS} from '@/api/url'

export default {
  name: "WaitingMember",
  data(){
    return {
      lounge_id: this.$router.lounge_id,
      intervalId: null,
      members: [
          {'name': 'Tabata', 'member_id': 'fjfjfjfxf'},
          {'name': 'Matsumura', 'member_id': 'fjfjfjfjf'},
      ]
    }
  },
  props: [
    'lounge_id'
  ],
  methods: {
    close () {
      this.$router.push({
        name: 'RegisterPref',
        params: {lounge_id: 12345, member_id: 12345}
      });
    },
  },
  mounted () {
    var params = {
      'lounge_uuid': this.lounge_id
    };
    this.intervalId = window.setInterval(function () {
      createRequest(params, ENDPOINTS.Member, 'GET')
        .then(function(response){
            this.members = response.data.members;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
      console.log('Polling');
    }, 2000);
  },
  beforeDestroy () {
    console.log('clearInterval')
    clearInterval(this.intervalId)
  },
  components: {
    MemberList
  }
}
</script>

<style lang="stylus">


</style>
