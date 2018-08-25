<template lang="pug">
  div(id="create-member")
    form(id='form' @submit.prevent="register($event)")
      croppa(v-model="srcPath" canvas-color="transparent")
      label 名前：
        input(type="text" placeholder="Hayate Tabata" name="name" id="name")
      button(type="submit") 登録
</template>

<script>
export default {
  name: "CreateMember",
  data(){
    return {
      srcPath: null,
    }
  },
  props: {
    // props
  },
  methods: {
    register (e) {
      var form = document.forms.form;
      var img = this.srcPath;
      var name = form.name.value;
      console.log(name);
    },
  },
  created(){
    // when created
  },
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
