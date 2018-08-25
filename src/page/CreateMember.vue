<template lang="pug">
  div(id="create-member")
    h1 create member
  div
    img(:src="srcPath")
    input(type="file" v-on:change="preview($event)" accept="image")
    router-link(:to="{name: 'WaitingMember', params: {lounge_id: 12345}}") waiting member
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
    }
  },
  created(){
    // when created
  }
  
}
</script>

<style lang="stylus">


</style>
