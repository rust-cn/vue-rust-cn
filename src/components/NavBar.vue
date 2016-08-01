<template>
  <nav class="navbar navbar-light" id="top_nav"
  :class="{'transparent':transparent,'fixed':!transparent,'ofixe': ofixed}" >
    <div class="container r_nav_bar">
        <button id="navbar-toggler" class="navbar-toggler" type="button" @click='toggle'>
          &#9776;
        </button>
        <div class="collapse navbar-toggleable-sm {{ nav_satus?'show':'hidden' }}">
          <a class="navbar-brand site_name" href="/"><b>Rust</b> China</a>
          <ul class="nav navbar-nav">
            <li class="nav-item" :class="{'active': navStatus('community')}">
              <a class="nav-link" v-link="{ path: '/community' }">社区<span class="label label-circle"></span></a>
            </li>

<!--             <li class="nav-item" :class="{'active': navStatus('course')}">
              <a class="nav-link" v-link="{ path: '/course' }">教程<span class="label label-circle"></span></a>
            </li> -->

            <li class="nav-item" :class="{'active': navStatus('employment')}">
              <a class="nav-link" v-link="{ path: '/employment' }">招聘<span class="label label-circle"></span></a>
            </li>

            <li class="nav-item" :class="{'active': navStatus('news')}">
              <a class="nav-link" v-link="{ path: '/news' }">News<span class="label label-circle"></span></a>
            </li>

            <li class="nav-item" :class="{'active': navStatus('wiki')}">
              <a class="nav-link" v-link="{ path: '/wiki' }">Wiki<span class="label label-circle"></span></a>
            </li>




          </ul>

          <div class="nav navbar-nav pull-right" v-if="user_id">
            <a href="#" v-link="{name:'user',params:{'user_id': user_id}}">
              <img class="face_img" :src="face_img" />
            </a>
          </div>

          <ul class="nav navbar-nav pull-right"  v-else>
            <li class="nav-item">
              <a class="btn btn-sm btn-mint-outline" v-link="{ path: '/register' }">注册</a>
            </li>
            <li class="nav-item">
              <a class="btn btn-sm btn-mint" v-link="{ path: '/login' }">登录</a>
            </li>
          </ul>

        </div>
    </div>
  </nav>

  <div class="h45" v-if="!transparent"></div>

</template>

<script>
export default {
  data () {
    return {
      nav_satus: false,
      user_id: sessionStorage.user_id ? sessionStorage.user_id: '',
      face_img: sessionStorage.face_img ? sessionStorage.face_img: 'http://temp.im/30x30/007AFF/fff'
    }
  },
  props:{
    transparent: {
      type: Boolean,
      default: false
    },
    ofixed: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    toggle(){
      this.nav_satus = !this.nav_satus
    },
    navStatus(path){
      return this.$route.path.indexOf(path) > 0
    },

  },
  ready (){
      $('#to_top').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        if ($('.right-all')) {
          $('.right-all').css('top',$(document).scrollTop())
        }

      });
      window.onscroll = function() {
        let nav = document.getElementById('top_nav')
        if (!this.ofixed) {

          if(document.body.scrollTop>=15){
            if (nav.className.indexOf('transparent')) {
              nav.className = nav.className.replace('transparent','fixed')
            }
          }

          if (document.body.scrollTop <= 10 ) {
            if (nav.className.indexOf('fixed')) {
              nav.className = nav.className.replace('fixed','transparent')
            }
          }


        }

      }

  }
}

</script>


<style lang="stylus" scoped>
@import '../assets/variables.styl'

.face_img
  height 30px
  width 30px

.navbar
  // border-radius none !important

.transparent
  background-color transparent
  border none
  position absolute
  width 100%
  top 0
  left 0
  right 0
  z-index 5
  box-shadow none
  -webkit-font-smoothing antialiased
  transition all .3s ease
  border none

nav.fixed,
nav.ofixe
  position fixed
  right 0
  left 0
  top 0 !important
  z-index 2000
  margin auto
  background-color #fff
  -webkit-transition background-color .3s ease
  transition: background-color .3s ease
  box-shadow 0 0 4px rgba(0,0,0,.25)



button:focus
  outline none

.r_nav_bar
  line-height 1
  .navbar-nav .nav-item.active a.nav-link .label
    background $mcol
  .navbar-nav
    &.pull-right .nav-item
      top 0
      margin 0 .2em
    .nav-item
      position relative
      top -.3em
      margin 0 1em
    a.nav-link
      color rgba(0,0,0,.8)
      position relative
      &:hover
        color rgba(0,0,0,.8)
        .label
          background $mcol
      .label
        display inline-block
        position absolute
        bottom -.3em
        left 30%
        background #e8e8e8
  .site_name
    font-size 1.5em
    padding 0
    b
      color $mcol


@media screen and (max-width: 800px)
  .btn-mint-outline
    background-color #fff
  .btn-mint-outline:hover
    background-color $mcol
    color $fff
  .breadcrumb>li, .navbar-brand, .navbar-nav .nav-item
    float none
    display block
    text-align center
    background-color #f0f0f0
    margin 5px 0 !important
    border-radius 2px
  .navbar-nav.pull-right
    float none
    .nav-item a
      display block

  .r_nav_bar .site_name
    background-color #fff !important
    padding-bottom 10px

  .r_nav_bar .navbar-nav a.nav-link .label
    display none

  .transparent
    transition none
    background-color #fff

  .nav.fixed
    transition none
  .show
    display block
  .hidden
    display none !important
  #navbar-toggler
    display block !important



@media screen and (min-width: 800px)
  #navbar-toggler
    display none !important
</style>




