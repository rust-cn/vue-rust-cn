<template>
  <v-nav-bar></v-nav-bar>
  <v-message :message="message"></v-message>
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

                    <tr v-for="item in content">
                      <td class="title"><a href="{{item.url}}">{{item.title}}</a></td>
                      <td>{{ item.category }}</td>
                      <td class="star"><span v-for="cout in item.star">❤ </span></td>
                    </tr>


                  </tbody>
                </table>

                <v-pagination :current-page="currentPage" :all-page="allPage"></v-pagination>

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
import VMessage from '../components/Message'
import { getList } from '../api/getList'

export default {
  components:{
    VNavBar,
    VAc,
    VTip,
    VFooter,
    VPagination,
    VMessage
  },
  data () {
    let currentPage,allPage

     getList( (ret) => {
        this.content = ret.content
        currentPage = ret.current_page
        allPage = ret.all_page
      }, 1 , "https://api.local/news/list" )

    return {
      currentPage: currentPage,
      allPage: allPage,
      message: ''
    }
  },
  methods:{
    updateList(){
      getList( (ret) => {
        this.content = ret.content
        this.allPage = ret.all_page
      }, this.currentPage , "https://api.local/news/list" )
    }
  },
  watch: {
    currentPage(){
      this.updateList()
    }
  },
  events:{
    changePage(page){
      this.currentPage = page
    },
    setPaginationStatus(currentPage,allPage){
      this.currentPage = currentPage
      this.allPage = allPage
    },
    resetMessage(){
      this.message = ''
    },
    setMessage(msg){
      this.message = msg
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
