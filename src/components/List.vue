<template>
<div class="list-group">

    <div class="list-group-item">
      <div class="list-group-item-heading">
        <span class="label label-r">R</span><a v-link="{ name: 'article', params: { article_id: 123 }}" href="/some" class="title">活动交互设计二三事</a>
        <span class="pull-right">
          <img src="http://temp.im/466x466/4CD964/fff" style="width: 20px">
        </span>
      </div>
      <p class="list-group-item-text clearfix">
        <a href="#">原创</a> · 由 <a href="#">飘雪</a> 于 21 小时前回复
        <span class="pull-right">
          <a href="#">龙菲儿</a>
        </span>
      </p>
    </div>

    <div class="list-group-item">
      <div class="list-group-item-heading" href="#">
        <span class="label label-r">R</span><a href="/222" class="title">同构化的 React + Redux 服务端渲染</a>
        <span class="pull-right">
          <img src="http://temp.im/466x466/ff2d55/fff" style="width: 20px">
        </span>
      </div>
      <p class="list-group-item-text clearfix">
        <a href="#">原创</a> · 由 <a href="#">达达机器人</a> 于 21 小时前回复
        <span class="pull-right">
          <a href="#">飘雪</a>
        </span>
      </p>
    </div>
    <div class="list-group-item">
      <div class="list-group-item-heading" href="#">
        <span class="label label-j">J</span><a href="/123" class="title">Rust China支持RSS啦</a>
        <span class="pull-right">
          <img src="http://temp.im/466x466/FAE184/fff" style="width: 20px">
        </span>
      </div>
      <p class="list-group-item-text clearfix">
        <a href="#">原创</a> · 由 <a href="#">二表哥</a> 于 21 小时前回复
        <span class="pull-right">
          <a href="#">风尘</a>
        </span>
      </p>
    </div>
    <div class="list-group-item">
      <div class="list-group-item-heading" href="#">
        <span class="label label-t">T</span><a href="/123" class="title">粽粽节快乐~</a>
        <span class="pull-right">
          <img src="http://temp.im/466x466/9045AE/fff" style="width: 20px">
        </span>
      </div>
      <p class="list-group-item-text clearfix">
        <a href="#">原创</a> · 由 <a href="#">菲菲</a> 于 21 小时前回复
        <span class="pull-right">
          <a href="#">崔志</a>
        </span>
      </p>
    </div>
    <div class="list-group-item">
      <div class="list-group-item-heading" href="#">
        <span class="label label-g">G</span><a href="/123" class="title">源码的 sass 怎么变成 CSS 的？</a>
        <span class="pull-right">
          <img src="http://temp.im/466x466/79FCA2/fff" style="width: 20px">
        </span>
      </div>
      <p class="list-group-item-text clearfix">
        <a href="#">原创</a> · 由 <a href="#">Yugo</a> 于 21 小时前回复
        <span class="pull-right">
          <a href="#">大表哥</a>
        </span>
      </p>
    </div>
    <div class="list-group-item">
      <div class="list-group-item-heading" href="/123">
        <a href="#" class="title">X分钟速成Rust</a>
        <span class="pull-right">
          <img src="http://temp.im/466x466/F78AE0/fff" style="width: 20px">
        </span>
      </div>
      <p class="list-group-item-text clearfix">
        <a href="#">原创</a> · 由 <a href="#">Scote</a> 于 21 小时前回复
        <span class="pull-right">
          <a href="#">水水水水哥哥</a>
        </span>
      </p>
    </div>
    <div class="list-group-item">
      <div class="list-group-item-heading" href="#">
        <a href="#" class="title">使用 Upstart + Inspeqtor 管理你的 Sidekiq (监控、崩溃自动重启、邮件通知)</a>
        <span class="pull-right">
          <img src="http://temp.im/466x466/FC6633/fff" style="width: 20px">
        </span>
      </div>
      <p class="list-group-item-text clearfix">
        <a href="#">原创</a> · 由 <a href="#">Dowm</a> 于 21 小时前回复
        <span class="pull-right">
          <a href="#">MiYogurt</a>

        </span>
      </p>
    </div>
    <div class="list-group-item">
      <div class="list-group-item-heading" href="#">
        <a href="/3" class="title">来点关于设计好玩的东西</a>
        <span class="pull-right">
          <img src="http://temp.im/466x466/3A2F2E/fff" style="width: 20px">
        </span>
      </div>
      <p class="list-group-item-text clearfix">
        <a href="/3">原创</a> · 由 <a href="#">二锅头大叔</a> 于 21 小时前回复
        <span class="pull-right">
          <a href="#">Clo</a>
        </span>
      </p>
    </div>
    <div class="list-group-item">
      <div class="list-group-item-heading" href="#">
        <a href="#/2" class="title">Rust中如何把&str转换为String</a>
        <span class="pull-right">
          <img src="http://temp.im/466x466/CF565F/fff" style="width: 20px">
        </span>
      </div>
      <p class="list-group-item-text clearfix">
        <a href="/123">原创</a> · 由 <a href="#">跑酷小子</a> 于 21 小时前回复
        <span class="pull-right">
          <a href="#">CC</a>
        </span>
      </p>
    </div>
    <div class="list-group-item">
      <div class="list-group-item-heading" href="#">
        <a href="/321" class="title">PostgreSQL 学习笔记</a>
        <span class="pull-right">
          <img src="http://temp.im/466x466/97E0D3/fff" style="width: 20px">
        </span>
      </div>
      <p class="list-group-item-text clearfix">
        <a href="/3">原创</a> · 由 <a href="#">二锅头大叔</a> 于 21 小时前回复
        <span class="pull-right">
          <a href="#">Goot</a>
        </span>
      </p>
    </div>



</div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'ByeBye World!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '../assets/variables.styl'
a
  color #555
  &:hover
    color #555
    text-decoration underline

a.title:visited,
a.title:active
  color #ccc

a.title:hover
  color #555

.list-group-item
  border none
  margin-bottom 1px
  border-bottom 1px solid #f5f5f5
  padding .65rem 1.25rem
  &:last-child
    margin-bottom 0


.list-group-item-heading
  .pull-right
    line-height 1
    a
      padding 0 .5em
      background #f0f0f0
      color #3A2F2E
      height 20px
      display inline-block
      line-height 20px
      border-radius 4px
    img
      float right
      width 20px
      height 20px

.list-group-item-text
  font-size .8rem
  color #B9BDC0
  a
    color #B9BDC0
  a:hover
    color #3A2F2E
@media screen and (max-width:600px)
  .list-group .list-group-item:last-child
    border-bottom none
</style>
