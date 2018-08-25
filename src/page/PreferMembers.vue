<template lang="pug">
  div
    h1
      | Prefer user id is {{ $route.params.lounge_id }}
    MemberList
</template>

<script>
import MemberList from '../components/MemberList'

export default {
  components: {
    MemberList,
  }
}
</script>
