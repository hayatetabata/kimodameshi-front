<template lang="pug">
  div(id="create-member")
    form(id='form' @submit.prevent="register($event)")
      croppa(v-model="src" canvas-color="transparent")
      label 名前：
        input(type="text" placeholder="Hayate Tabata" name="name" id="name")
      button(type="submit") 登録
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
.form {
  width: 100%;
}
label {
  display: inline-block;
}
input {
  display: inline-block;
}
img {
  display: inline-block;
}
button {
  display: inline-block;
  width: 100%;
}
#thumbnail {
  width: 150px;
}
</style>
