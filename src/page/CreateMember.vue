<template lang="pug">
  div.wrapper
    div.container#create-member
      h2.title.isSub WELCOME TO
      h1.title.isMain WESS大夏2018
      form(id='form' @submit.prevent="register($event)")
        div.croppaWrapper
          croppa(v-model="src" canvas-color="transparent")
        div.field__group
          input.input__text#name(type="text" name="name" placeholder="自分の名前を入力")
          p.field__title 所属グループを選択する
          div.field
            input#first(type="radio" name="group" value="first" )
            label(for="first") 男性
          div.field
            input#second(type="radio" name="group" value="second" )
            label(for="second") 女性
        a.button(type="submit" @click="register") 登録
</template>

<script>
import {createRequest} from '@/api/util'
import {ENDPOINTS} from '@/api/url'

export default {
  name: "CreateMember",
  data(){
    return {
      src: null,
    }
  },
  props: {
    // props
  },
  methods: {
    async register () {
      var form = document.forms.form;
      var src = this.src;
      var formData = new FormData();
      if (src) {
          src.generateBlob((blob) => {
            formData.append('thumbnail', blob, 'thumbnail.jpg');
          });
      }
      formData.append('name', form.name.value);

      try {
          let response = await createRequest(formData, ENDPOINTS.Member, 'POST');
          this.$router.push({
            'name': 'WaitingMember',
            'params': {
                'lounge_id': this.$store.state.query.lounge_id,
                'member_id': response.data.member_uuid,
            }
          });
      } catch (error) {
          console.log(error);
      }
    },
  },
  created(){
    // when created
  },
}
</script>

<style lang="stylus">

.croppaWrapper
    display: flex
    justify-content: center
.croppa-container
    border-radius: 100%
</style>
