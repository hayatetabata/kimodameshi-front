<template lang="pug">
  div.wrapper
    div.container#register-pref
      h1.title.isMain 希望順位を登録
      RegistPrefForm(:members="members" :lounge_id="lounge_id" :member_id="member_id")
</template>

<script>
import RegistPrefForm from '../components/organisms/RegistPrefForm'
import {createRequest} from '@/api/util'
import {ENDPOINTS} from '@/api/url'

export default {
  name: "RegisterPref",
  data () {
    var params = {
      'lounge_uuid': this.lounge_id
    };
    self = this
    self.members = [];
    createRequest(params, ENDPOINTS.Member, 'GET')
        .then((response) => {
            self.members = response.data['members'];
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    return {
      members: self.members,
    };
  },
  props: [
    'lounge_id', 'member_id'
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
