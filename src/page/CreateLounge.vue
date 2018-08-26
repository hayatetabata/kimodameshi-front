<template lang="pug">
  div.wrapper
    div.container#create-lounge
      h2.title.isSub STEP1
      h1.title.isMain 結界を作成しよう
      form(id="form")
        input(type="text" name="name" placeholder="結界の名前を入力")
        
        div.field__group
          p.field__title グループのラベルをカスタマイズ
          input(type="text" name="first" placeholder="例：男性")
          input(type="text" name="second" placeholder="例：女性")
        
        div.field__group
          p.field__title オーナーもメンバーとして参加する

          input(type="text" name="owner_name" placeholder="自分の名前")

          p.field__title 所属グループを選択する
          div.field
            input#first(type="radio" name="first")
            label(for="first") 男性
          div.field
            input#second(type="radio" name="second")
            label(for="second") 女性

        div.field__group
          div.field
            input#allow_alone(type="checkbox" name="allow_alone")
            label(for="allow_alone") ペアなしOK

      a.button(@click="submit()") 結界を作成する
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

</style>
