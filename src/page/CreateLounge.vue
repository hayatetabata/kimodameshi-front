<template lang="pug">
  div.wrapper
    div.container#create-lounge
      h2.title.isSub STEP1
      h1.title.isMain 結界を作成しよう
      form(id="form")

        input.input__text(type="text" name="name" placeholder="結界の名前を入力")
        
        div.field__group
          p.field__title グループのラベルをカスタマイズ
          input.input__text(type="text" name="first" placeholder="例：男性")
          input.input__text(type="text" name="second" placeholder="例：女性")
        
        div.field__group
          p.field__title オーナーもメンバーとして参加する

          input.input__text(type="text" name="owner_name" placeholder="自分の名前")

          p.field__title 所属グループを選択する
          div.field
            input#first(type="radio" name="group" value="first")
            label(for="first") 男性
          div.field
            input#second(type="radio" name="group" value="second")
            label(for="second") 女性

        div.field__group
          div.field
            input#allow_alone(type="checkbox" name="allow_alone")
            label(for="allow_alone") ペアなしOK

      a.button(@click="submit()") 結界を作成する
</template>

<script>
import {createRequest} from '@/api/util'
import {ENDPOINTS} from '@/api/url'

export default {
  name: "CreateLounge",
  data(){
    return {
      // data
    }
  },
  methods: {
    async submit () {

      var form = document.forms.form;
      var params = {
          "lounge_name": form.name.value,
          "groups": {
              "first": form.first.value,
              "second": form.second.value,
          },
          "allow_alone": form.allow_alone.value,
          "owner": {
            "name": form.owner_name.value,
            "group": form.group.value
          }
      };


      let response = await createRequest(params, ENDPOINTS.Lounge, 'POST')
      if (response.status != 200) {
          console.log(error);
          throw new Error('Error handling');
      }
      this.$router.push({
        'name': 'ShareLounge',
        'params': {
            'lounge_id': response.data.lounge_uuid
        }
      });
    }
  }
}
</script>

<style lang="stylus">

</style>
