<template lang="pug">
  div.wrapper
    div.centered.isSpecial(v-if="partners.length")
      div.slider__wrapper
        h1.title.special It's a Match
        div.slider__viewer
          div.slider__container
            div.slider__item(v-if="partners.length" v-for="partner in partners")
              div.thumbnail
                img(:src="partner.thumbnail_url")
              p.isName {{ partner.member_name }}
            div(v-else)
              img(src="http://localhost/failed.jpg")
    WaitingResult(v-else :waiting_for="waiting_for")
</template>

<script>
import WaitingResult from '@/page/WaitingResult.vue'
import {createRequest} from '@/api/util'
import {ENDPOINTS} from '@/api/url'


export default {
  name: "Result",
  data () {
    return {
      intervalId: null,
      partners: [],
      waiting_for: 0
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
    WaitingResult
  }
}
</script>

<style lang="stylus" scoped>

.thumbnail
  width: 250px;
  height: 250px;
  border-radius: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background gray;
  box-shadow: 0 20px 150px -10px #4A90E2;

.slider
  &__wrapper
    position relative
  &__viewer
    position relative
    overflow-x scroll 
    width 100vw
  &__container
    display flex
    width 200vw
    padding: 6rem 0;
  &__item
    width 100vw

.isName
  font-size 1.5rem
  text-align center
</style>
