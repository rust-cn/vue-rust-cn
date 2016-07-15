<template>
  <v-nav-bar></v-nav-bar>

  <div class="container">
        <div class="row">
          <div class="col-md-9 col-sm-12 col-xs-12">
            <div class="card">
              <div class="card-header clearfix">

              <ol class="breadcrumb">
                <li><a href="#">Rust China</a></li>
                <li class="active">{{ metaData.category }}</li>
                <a class="author-face pull-right" v-link="{ path:'user', params: { userId: metaData.author.id }}"><img :src=metaData.author.face_img :alt=metaData.author.name></a>
              </ol>

                <h6 class="card-title">{{ metaData.title }}</h6>
                <span>
                  <span class="f1rem" href="#">{{ metaData.release_time }}</span> ·
                  <span class="f1rem" href="#">最后由 <a v-link="{ path:'user', params: { userId: metaData.last_comment.user_id }}" class="text-muted">{{metaData.last_comment.user_name}}</a> {{metaData.last_comment.last_time}}回复</span> ·
                  <span class="f1rem" href="#">{{ metaData.viewCount }} 次点击</span>
                </span>
              </div>

              <div class="card-block article-content">

              {{{ metaData.content }}}

              </div>




            </div>

            <div class="card comments-container">
              <div class="card-header">
                <span><strong >{{ metaData.comments.length }}</strong> 回复 | <span class="f1rem">至今 {{ metaData.now_time }}</span></span>
              </div>
              <div class="card-block comment-list" id="comment-list">

              <div class="list-group">


                <div class="list-group-item" v-for="(index,item) in metaData.comments">
                  <div class="list-group-item-heading clearfix">
                      <a v-link="{path:'user',params: {userId: item.user_id}}">
                        <img class="pull-left img-circle comment-user-face img-thumbnail" :src=item.face_img />
                      </a>

                    <div class="comment-info">
                      <a class="text-muted" v-link="{path:'user',params: {userId: item.user_id}}">{{item.username}}</a> ·
                      <span class="text-success"># {{index+1}}</span> ·
                      <span class="f1rem">{{item.time}}</span>
                      <span class="f1rem">{{item.up_count&&item.up_count!=0? ' · '+item.up_count +' 个赞': ''}}</span>

                      <span class="pull-right">
                        <a href="javascript:;" @click="editComment(item.id,item.content,index)" v-if="isMe(item.user_id)" class="comment-edit"><i class="ion-android-create"></i></a>

                        <a href="javascript:;" @click="delComment(item.id,index)" v-if="isMe(item.user_id)" class="comment-delete"><i class="ion-ios-trash"></i></a>

                        <a href="javascript:;" @click=commentUp(item.id,index)><i class="ion-thumbsup"></i></a>
                        <a href="#"><i class="ion-arrow-return-left"></i></a>
                      </span>
                    </div>


                    <div class="comment-body">
                      {{{ item.content }}}
                    </div>


                  </div>

                </div>


              </div>


              </div>
            </div>




            <div class="card">

              <div class="card-block" id="comment-from">
                  <textarea id="user-comment-content" name="comment" style="height:300px">
                  </textarea>
              </div>
            </div>

            <a @click="comment(metaData.id)" v-if="!upDataCommentData"  class="btn btn-block btn-info-outline pull-right f1rem submit">提交评论</a>
            <a @click="upDataComment" v-if="upDataCommentData" class="btn btn-block btn-info-outline pull-right f1rem submit">更新评论</a>



          </div>

          <div class="col-md-3 col-sm-12 col-xs-12 right-all">
            <div class="right-content">

              <div class="card">
                <div class="card-header text-center">Like / Dislike</div>
                <div class="card-block ">

                  <div class="text-center">
                    <i class="ion-ios-heart"></i>
                    <div class="like_count"><span class="up">{{ metaData.favourite.up }}</span><span class="line">/</span><span class="down"> {{ metaData.favourite.down }}</span> </div>
                    <a @click="articleFavourite('up',metaData.id)" :class="{'clicked': favouriteStatus.up}" class="label label-up"> <i class="ion-happy-outline"></i></a>
                    <a @click="articleFavourite('down',metaData.id)" :class="{'clicked': favouriteStatus.down}" class="label label-down"> <i class="ion-sad-outline"></i></a>
                  </div>

                </div>
              </div>

              <a @click="enshrine(metaData.id)" class="btn btn-sm btn-block btn-pink-outline" :class="{'clicked': enshrineStatus}"><i class="ion-android-bookmark"></i> 收藏</a>


              <a @click="scrollToComment" class="btn btn-sm btn-block btn-warning-outline"><i class="ion-chatbubble-working"></i> 快速查看评论</a>

              <a @click="scrollToEdit" class="btn btn-sm btn-block btn-info-outline"><i class="ion-android-create"></i> 编写评论</a>

              <v-message :message="message"></v-message>

            </div>
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
import VMessage from '../components/Message'

