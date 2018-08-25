<template lang="pug">
  div
    div(id="self-member-id" :data-self-member-id="$route.params.member_id")
    MemberList
    RegistPrefButton(@submit="registPref")
</template>

<script>
import MemberList from '../molecules/MemberList'
import RegistPrefButton from '../atoms/RegistPrefButton'

export default {
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
      console.log(params);
    }
  },
  components: {
    MemberList, RegistPrefButton
  },
}
</script>
