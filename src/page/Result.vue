<template lang="pug">
  div
    h1 Show result
    PartnerProfile(
    v-for="partner in partners"
    :name="partner.member_name"
    :src-path="partner.thumbnail_url"
    )
</template>

<script>
import PartnerProfile from '@/components/molecules/PartnerProfile'
import {createRequest} from '@/api/util'
import {ENDPOINTS} from '@/api/url'


export default {
  name: "Result",
  data () {
    return {
      intervalId: null,
      partners: []
    }
  },
  props: [
      'lounge_id', 'member_id'
  ],
  methods: {
    // functions
  },
  created(){
    var params = {
      'lounge_uuid': this.lounge_id,
      'member_uuid': this.member_uuid,
    };
    var vue = this;
    this.intervalId = window.setInterval(function () {
      createRequest(params, ENDPOINTS.Result, 'GET')
        .then((response) => {
            if (response.data['matched_with'] != null) {
                vue.partners = response.data['matched_with'];
            }
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
    }, 2000);
  },
  watch: {
    partners: function (val) {
        clearInterval(this.intervalId);
    }
  },
  beforeDestroy () {
    console.log('clearInterval')
    clearInterval(this.intervalId)
  },
  components: {
    PartnerProfile
  }
}
</script>

<style lang="stylus">


</style>