import xss from 'xss'
import hljs from 'highlight.js'

require('../assets/hljs/styles/default.css')

let request = require('superagent')
let config = require('../../build//superagent-mock-config')
let superagentMock = require('superagent-mock')(request, config)

request.get('https://api.local/article')
       .send({article_id: 123})
       .end(function(err, res){
          console.log(res.body)
       })

export default {
  components:{
    VNavBar,
    VAc,
    VTip,
    VFooter,
    VMessage
  },
  methods: {
    // 重新编辑评论
    editComment(commentId,content,index){
      console.log(content)
      this.editor.$txt.html(content)
      this.upDataCommentData = {
        id: commentId,
        index: index,
      }
    },
    // 提交更新的评论
    upDataComment(){
      request.put('https://api.local/comment')
       .send({comment_id: this.upDataCommentData.id})
       .end((err, res) => {
          if(!res.ok&&err){
            console.log(err)
          }else{
            this.metaData.comments[this.upDataCommentData.index].content = this.editor.$txt.html()
            this.message='成功更新评论!'
            this.upDataCommentData = false
            this.editor.$txt.html('')
            console.log('upData success')
          }
      })


    },

    // 删除已有评论
    delComment(commentId,index){
      console.log(commentId);

      request.delete('https://api.local/comment')
       .send({comment_id: commentId})
       .end((err, res) => {
          if(!res.ok&&err){
            console.log(err)
          }else{
            this.metaData.comments.splice(index,1)
            this.message='成功删除自己的评论!'
            console.log('delete success')
          }
      })

    },

    // 是否属于我
    isMe(userId){
      if (sessionStorage.user_id) {
        return parseInt(userId) === parseInt(sessionStorage.user_id)
      }
      return false
    },

    // 对评论进行赞扬
    commentUp(commentId,index) {
      console.log('commentUp')
      request.post('https://api.local/support/up')
             .send({coment_id: commentId,user_id: sessionStorage.user_id})
             .end((err, res) => {
                if(!res.ok&&err){
                  console.log(err)
                }else{
                  this.metaData.comments[index].up_count++
                  this.message = '您刚刚赞了 '+(index+1)+' 楼的评论！'
                  console.log(this.metaData.comments[index].up_count)
                }
             });
    },

    // 对文章赞或者鄙视操作
    articleFavourite(opt,articleId) {
        console.log(opt,articleId)
        if (opt=== 'up') {
          if (this.favouriteStatus.up) {
             // 取消 up status
             request.post('https://api.local/article/'+opt)
             .send({article_id: articleId, delete: true})
             .end((err, res) => {
                if(!res.ok&&err){
                  console.log(err)
                }else{
                  this.metaData.favourite[opt]--
                  this.favouriteStatus.up = false
                  this.message='您已取消对该文章的赞，'+'目前该文章已经集齐 '+this.metaData.favourite[opt]+' 个赞！'
                  console.log(this.metaData.favourite[opt])
                }
            })
          }else{
            request.post('https://api.local/article/'+opt)
             .send({article_id: articleId})
             .end((err, res) => {
                if(!res.ok&&err){
                  console.log(err)
                }else{
                  this.metaData.favourite[opt]++
                  this.favouriteStatus.up = true
                  this.message='成功的给了对方一个赞，'+'目前该文章已经集齐 '+this.metaData.favourite[opt]+' 个赞！'
                  console.log(this.metaData.favourite[opt])
                }
            })
          }
        }else{
             if (this.favouriteStatus.down) {
                   // 取消 down status
                   request.post('https://api.local/article/'+opt)
                   .send({article_id: articleId, delete: true})
                   .end((err, res) => {
                      if(!res.ok&&err){
                        console.log(err)
                      }else{
                        this.metaData.favourite[opt]--
                        this.favouriteStatus.down = false
                        this.message='您已取消对该文章的鄙视，'+'该文章收到 '+this.metaData.favourite[opt]+' 人的鄙视！'
                        console.log(this.metaData.favourite[opt])
                      }
                  })
                }else{
                  request.post('https://api.local/article/'+opt)
                   .send({article_id: articleId})
                   .end((err, res) => {
                      if(!res.ok&&err){
                        console.log(err)
                      }else{
                        this.metaData.favourite[opt]++
                        this.favouriteStatus.down = true
                        this.message='成功的给了对方一个鄙视，'+'该文章收到 '+this.metaData.favourite[opt]+' 人的鄙视！'
                        console.log(this.metaData.favourite[opt])
                      }
                  })
                }


        }
    },

    // 收藏文章
    enshrine(articleId){
      request.post('https://api.local/enshrine')
             .send({article_id: articleId})
             .end((err, res)=>{
                if(!res.ok&&err){
                  console.log(err)
                }else{
                  this.enshrineStatus = !this.enshrineStatus
                  if (!this.enshrineStatus) {
                    this.message = '取消收藏成功！'
                  }else{
                    this.message = '收藏成功！'
                  }


                }
             })
    },

    // 滚动到回复输入
    scrollToEdit(){
      $("html,body").animate({scrollTop: $(".submit").offset().top}, 800)
      $('#editor').css({
                'visibility':'visible',
                });

      //应该先让区域显示出来，再显示光标
      this.editor.$txt.focus();
    },

    // 滚动到评论
    scrollToComment(){
      $("html,body").animate({scrollTop: $(".comments-container").offset().top - 48 }, 800)
    },

    // 提交评论
    comment(articleId){
      // 设置代码高亮白名单
      let options = {
        whiteList: {
          span: ['class'],
          code: ['class','codemark'],
          pre: ['class','style'],
          p:['class'],
          br: ['class'],
          img: ['src']
        },

      };
      // xss 过滤
      let content = xss(this.editor.$txt.html(),options)

      let reg=/\<p\>\<br\>\<\/p\>/g;
      content = content.replace(reg,'');

      console.log(content)

      request.post('https://api.local/comment')
             .send({article_id: articleId, user_id: sessionStorage.user_id})
             .end((err, res)=>{
                if(!res.ok&&err){
                  console.log(err)
                }else{

                  let index = this.metaData.comments.push({
                    content: content,
                    face_img: sessionStorage.face_img,
                    id: res.comment_id,
                    time: "刚刚",
                    user_id: sessionStorage.user_id,
                    username: sessionStorage.username,
                    up_count: 0
                  })
                  console.log(index)

                  this.editor.$txt.html('')
                  this.message = '评论成功！'

                }
             })
    },


  },
  events: {
    resetMessage(){
      this.message = ''
    }
  },
  data () {
    let metaData
    let favouriteStatus
    let enshrineStatus



    // 获取文章主内容
    request.get('https://api.local/article')
       .send({ article_id: this.$route.params.article_id })
       .end((err, res) => {
          metaData = res.body
       })

    // 对文章的赞和鄙视状态获取
    request.get('https://api.local/favourite')
           .send({'article_id': metaData.id , userId: sessionStorage.user_id})
           .end( (err , res) => {
              if(!res.ok&&err){
                console.log(err)
              }else{
                favouriteStatus = res.body
              }
           })
    // 是否收藏
    request.get('https://api.local/enshrine_status')
       .send({'article_id': metaData.id , userId: sessionStorage.user_id})
       .end( (err , res) => {
          if(!res.ok&&err){
            console.log(err)
          }else{
            enshrineStatus = res.body
          }
       })


    return {
      message: '',
      editor: {},
      metaData: metaData ? metaData: {},
      favouriteStatus: favouriteStatus ? favouriteStatus : { up: false , down: false },
      enshrineStatus: enshrineStatus? enshrineStatus : false,
      upDataCommentData: false
    }
  },
  computed: {

  },


  ready () {
    this.editor = new wangEditor('user-comment-content')

    this.editor.config.menus = [
        'bold',
        'underline',
        'italic',
        'strikethrough',
        'eraser',
        'forecolor',
        'quote',
        'head',
        'unorderlist',
        'orderlist',
        'alignleft',
        'aligncenter',
        'alignright',
        'link',
        'table',
        'emotion',
        'img',
        'insertcode',
        'undo',
        'redo',
        'fullscreen'
     ]

     this.editor.config.emotions = {
      // 支持多组表情

        // 第一组，id叫做 'default'
        'default': {
            title: '默认',  // 组名称
            data: 'https://raw.githubusercontent.com/wangfupeng1988/wangEditor/master/test/emotions.data'  // data 可以是一个url地址，访问该地址要能返回表情包的json文件
        },
     }

    this.editor.create()

    // 固定滚动,最多滚动到 comment 同高度

    $(document).scroll(()=>{
      // console.log($(document).scrollTop() , $('.comments-container').offset().top)
      if ($('.comments-container')) {

          if($(document).scrollTop() < $('.comments-container').offset().top ){
            $('.right-all').css('top',$(document).scrollTop())
            // console.log($('.right-all').css('top'))
          }else{
            $('.right-all').css('top',$('.comments-container').offset().top - 60)
          }

      }


    })

    // 代码高亮
    hljs.initHighlightingOnLoad();

  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/variables.styl'

#comment-from
  padding 0

.f1rem
  font-size .8rem

.list-group-item
  &:hover .comment-info .pull-right
    display block
  padding 5px
  margin 0
  border none
  margin-bottom 1px
  border-bottom 1px solid #f5f5f5
  &:last-child
    margin-bottom 0
  .comment-user-face
    max-width 48px
    margin-right 5px
    padding 0
    @media (max-width:600px)
      max-width 36px
  .comment-body,.comment-info
    padding-left 55px
  .comment-body
    font-size .85em
    line-height 1.8
  .comment-info
    a
      font-size .85em
    .pull-right
      display: none
      a
        color #1D2642
        padding-right 10px
        &:hover
          color $mcol
    @media (max-width:600px)
      padding-left 41px


.card-block
  padding 5px 10px

  &.article-content
    padding 15px

    p,img
      max-width 100%
    img
      border-radius 2px
      box-shadow 2px 2px 12px rgba(0,0,0,.25)
      display block
      margin 0 auto
    h1,h2,h3,h4,h5,h6
      border-left 2px solid $mred
      padding-left 10px
      line-height 1.5

  &.comment-list
    padding 0

.right-all
  position relative
  min-height 343px
  transition all .5s
  @media (max-width: 769px)
    position static
  .right-content
    // position fixed
    z-index 1
    .btn-pink-outline.clicked
      color #fff
      background-color #eb72b6
      border-color #eb72b6
    @media (max-width: 768px)
      position relative

.submit
  margin-bottom 1em

.ion-ios-heart
  display block
  margin-top 10px
  line-height 1
  font-size 3em
  color #E83F6F

.like_count
  display block
  margin 0 auto
  @media (max-width:930px)
    width 8em
  .up
    font-size 3em
  .line
    font-size 3em
    font-weight 100
  .down
    font-size 2em

.label
  padding 0.15em 1.3em
  font-size 1.2rem
  margin .2em

.label-up
  transition all .5s
  color #E58B7C
  border 1px solid #E58B7C
  &:hover,&.clicked
    color #fff !important
    background #E58B7C

.label-down
  transition all .5s
  color #1AB2E8
  border 1px solid #1AB2E8
  &:hover,&.clicked
    color #fff
    background #1AB2E8


.breadcrumb
  margin .1em 0
  padding 0
  background-color transparent
  font-size .9rem
  a
    color #818a91

a.author-face
  height 0

a.author-face > img
  max-width 60px
  border-radius 50%

.container
  margin-top 20px
.card-title
  margin-bottom .3rem
hr
  padding 0
  margin 0
  color #f0f0f0
</style>
