<template lang="pug">
  div(id="member_list")
    draggable(v-if="isDraggable" @end="list()")
      div.list__element(
        v-for="(member, index) in members"
        class="draggable-member"
        :key="member.member_uuid"
        :data-member-id="member.member_uuid"
      )
        span.list__num {{ index + 1 }}
        div.list__body
          img.list__icon(:src="member.thumbnail_url")
          span.list__name {{ member.member_name }}
        span.list__action
          i.fas.fa-grip-vertical
    div(v-else class="member-list")
      div.list__element(
        v-for="member in members"
        class="draggable-member"
        :key="member.member_uuid"
        :data-member-id="member.member_uuid"
      )
        div.list__body
          img.list__icon(:src="member.thumbnail_url")
          span.list__name {{ member.member_name }}
</template>

<script>
import draggable from 'vuedraggable'
export default {
  data: function () {
    return {

    }
  },
  props: {
    isDraggable: {
      type: Boolean,
      default: false
    },
    members: {
      type: Array,
      default: () => []
    },
  },
  methods: {
    list () {
        var list = document.getElementsByClassName('list__num');
        Array.prototype.forEach.call(list, function (row, index) {
            row.innerHTML = index + 1;
        });
    }
  },
  components: {
    draggable
  }
}
</script>

<style lang="stylus">
.list
  &__element
    display flex
    justify-content space-between
    height 3rem
    width 100%
    font-size 1rem
    align-items center
    margin-bottom 1rem

  &__body
    display flex 
    width 70%
    height inherit
    justify-content flex-start
    align-items center

  &__name
    margin-left 1rem
    
  &__icon
    height 3rem
    width 3rem
    border-radius 3rem
</style>
