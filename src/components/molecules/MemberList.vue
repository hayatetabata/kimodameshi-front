<template lang="pug">
  div(id="member_list")
    draggable(v-if="isDraggable")
      div.list__element(
        v-for="item in items"
        class="draggable-item"
        :key="item.id"
        :data-member-id="item.member_id"
      )
        span.list__num {{ items.indexOf(item)+1 }}
        div.list__body
          img.list__icon(:src="item.thumbnail")
          span.list__name {{ item.name }}
        span.list__action
          i.fas.fa-grip-vertical
    div(v-else class="member-list")
      div.list__element(
        v-for="item in items"
        class="draggable-item"
        :key="item.id"
        :data-member-id="item.member_id"
      )
        div.list__body
          img.list__icon(:src="item.thumbnail")
          span.list__name {{ item.name }}
</template>

<script>
import draggable from 'vuedraggable'
let def = "/Default_Profile_Image.png"

export default {
  data: function () {
    return {
      'items': [
        {'name': 'Matsumura', 'member_id': '0OFIGb4Ffl4TS0IS', 'thumbnail': def},
        {'name': 'Nonaka', 'member_id': 'usOWvEffXGmpun+K', 'thumbnail': def},
        {'name': 'Ando', 'member_id': '7naN2b3Cplh2CTnt', 'thumbnail': def},
        {'name': 'Tabata', 'member_id': 'RerLz8mYXFfZRAWH', 'thumbnail': def},
      ]
    }
  },
  props: {
    isDraggable: {
      type: Boolean,
      default: false
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
