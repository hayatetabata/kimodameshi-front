<template lang="pug">
  div(id="member_list")
    draggable
      div(v-for="item in items" class="draggable-item") {{ item.name }}
</template>

<script>
import draggable from 'vuedraggable'

export default {
  data: function () {
    return {
      'items': [
        {'name': 'Hello'},
        {'name': 'World'},
      ]
    }
  },
  components: {
    draggable
  }
}
</script>

<style>
.draggable-item {
  font-size: 50px
}
</style>
