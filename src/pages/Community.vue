<template>
  <v-nav-bar></v-nav-bar>
  <v-message :message="message"></v-message>
  <div class="container">
    <div class="row">
        <div class="col-md-9 col-sm-12 col-xs-12">
          <div class="card animated slideInLeft">
              <div class="card-header text-right filter-link">
                <a href="javascript:;" @click="changeFilter('all')" :class="{'active':category == 'all'}">默认</a>
                <a href="javascript:;" @click="changeFilter('good')" :class="{'active':category == 'good'}">优质内容</a>
                <a href="javascript:;" @click="changeFilter('noReplay')" :class="{'active':category == 'noReplay'}">无人问津</a>
                <a href="javascript:;" @click="changeFilter('newCreate')" :class="{'active':category == 'newCreate'}">最新创建</a>
              </div>
              <div class="card-block post-list">
                <v-list :page="listPage" :url="url" :category="category"></v-list>

                <v-pagination :current-page="currentPage" :all-page="allPage"></v-pagination>
              </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-12 col-xs-12 animated slideInRight" id="right-panel">



          <v-login-tip></v-login-tip>

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
import VLoginTip from '../components/LoginTip'
import VMessage from '../components/Message'

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
    VPagination,
    VLoginTip,
    VMessage
  },
  data () {
    return {
      isLogin: sessionStorage.user_id ? 1 : 0,
      listPage: 1,
      currentPage: 1,
      allPage: 1,
      category: 'all',
      message: ''
    }
  },
  methods:{
    changeFilter(category){
      this.category = category
      console.log('changed ' + this.category)
    }
  },
  events:{
    changePage(page){
      this.listPage = page
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '../assets/variables.styl'

hr
  margin 8px 0


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
    border-bottom 1px solid $mcol
  &:hover
    text-decoration none
    border-bottom 1px solid $mcol
</style>
