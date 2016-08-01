<template>
  <v-nav-bar :transparent="true" :ofixed="false"></v-nav-bar>
  <div class="container-fluid background">
    <div class="container">
        <img src="../assets/logo.png" class="main_logo" style="visibility: hidden ">
        <h3 class="animated fadeInDown">Rust China，Welcome your arrival！<p>Rust 由 Mozilla 开发的一门注重安全、性能和并发的语言。 </p></h3>
          <v-hot></v-hot>
    </div>
  </div>

  <div class="container">
    <div class="ours_about animated fadeIn">
      <span>Rust China 是 Rust 开发者的社区，更多详情请见<a href="#">这里</a>，源码在 <span class="ion-social-github"></span> <a href="#">这里</a></span>
    </div>

    <div class="card animated fadeIn" id="main_post_container">
        <div class="card-header text-muted text-center">
          社区精华帖子
        </div>
        <div class="card-block">
          <div class="row">
             <div class="col-md-6 col-sm-12 col-xs-12">
              <list :page="listPage" :url="url" category="index1"></list>
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12">
              <list :page="listPage" :url="url" category="index2"></list>
            </div>
          </div>

        </div>
        <div class="card-footer text-center">
          <a href="#" class="text-muted read-more">阅读更多</a>
        </div>
    </div>


    <v-category></v-category>
    <v-city></v-city>
  </div>

 <v-footer></v-footer>


</template>

<script>
import VNavBar from '../components/NavBar'
import List from '../components/List'
import VCategory from '../components/Category'
import VCity from '../components/City'
import VFooter from '../components/Footer'
import VHot from '../components/Hot'

export default {
  components: {
    VNavBar,
    List,
    VCategory,
    VCity,
    VFooter,
    VHot
  },
  data () {
    return {
      url: 'https://api.local/index/list',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

#main_post_container .card-block
  padding 0
  .row > div:first-child
    padding-right 0
  .row > div:last-child
    padding-left 0


.read-more
  &:hover
    color #778087 !important

@media (max-width: 768px)
  #main_post_container .card-block
    padding 0
    .row > div:first-child
      padding-left .9375rem
      padding-right .9375rem !important
    .row > div:last-child
      padding-left .9375rem !important
      padding-right .9375rem

.ours_about
  text-align center
  padding .5em
  margin 13px 0
  background #fff
  border 1px solid #e5e5e5
  border-radius 2px
  a
    color #778087

.background
  position relative
  width 100%
  min-height 300px
  background url('../../lib/images/city.jpg') center center
  background-size cover
  .container
    padding-top 4em
    @media screen and (max-width: 600px)
      padding-top 5.5em



    .main_logo
      z-index 2
      position absolute
      max-width 12em
      @media screen and (max-width: 1000px)
        display none
    h3
      color #fff
      text-align center
      line-height 2
      font-size 2.5em
      @media screen and (max-width: 1000px)
        font-size 1.4em
      p
        font-size 1.5rem
        @media screen and (max-width: 1000px)
          font-size .9em
</style>
