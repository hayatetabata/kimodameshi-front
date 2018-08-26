<template lang="pug">
  div
    h1 Show result
    PartnerProfile(
    v-for="partner in partners"
    :name="partner.name"
    :src-path="partner.thumbnail_url"
    )
</template>

<script>
import PartnerProfile from '@/components/molecules/PartnerProfile'

export default {
  name: "Result",
  data () {
    return {
      partners: [
        {name: 'Matsumura Toshiaki', thumbnail_url: 'http://localhost:8080/Default_Profile_Image.png'},
        {name: 'Matsumura Toshiaki', thumbnail_url: 'http://localhost:8080/Default_Profile_Image.png'},
      ]
    }
  },
  props: {
    // props
  },
  methods: {
    // functions
  },
  created(){
    // when created
  },
  components: {
    PartnerProfile
  }
}
</script>

<style lang="stylus">


</style>
