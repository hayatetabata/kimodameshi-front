<template lang="pug">
  div
    div(id="self-member-id" :data-self-member-id="member_id")
    MemberList(is_draggable)
    RegistPrefButton(@submit="registPref")
</template>

<script>
import MemberList from '@/components/molecules/MemberList'
import RegistPrefButton from '@/components/atoms/RegistPrefButton'
import {createRequest} from '@/api/util'
import {ENDPOINTS} from '@/api/url'

export default {
  props: [
      'member_id'
  ],
  methods: {
    registPref() {
      var prefNodes = document.getElementsByClassName('draggable-item');
      var preferences = Array.prototype.map.call(prefNodes, function (prefNode) {
        return prefNode.getAttribute('data-member-id');
      });
      var selfMemberId = document.getElementById('self-member-id')
        .getAttribute('data-self-member-id');

      var params = {
        'member_id': selfMemberId,
        'preferences': preferences
      };

      this.$router.push({name: "WaitingResult"});//TODO Delete here after implemention
      createRequest(params, ENDPOINTS.Preference, 'POST')
        .then(function(response){
          // handle success
          console.log('Post prefs!!');
          this.$router.push({name: "WaitingResult"});
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })

    }
  },
  components: {
    MemberList, RegistPrefButton
  },
}
</script>
