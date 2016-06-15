<template>
  <v-nav-bar></v-nav-bar>
  <div class="container">
    <div class="row">
        <div class="col-md-9 col-sm-12 col-xs-12">
          <div class="card animated slideInLeft">
              <div class="card-header text-right filter-link">
                <a href="#" class="active">默认</a>
                <a href="#">优质内容</a>
                <a href="#">无人问津</a>
                <a href="#">最新创建</a>
              </div>
              <div class="card-block post-list">
                <v-list></v-list>
                <v-list></v-list>
                <v-pagination></v-pagination>
              </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-12 col-xs-12 animated slideInRight" id="right-panel">

          <div class="card">
            <div class="card-block operate">
              <span><strong>Rust China</strong></span><br>
              <span class="ofade">做最时髦的开发者社区</span>
              <hr>
              <!-- <a href="#" class="btn btn-info btn-block">创建话题</a> -->
              <div class="text-center">
                <a href="#" class="btn btn-mint-outline btn-sm">立即注册</a>
                <p class="f1rem m0">已经注册的用户，请 <a href="#">登陆</a></p>
              </div>
            </div>
          </div>

          <v-ac></v-ac>
          <v-tip></v-tip>
          <v-works-show></v-works-show>
          <v-ad></v-ad>
          <v-friend></v-friend>

        </div>



      </div>
  </div>
  <v-footer></v-footer>
</template>

<script>
import VNavBar from '../components/NavBar'
import VList from '../components/List'
import VFriend from '../components/Friend'
import VTip from '../components/Tip'
import VWorksShow from '../components/WorksShow'
import VAd from '../components/Ad'
import VAc from '../components/Announcement'
import VFooter from '../components/Footer'
import VPagination from '../components/Pagination'

export default {
  components: {
    VNavBar,
    VList,
    VFriend,
    VTip,
    VWorksShow,
    VAd,
    VAc,
    VFooter,
    VPagination
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Community'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '../assets/variables.styl'

hr
  margin 8px 0

.operate
  padding 5px 10px
  .m0
    margin-top 10px

.ofade
  color #ccc
  font-size .7rem


.post-list
  padding 0
.container
  margin-top 20px
.filter-link a
  font-size .9rem
  color #808080
  display inline-block
  padding 0 .7em
  border-bottom 1px solid #fafafa
  &.active
    border-bottom 1px solid $mred
  &:hover
    text-decoration none
    border-bottom 1px solid $mred
</style>
