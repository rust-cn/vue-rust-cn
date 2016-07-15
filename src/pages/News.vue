<template>
  <v-nav-bar></v-nav-bar>
  <div class="container">
        <div class="row">
          <div class="col-md-9 col-sm-12 col-xs-12 animated slideInLeft">
            <div class="card">
              <div class="card-header">
                <h6><strong>News</strong>
                  <span><small>  新闻</small></span>
                  <a class="pull-right text-info" href="#"><i class="ion-social-rss"></i> RSS</a>
                </h6>
                <span class="f1rem">每周都会收集有意思的一些东西，通过 RSS 推送给大家</span>

              </div>
              <div class="card-block">


                <table class="table table-hover">
            <thead>
              <tr>
                <th>新闻标题</th>
                <th>分类</th>
                <th>推荐值</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="title"><a href="#">自己动手写 chrome 天气扩展</a></td>
                <td>Chrome</td>
                <td class="star">❤ ❤ ❤ ❤</td>
              </tr>


              <tr>
                <td class="title"><a href="#123">自己动手写 chrome 天气扩展</a></td>
                <td>Chrome</td>
                <td class="star">❤ ❤ ❤ ❤</td>
              </tr>

            </tbody>
          </table>
<v-pagination></v-pagination>

              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-12 col-xs-12 animated slideInRight">
            <v-ac></v-ac>
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
import VPagination from '../components/Pagination'


export default {
  components:{
    VNavBar,
    VAc,
    VTip,
    VFooter,
    VPagination
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>

@media (max-width:600px)
  tr > td:nth-child(2),
  tr > td:nth-child(3),
  tr > th:nth-child(2),
  tr > th:nth-child(3)
    display none

.table
  margin-bottom 0


.title a:visited,
.title :active
  color #ccc


a
  color #3A2F2E
  font-size .9rem
.card-block
  padding 0
.container
  margin-top 20px

h6
  margin 0
hr
  padding 0
  margin 0
  color #f0f0f0
.star
  color #FC6633
</style>
