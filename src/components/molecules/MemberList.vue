<template lang="pug">
  div(id="member_list")
    draggable
      div(v-for="item in items" class="draggable-item" :key="item.id") {{ item.name }}
</template>

<script>
import draggable from 'vuedraggable'

export default {
  data: function () {
    return {
      'items': [
        {'name': 'Matsumura', 'member_id': '0OFIGb4Ffl4TS0IS', 'thumbnail': 'test.jpg'},
        {'name': 'Nonaka', 'member_id': 'usOWvEffXGmpun+K', 'thumbnail': 'test.jpg'},
        {'name': 'Ando', 'member_id': '7naN2b3Cplh2CTnt', 'thumbnail': 'test.jpg'},
        {'name': 'Tabata', 'member_id': 'RerLz8mYXFfZRAWH', 'thumbnail': 'test.jpg'},
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
