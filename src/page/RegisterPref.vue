<template lang="pug">
  div.wrapper
    div.container#register-pref
      h1.title.isMain 希望順位を登録
      div(id="self-member-id" :data-self-member-id="member_id")
      MemberList(:is-draggable="isDraggable" :members="members")
      input(type="hidden" id="member_id" :value="member_id")
      input(type="hidden" id="lounge_id" :value="lounge_id")
      div.button(@click="registPref()") 登録する
</template>

<script>
import MemberList from '@/components/molecules/MemberList'
import {createRequest} from '@/api/util'
import {ENDPOINTS} from '@/api/url'

export default {
  name: "RegisterPref",
  data () {
    var params = {
      'lounge_uuid': this.lounge_id
    };
    let self = this
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
      isDraggable: true,
    };
  },
  props: [
    'lounge_id', 'member_id'
  ],
  methods: {
    async registPref() {
      var prefNodes = document.getElementsByClassName('draggable-item');
      var preferences = Array.prototype.map.call(prefNodes, function (prefNode) {
        return prefNode.getAttribute('data-member-id');
      });
      var selfMemberId = document.getElementById('self-member-id')
        .getAttribute('data-self-member-id');

      var params = {
        'member_uuid': selfMemberId,
        'preferences': preferences
      };

      const response = await createRequest(params, ENDPOINTS.Preference, 'POST');
      if (response.status != 200) {
          //handle error
          throw new Error('Handle error');
      }
      this.$router.push({name: "Result", params: {
          'lounge_id': document.getElementById('lounge_id').getAttribute('value'),
          'member_id': document.getElementById('member_id').getAttribute('value'),
      }});
    }
  },
  created(){
    // when created
  },
  components: {
    MemberList,
  },
}
</script>

<style lang="stylus">


</style>
