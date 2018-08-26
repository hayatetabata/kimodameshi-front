<template lang="pug">
  div(id="create-lounge")
    h1 create lounge
    form(id="form")
      input(type="text" name="name" placeholder="ラウンジ名")
      div(id="options")
        div(class="owner field")
          input(type="checkbox" name="join_owner")
          label オーナーも参加する

      input(type="text" name="owner_name" placeholder="自分の名前")

      div(class="group field")
        input(type="text" name="first" placeholder="例：男性")
        input(type="text" name="second" placeholder="例：女性")

      input(type="checkbox" name="allow_alone")
      label 一人を許容する

    button(@click="submit()") 結界を作成する
</template>

<script>
export default {
  name: "CreateLounge",
  data(){
    return {
      // data
    }
  },
  props: {
    // props
  },
  methods: {
    submit () {
      this.$router.push({
        'name': 'ShareLounge',
        'params': {
            'lounge_id': 12345
        }
      });
    }
  },
  created(){
    // when created
  }
  
}
</script>

<style lang="stylus">
label {
  font-size: 10px;
}

.field {
  width: 100px;
  margin: 0 auto 20px;
}
</style>
