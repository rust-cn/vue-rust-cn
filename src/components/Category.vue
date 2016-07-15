<template>
    <div class="card">
        <div class="card-header text-muted">
          节点导航
        </div>
        <div class="card-block">
          <div class="item">
              <div class="pull-left cate_dad ofade">Mobile</div>
              <div class="content">
                <a href="#" class="cate">IOS</a>
                <a href="#" class="cate">Android</a>
                <a href="#" class="cate">黑莓</a>
                <a href="#" class="cate">WinPhone</a>
              </div>
          </div>

          <div class="item">
              <div class="pull-left cate_dad ofade">Front-End</div>
              <div class="content">
                <a href="#" class="cate">CSS</a>
                <a href="#" class="cate">JavaScript</a>
                <a href="#" class="cate">JQuery</a>
                <a href="#" class="cate">React</a>
                <a href="#" class="cate">Vue</a>
                <a href="#" class="cate">Gulp</a>
                <a href="#" class="cate">Grunt</a>
                <a href="#" class="cate">Angular</a>
                <a href="#" class="cate">Typescript</a>
                <a href="#" class="cate">Dart</a>
                <a href="#" class="cate">EmberJS</a>
                <a href="#" class="cate">绝对不会屈服</a>
                <a href="#" class="cate">@IT</a>

              </div>
          </div>

        <div class="item">
              <div class="pull-left cate_dad ofade">Mobile</div>
              <div class="content">
                <a href="#" class="cate">IOS</a>
                <a href="#" class="cate">Android</a>
                <a href="#" class="cate">黑莓</a>
                <a href="#" class="cate">WinPhone</a>
              </div>
          </div>

        <div class="item">
              <div class="pull-left cate_dad ofade">活动</div>
              <div class="content">
                <a href="#" class="cate">友谊小船</a>
                <a href="#" class="cate">面向对象</a>
              </div>
          </div>
        </div>


    </div>
</template>


<style lang="stylus" scoped>
@import '../assets/variables.styl'

.card-block
  padding 5px 10px

.ofade
  color #aaa
.card
  margin-top 20px
  .item
    padding .1em 0
    .cate_dad
      width 150px
      text-align right
      padding-right 30px
      @media (max-width: 500px)
        width 80px
    .content
      padding-left 150px
      @media (max-width: 500px)
        padding-left 80px
      a
        text-align center
        display inline-block
        color #333
        width 80px
        white-space nowrap
        text-overflow ellipsis
        overflow hidden
        border-bottom 1px solid #fff
        &:hover
          text-decoration none
          border-bottom 1px solid $mcol
</style>
