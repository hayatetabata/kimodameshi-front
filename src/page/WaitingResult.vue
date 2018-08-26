<template lang="pug">
  div.wrapper
    div.centered
        p あと<span class="isBig">8</span>人の
        p 登録を待っています。
</template>

<script>
export default {
  name: "WaitingResult",
  data(){
    return {
      intervalId: null,
    }
  },
  props: [
    'lounge_id', 'member_id'
  ],
  created () {

  },
}
</script>

<style lang="stylus" scoped>
p
    line-height 1rem
    text-align center
    margin 1rem 0
span
    font-size 8rem
</style>