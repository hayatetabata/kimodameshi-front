<template lang="pug">
  div(class="parter-profile")
    div(v-if="name")
      img(:src="srcPath")
      div
        span {{ name }}
    div(v-else)
      img(src="http://localhost/failed.jpg")
</template>

<script>
export default {
  name: 'PartnerProfile',
  props: {
    name: {
      type: String,
      default: null,
    },
    srcPath: {
      type: String,
      default: 'http://localhost/user.jpg',
    },
  },
}
</script>
