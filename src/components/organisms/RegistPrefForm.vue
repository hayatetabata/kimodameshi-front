<template lang="pug">
  div
    MemberList
    RegistPrefButton(@submit="registPref")
</template>

<script>
import MemberList from '../molecules/MemberList'
import RegistPrefButton from '../atoms/RegistPrefButton'

export default {
  methods: {
    registPref() {
      console.log('Good!');
    }
  },
  components: {
    MemberList, RegistPrefButton
  },
}
</script>
