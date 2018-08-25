<template lang="pug">
  div
    div(id="self-member-id" :data-self-member-id="member_id")
    MemberList
    RegistPrefButton(@submit="registPref")
</template>

<script>
import MemberList from '../molecules/MemberList'
import RegistPrefButton from '../atoms/RegistPrefButton'
import {createMethod} from '../../api/util'

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
      var result = createMethod(params, '/api/pref', false, 'POST');//TODO handle response
      console.log('Post prefs!!');

      this.$router.push({name: "Submitted"});//TODO redirect stand-by page
    }
  },
  components: {
    MemberList, RegistPrefButton
  },
}
</script>
