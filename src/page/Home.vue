<template lang="pug">
  div(class="home")
    h1 肝試しマッチング
    router-link(:to="{name: 'CreateLounge'}") Create Lounge
</template>

<script>
export default {
  name: 'home',
}
</script>

<style lang="stylus">

</style>
