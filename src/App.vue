<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="stylus">
html
body
#app
  width 100%
  height 100%
  margin 0
  padding 0
  font-family serif
  // font-family Georgia,游明朝,"Yu Mincho",YuMincho,"Hiragino Mincho ProN",HGS明朝E,メイリオ,Meiryo,serif
  font-weight normal
  letter-spacing .2rem
  font-size 14pxs
  color white
  background black

.wrapper
  position fixed
  top 0
  right 0
  left 0
  bottom 0
  background linear-gradient(45deg, #19005D, #3B0000)
  overflow scroll
  -webkit-overflow-scrolling touch

.centered
  display flex
  justify-content center
  align-content center
  flex-direction column
  height 100%
  &.isSpecial:after
    content: "";
    width: 200vw;
    height: 200vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    background: red;
    z-index: -1;
    border-radius: 100%;

a
  text-decoration none
  color white

SP_MAX = 768px /* breakpointになる値を設定 */
PC_MIN = 769px /* breakpointになる値を設定 */

sp()
  @media screen and (max-width: SP_MAX)
    {block}

pc()
  @media screen and (min-width: PC_MIN)
    {block}

.title
  color white
  font-weight normal
  text-align center
  font-size 1.5rem
  &.isMain
    margin-bottom 3rem
  &.isSub
    color red
    font-size 1rem
  &.special
    position: absolute;
    font-family: 'Great Vibes', cursive;
    color: #ff0;
    transform: rotate(-10deg) translateX(-50%);
    font-size: 4rem;
    margin: 0;
    top: 2rem;
    left: 50%;
    z-index: 9;
    white-space: nowrap;

.container
  width 400px
  box-sizing border-box
  padding 5rem 2.5rem
  +sp()
    width 100%
  +pc()
    width 400px
    margin 0 auto

.button
  display: block;
  text-align: center;
  padding: 2rem;
  margin: 2rem auto 0;
  cursor: pointer;
  font-size 1.2rem

.input
  &__text
    width 100%
    color white
    line-height 3rem
    font-size 1rem
    background transparent
    border none
    border-bottom 1px solid white
    margin-bottom 1rem

.field
  position relative
  line-height 3rem
  &__action
    line-height: 3rem;
    position: absolute;
    right: 0;
    top: 0;
  &__group
    margin-top 3rem
    &__title
      margin 0
      font-size .9rem

input[type="checkbox"]
input[type="radio"]
  margin-right 1rem

.isCentered
  text-align center
</style>