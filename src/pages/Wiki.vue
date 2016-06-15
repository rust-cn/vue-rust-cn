<template>
  <v-nav-bar></v-nav-bar>
  <div class="container">

    <div class="card text-center animated slideInDown" style="margin-top: 20px">
      <div class="card-block" style="padding: .5em ">
        <span>社区 Wiki </span>
      </div>
    </div>


<!--     <div class="card text-center">
      <div class="card-block">
        <h3 class="lead ofade">空空如也!等待添加</h3>
      </div>
    </div> -->


    <div class="card animated slideInLeft" id="main_post_container">
        <div class="card-block">
          <div class="row">
             <div class="col-md-6 col-sm-12 col-xs-12">
              <list></list>
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12">
              <list></list>
            </div>
          </div>

        </div>

    </div>


    <div class="card animated fadeInRight">
        <div class="card-header text-center">
          站外资源
        </div>
        <div class="card-block">
          <div class="row">
            <div class="col-md-6 col-sm-12 col-xs-12">
              <ul class="list-group">
                <li class="list-group-item">
                  <a href="">重返20岁</a>
                </li>
                <li class="list-group-item">
                  <a href="">博物馆奇妙夜3</a>
                </li>
                <li class="list-group-item">
                  <a href="">第七子：降魔之战</a>
                </li>
              </ul>
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12">
              <ul class="list-group">
                <li class="list-group-item">
                  <a href="">重返20岁</a>
                </li>
                <li class="list-group-item">
                  <a href="">博物馆奇妙夜3</a>
                </li>
                <li class="list-group-item">
                  <a href="">第七子：降魔之战</a>
                </li>
              </ul>
            </div>
          </div>

        </div>

    </div>

  </div>
  <v-footer></v-footer>
</template>

<script>
import VNavBar from '../components/NavBar'
import List from '../components/List'
import VFooter from '../components/Footer'

export default {
  components:{
    VNavBar,
    List,
    VFooter
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
.list-group-item
  border none
  a
    color #373a3c

.card-block
  padding 0
  .row > div:first-child
    padding-right 0
  .row > div:last-child
    padding-left 0


@media (max-width: 768px)
  #main_post_container .card-block
    padding 0
    .row > div:first-child
      padding-left .9375rem
      padding-right .9375rem !important
    .row > div:last-child
      padding-left .9375rem !important
      padding-right .9375rem



.ofade
  color #E2E2E2


h6,h3
  margin 0

h3
  padding 3em
h6
  font-size 1em
.wiki-content
  min-height 400px

.wiki-content.empty
  padding 190px
  vertical-align middle
</style>
