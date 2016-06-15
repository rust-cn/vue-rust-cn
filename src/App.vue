<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// require('../lib/bootstrap-theme-slim/dist/css/slim-min.css')

export default {

}
</script>

<style lang="stylus">
@import 'assets/variables.styl'

.wangEditor-container
  border none !important

body
  background #fff
  overflow-x hidden

#right-panel
  .card-block
    img
      max-width 100%

.clearfix:after
  content "."
  display block
  height 0
  clear both
  visibility hidden

.pull-right
  float right

.pull-left
  float left

.f1rem
  font-size .8em

.text-center
  text-align center

.text-right
  text-align right

.p0
  padding 0
.m0
  margin 0

.h45
  height 45px
  min-width 100%

.label-r
  color #fff
  font-weight 900
  background-color $l-r
  border-radius 50%
  position relative
  top -2px
  padding 0.25em 0.445em
  margin-right 4px

.label-j
  color #fff
  font-weight 900
  background-color $l-j
  border-radius 50%
  position relative
  padding 0.25em 0.52em
  top -2px
  margin-right 4px

.label-g
  color #fff
  font-weight 900
  background-color $l-g
  border-radius 50%
  padding .25em .4em
  position relative
  top -2px
  margin-right 4px

.label-t
  color #fff
  font-weight 900
  background-color $l-ding
  border-radius 50%
  position relative
  padding .25em .5em
  top -2px
  margin-right 4px

.card-footer, .card-header
  padding 0.5rem 1.25rem
  background-color #fafafa

.btn
  transition all .7s


.btn-mint
  color #fff
  background-color $mred
  border-color $mred


.btn-mint-outline
  color $mred
  background-image none
  background-color transparent
  border-color $mred
  transition all .7s


.btn-mint-outline.active, .btn-mint-outline.focus, .btn-mint-outline:active, .btn-mint-outline:focus, .btn-mint-outline:hover, .open>.btn-mint-outline.dropdown-toggle
  color #fff
  background-color $mred
  border-color $mred

.btn-mint.focus, .btn-mint:focus, .btn-mint:hover
  color #fff
  background-color darken($mred,5%)
  border-color darken($mred,5%)

.btn-dark
  color #fff
  background-color #3b3e46
  border-color #3b3e46

.btn-dark.focus, .btn-dark:focus, .btn-dark:hover
  color #fff
  background-color #24252a
  border-color #1f2125


.btn-info-outline
  color #5bc0de
  background-image none
  background-color transparent
  border-color #5bc0de

.btn-info-outline.active, .btn-info-outline.focus, .btn-info-outline:active, .btn-info-outline:focus, .btn-info-outline:hover, .open>.btn-info-outline.dropdown-toggle
  color #fff
  background-color #5bc0de
  border-color #5bc0de

.btn-primary-outline
  color: #0275d8;
  background-image: none;
  background-color: transparent;
  border-color: #0275d8;

.btn-primary-outline.active, .btn-primary-outline.focus, .btn-primary-outline:active, .btn-primary-outline:focus, .btn-primary-outline:hover, .open>.btn-primary-outline.dropdown-toggle
  color: #fff;
  background-color: #0275d8;
  border-color: #0275d8;

.btn-pink-outline
  color: #eb72b6;
  background-image: none;
  background-color: transparent;
  border-color: #eb72b6;

.btn-pink-outline.active, .btn-pink-outline.focus, .btn-pink-outline:active, .btn-pink-outline:focus, .btn-pink-outline:hover, .open>.btn-pink-outline.dropdown-toggle
  color: #fff;
  background-color: #eb72b6;
  border-color: #eb72b6;

</style>
