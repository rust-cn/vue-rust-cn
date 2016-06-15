<template>
  <v-nav-bar></v-nav-bar>
  <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12 animated slideInDown">
            <div class="card">

              <div class="card-block">
                  <a class="btn btn-sm btn-mint-outline pull-right" href="#">设置</a>

                <div class="text-center" style="clear: right">
                  <img class="img-circle user-face" src="https://ruby-china-files.b0.upaiyun.com/user/big_avatar/11178.jpg">
                  <h2>Yugo</h2>
                  <p>belovedyogurt@gmail.com</p>
                  <p>第 <strong>38</strong> 位会员</p>
                </div>


              </div>
            </div>

          </div>
        </div>

            <div class="box">
              <a href="#">Weibo</a>
              <a href="#">Blog</a>
              <a href="#">Github</a>
            </div>


        <div class="row">
          <div class="col-md-3 col-sm-12 col-xs-12">
            <div class="card">
              <div class="card-header text-center">
                个人简介
              </div>
              <div class="card-block">
                不屈的病人
              </div>
            </div>

            <div class="card">
              <div class="card-header text-center">
                帖子 - 回复
              </div>
              <div class="card-block text-center tip-back">
                <span class="lead">203 /</span> 1300
              </div>
            </div>


             <div class="card">
              <div class="card-header text-center">
                  未读消息
              </div>
              <div class="card-block text-center tip-msg-count">
                3
              </div>
            </div>




          </div>

          <div class="col-md-9 col-sm-12 col-xs-12">
            <div class="card ">
              <div class="card-block user-panel-menu">
                <a href="#" class="active">帖子</a>
                <a href="#">评论</a>
                <a href="#">收藏</a>
                <a href="#">消息</a>
              </div>
            </div>

<!-- 我的帖子 、 我的收藏 -->
          <div class="card ">
              <div class="card-block post-block">

                <div class="user-post-container">
                  <div class="post-item">
                    <a class="title" href="#">Rust 之谜</a> · <a class="cate" href="#">原创</a> ·  <span class="time">3 个月前</span> <span class="pull-right">20 回复</span>
                  </div>

                 <div class="post-item">
                    <a class="title" href="#">Rust 之谜</a> · <a class="cate" href="#">原创</a> ·  <span class="time">3 个月前</span> <span class="pull-right">20 回复</span>
                  </div>


                     <div class="post-item">
                    <a class="title" href="#">Rust 之谜</a> · <a class="cate" href="#">原创</a> ·  <span class="time">3 个月前</span> <span class="pull-right">20 回复</span>
                  </div>

                </div>

              </div>
            </div>

<!-- 我的评论 start -->
          <div class="card" style="border: none">
              <div class="card-block comment-block">

                <div class="user-comment-container">

                  <div class="comment-item clearfix">
                    <a class="title" href="#">Rust 之谜</a><span class="time">3 个月前</span>
                    <p>some!!</p>

                  </div>

                  <div class="comment-item clearfix">
                    <a class="title" href="#">Rust 之谜</a><span class="time">3 个月前</span>
                    <p>some!!</p>

                  </div>

                  <div class="comment-item clearfix">
                    <a class="title" href="#">Rust 之谜</a><span class="time">3 个月前</span>
                    <p>some!!</p>

                  </div>

                </div>

              </div>
            </div>
<!-- 我的评论 end -->


<!-- 我的消息 start -->
          <div class="card" style="border: none">
              <div class="card-block message-block">

                <div class="user-message-container">


                   <div class="message-item clearfix">
                    <img class="message-author-face" src="https://cdn.v2ex.com/gravatar/c8df01176f28e8770418ad09af467b01">
                    <a href="#" class="author">@ly</a> 在 <a class="title" href="#">Rust 之谜</a> 中回复了你<span class="time">3 个月前</span>
                    <p>some!!</p>

                  </div>

                   <div class="message-item clearfix">
                    <img class="message-author-face" src="https://cdn.v2ex.com/gravatar/c8df01176f28e8770418ad09af467b01">
                    <a href="#" class="author">@ly</a> 在 <a class="title" href="#">Rust 之谜</a> 中回复了你<span class="time">3 个月前</span>
                    <p>some!!</p>

                  </div>

                   <div class="message-item clearfix">
                    <img class="message-author-face" src="https://cdn.v2ex.com/gravatar/c8df01176f28e8770418ad09af467b01">
                    <a href="#" class="author">@ly</a> 在 <a class="title" href="#">Rust 之谜</a> 中回复了你<span class="time">3 个月前</span>
                    <p>some!!</p>

                  </div>


                </div>

              </div>
            </div>
<!-- 我的消息 end -->






          </div>




        </div>
  </div>
  <v-footer></v-footer>
</template>

<script>
import VNavBar from '../components/NavBar'
import VTip from '../components/Tip'
import VAc from '../components/Announcement'
import VFooter from '../components/Footer'


export default {
  components:{
    VNavBar,
    VAc,
    VTip,
    VFooter
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../assets/variables.styl"

.message-block
  padding 0
  border none
  .user-message-container
    .message-item
      border 1px solid #e8e8e8
      border-radius 2px
      margin-bottom .5em
      padding .5em
      .message-author-face
        width 40px
        height 40px
        float left
        border-radius 50%
        border 1px solid #f0f0f0
      a
        color #456990
      .author
        padding-left 5px
      .time
        float right
        font-size .9em
        color #ababab
      p
        margin-bottom 0
        padding-left 45px


.comment-block
  padding 0
  border none
  .user-comment-container
    .comment-item
      border 1px solid #e8e8e8
      border-radius 2px
      margin-bottom .5em
      padding .5em
      a
        color #456990
      .time
        float right
        font-size .9em
        color #ababab
      p
        margin-bottom 0

.post-block
  padding 0
  margin 0


.post-item
  color #ababab
  padding .8em .5em
  border-bottom 1px solid #e8e8e8
  border-radius 2px
  font-size .9em
  &:last-child
    border-bottom none
  .cate
    color #ababab
  a
    color #3A2F2E
    &:hover
      color #3A2F2E
      text-decoration none


.tip-back
  padding 10px
  .lead
    font-size 2.5em

.tip-msg-count
  font-size 3em
  padding 0
  color #FD7E73
.box
  text-align center
  padding 0 0.5em
  margin 0 0 13px
  background #fff
  border 1px solid #e5e5e5
  border-radius 2px
  a
    display inline-block
    color #3A2F2E
    font-weight 200
    margin 0
    padding .5em 1em
    &:hover
      text-decoration none
.container
  margin-top 20px

h6
  margin 0

hr
  padding 0
  margin 0
  color #f0f0f0

.user-face
  width 120px
  margin-bottom 15px

.user-panel-menu
  padding .5em
  a
    display inline-block
    font-weight 500
    color #3A2F2E
    margin 0 1em
    transition all .6s
    &.active
      color $mred
    &:hover
      text-decoration none
      color $mred
</style>
