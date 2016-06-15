<template>
  <v-nav-bar></v-nav-bar>
  <div class="container">
    <div class="row">
        <div class="col-md-9 col-sm-12 col-xs-12 animated slideInLeft">
          <div class="card">
              <div class="card-header">
                <h6>招聘 <span class="f1rem">共有 120 个主题</span></h6>
                <span class="f1rem">发帖前务必清楚规则： <a href="" class="text-muted">《敬请各位发招聘的公司注意！》</a></span>
                <hr style="margin: .1em 0;border-top: 1px solid #f0f0f0">
                <span class="f1rem">如果没有权限，或者遇见了问题请邮件联系 <strong>admin@rust-lang-cn.org</strong> 并注明来意，如：请求开通发布招聘帖权限</span>
              </div>
              <div class="card-block post-list">
                <v-list></v-list>
                <v-list></v-list>
                <div class="post-pagination">
                  <ul class="pagination">
                    <li class="page-item">
                        <a href="#pagination">
                          <i class="ion-android-arrow-back"></i>
                        </a>
                    </li>
                    <li class="page-item">
                        <a href="#pagination">
                            1
                        </a>
                    </li>
                    <li class="page-item">
                        <span>...</span>
                    </li>
                    <li class="page-item">
                        <a href="#pagination">
                            6
                        </a>
                    </li>
                    <li class="page-item active">
                        <a href="#pagination">
                            7
                        </a>
                    </li>
                    <li class="page-item">
                        <a href="#pagination">
                            8
                        </a>
                    </li>
                    <li class="page-item">
                        <span>...</span>
                    </li>
                    <li class="page-item">
                        <a href="#pagination">
                            12
                        </a>
                    </li>
                    <li class="page-item">
                        <a href="#pagination">
                          <i class="ion-android-arrow-forward"></i>
                        </a>
                    </li>
                </ul>
                </div>
              </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-12 col-xs-12 animated slideInRight" id="right-panel">

          <div class="card">
            <div class="card-block operate">
              <span><strong>Rust China</strong></span><br>
              <span class="f1rem ofade">做最时髦的开发者社区</span>
              <hr>
              <!-- <a href="#" class="btn btn-info btn-block">创建话题</a> -->
              <div class="text-center">
                <a href="#" class="btn btn-mint-outline btn-sm">立即注册</a>
                <p class="f1rem m0">已经注册的用户，请 <a href="#" class="text-muted">登陆</a></p>
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

export default {
  components: {
    VNavBar,
    VList,
    VFriend,
    VTip,
    VWorksShow,
    VAd,
    VAc,
    VFooter
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Community'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '../assets/variables.styl'

h6
  margin 0

.operate
  padding .8rem 1.25rem
  .m0
    margin-top 10px

.ofade
  color #ccc



.post-pagination
  .pagination
    padding 0

.pagination .page-item a
    border-radius: 3rem
    margin 0 .1rem
    padding 0.25rem 0.8rem
    text-decoration none
    font-size 1rem

.post-list
  padding 0
.container
  margin-top 20px
.filter-link a
  font-size 1rem
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
