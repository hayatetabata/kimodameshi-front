<template lang="pug">
  div.wrapper
    div.centered.home
      h1.isVertical.title きもだめしペアマッチング
      router-link.button(:to="{name: 'CreateLounge'}") はじめる
</template>
<script>
export default {
  name: 'home'
}
</script>
<style lang="stylus">

.isVertical
  writing-mode vertical-rl
  margin: 0 auto;
  letter-spacing 1rem
  font-size 1rem

</style>
