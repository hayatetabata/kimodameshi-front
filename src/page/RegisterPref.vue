<template lang="pug">
  div.wrapper
    div.container#register-pref
      h1.title.isMain 希望順位を登録
      MemberList(:is-draggable="isDraggable" :members="members")
      div.button(@click="registPref()") 登録する
</template>

<script>
import MemberList from '@/components/molecules/MemberList'
import {createRequest} from '@/api/util'
import {ENDPOINTS} from '@/api/url'

export default {
  name: "RegisterPref",
  data () {
    return {
      isDraggable: true,
    };
  },
  methods: {
    async registPref() {
      var prefNodes = document.getElementsByClassName('draggable-item');
      var preferences = Array.prototype.map.call(prefNodes, function (prefNode) {
        return prefNode.getAttribute('data-member-id');
      });

      var params = {
        'member_uuid': this.$store.route.query.member_id,
        'preferences': preferences
      };

      const response = await createRequest(params, ENDPOINTS.Preference, 'POST');
      if (response.status != 200) {
          //handle error
          throw new Error('Handle error');
      }
      this.$router.push({name: "Result", params: {
          'lounge_id': this.$store.router.query.lounge_id,
          'member_id': this.$store.router.query.member_id,
      }});
    }
  },
  created(){
    // when created
  },
  computed: {
    members () {
        return this.$store.state.members;
    }
  },
  components: {
    MemberList,
  },
}
</script>

<style lang="stylus">


</style>
