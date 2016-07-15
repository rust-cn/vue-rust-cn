<template>
    <div class="card">
        <div class="card-header text-muted">
          热门城市
        </div>
        <div class="card-block">
          <div class="text-left">
            <a href="#">上海</a>
            <a href="#">北京</a>
            <a href="#">西安</a>
            <a href="#">杭州</a>
            <a href="#">深圳</a>
            <a href="#">广州</a>
            <a href="#">厦门</a>
            <a href="#">其他城市</a>
          </div>
        </div>
    </div>
</template>


<style lang="stylus" scoped>
@import '../assets/variables.styl'
.card-block
  padding 5px 10px
  a
    display inline-block
    color #3A2F2E
    padding .2em 1em
    border-radius 5px
    margin .3em 0
    font-size 1rem
    border 1px solid #fff
    &:hover
      text-decoration none
      border 1px solid $mcol
      color $mcol

</style>
