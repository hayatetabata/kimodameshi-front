<template lang="pug">
  div(id="create-member")
      form(id='form' @submit.prevent="register($event)")
        img(:src="srcPath" id="thumbnail")
        label 画像：
          input(type="file" v-on:change="preview($event)" accept="image")
        label 名前：
          input(type="text" placeholder="Hayate Tabata" name="name" id="name")
        button(type="submit") 登録
</template>

<script>
export default {
  name: "CreateMember",
  data(){
    return {
      srcPath: require('../assets/user.jpg')
    }
  },
  props: {
    // props
  },
  methods: {
    preview (e) {
      var file = e.target.files[0];
      var fileReader = new FileReader();
      fileReader.onload = (e) =>  {
        this.srcPath = e.target.result;
      };
      this.srcPath = fileReader.readAsDataURL(file);
    },
    register (e) {
      var form = document.forms.form;
      var img = this.srcPath;
      var name = form.name.value;
      console.log(name);
    },
  },
  created(){
    // when created
  }
  
}
</script>

<style lang="stylus">
.form {
  width: 100%;
}
#thumbnail {
  width: 50%;
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
</style>
