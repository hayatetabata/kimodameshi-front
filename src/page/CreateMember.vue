<template lang="pug">
  div.wrapper
    div.container#create-member
      h2.title.isSub WELCOME TO
      h1.title.isMain WESS大夏2018
      form(id='form' @submit.prevent="register($event)")
        div.croppaWrapper
          croppa(v-model="src" canvas-color="transparent")
        div.field__group
          input#name(type="text" name="name" placeholder="自分の名前を入力")
          p.field__title 所属グループを選択する
          div.field
            input#first(type="radio" name="first")
            label(for="first") 男性
          div.field
            input#second(type="radio" name="second")
            label(for="second") 女性
        a.button(type="submit" @click="register") 登録
</template>

<script>
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
    register (e) {
      var form = document.forms.form;
      var img = this.src;
      if (!img) {
        upload(img)
      }
      var name = form.name.value;
      this.$router.push({name: 'WaitingMember', params: {lounge_id: 12345}});
    },
  },
  created(){
    // when created
  },
}

function upload (img) {
  this.src.generateBlog((blob) => {
    //upload to server or s3
  });
  console.log(img)
}
</script>

<style lang="stylus">

.croppaWrapper
    display: flex
    justify-content: center
.croppa-container
    border-radius: 100%
</style>
