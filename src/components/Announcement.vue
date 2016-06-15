<template>

<div class="card" id="anounce">
  <div class="card-header text-center">社区公告</div>
  <div class="card-block">
    <ul>
      <li><a href="#">News 栏目支持 Rss 订阅了！</a></li>
      <li><a href="#">Rust 视频教程上线了！</a></li>
    </ul>
  </div>
</div>

</template>


<style lang="stylus" scoped>
#anounce
.card-header
  background-color #fff
  padding 5px
.card-block
  padding 0 15px
  font-size .9rem
  line-height 2
  ul
    list-style none
    margin 0
    padding 0
    li
      &:before
        // content '☛'
        // content '➲'
        content '➽'
        padding-right 10px
        color #3A2F2E

      a
        color #3A2F2E

</style>
