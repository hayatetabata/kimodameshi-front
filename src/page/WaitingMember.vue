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
      intervalId: null,
    }
  },
  props: [
    'lounge_id', 'member_id'
  ],
  methods: {
    close () {
      this.$router.push({
        name: 'RegisterPref',
        params: {
            lounge_id: this.$store.route.query.lounge_id,
            member_id: this.$store.route.query.member_id
        }
      });
    },
  },
  computed: {
    members() {
      return this.$store.state.members;
    }
  },
  created () {
    var params = {
      'lounge_uuid': this.$store.route.query.lounge_id
    };
    let self = this;
    this.intervalId = window.setInterval(function () {
      createRequest(params, ENDPOINTS.Member, 'GET')
        .then((response) => {
            self.members = response.data['members'];
            console.log(self.members);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
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
