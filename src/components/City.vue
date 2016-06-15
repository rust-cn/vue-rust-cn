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
.card-block
  padding 5px 10px
  a
    display inline-block
    color #3A2F2E
    background #E2E2E2
    padding .2em 1em
    border-radius 5px
    margin .3em 0
    font-size 1rem
    &:hover
      text-decoration none
      background #ccc

</style>
