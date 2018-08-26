<template lang="pug">
  div
    div(id="self-member-id" :data-self-member-id="member_id")
    MemberList(:is-draggable="isDraggable" :members="members")
    RegistPrefButton(@submit="registPref")
    input(type="hidden" id="member_id" :value="member_id")
    input(type="hidden" id="lounge_id" :value="lounge_id")
</template>

<script>
import MemberList from '@/components/molecules/MemberList'
import RegistPrefButton from '@/components/atoms/RegistPrefButton'
import {createRequest} from '@/api/util'
import {ENDPOINTS} from '@/api/url'

export default {
  data: function () {
    return {
      isDraggable: true,
    }
  },
  props: [
      'lounge_id', 'member_id', "members"
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
        'member_uuid': selfMemberId,
        'preferences': preferences
      };

      var vue = this;
      createRequest(params, ENDPOINTS.Preference, 'POST')
        .then(function(response){
          // handle success
            vue.$router.push({name: "WaitingResult", params: {
                'lounge_id': document.getElementById('lounge_id').getAttribute('value'),
                'member_id': document.getElementById('member_id').getAttribute('value'),
            }});
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
