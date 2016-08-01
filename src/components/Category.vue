<template>
    <div class="card">
        <div class="card-header text-muted">
          节点导航
        </div>
        <div class="card-block">
          <div class="item" v-for="item in category">
              <div class="pull-left cate_dad ofade">{{item.name}}</div>
              <div class="content">
                <a v-for="cate in item.content" v-link="{ name: 'node',params: {node_id : cate.id}}" class="cate">{{ cate.name }}</a>
              </div>
          </div>

        </div>


    </div>
</template>

<script>
import { getAllNode } from '../api/getAllNode'

export default {
  data(){
    let source
    getAllNode((ret) => {
      source  = ret
    })
    return {
      category: source.content
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/variables.styl'

.card-block
  padding 5px 10px

.ofade
  color #aaa
.card
  margin-top 20px
  .item
    padding .1em 0
    .cate_dad
      width 150px
      text-align right
      padding-right 30px
      @media (max-width: 500px)
        width 80px
    .content
      padding-left 150px
      @media (max-width: 500px)
        padding-left 80px
      a
        text-align center
        display inline-block
        color #333
        width 80px
        white-space nowrap
        text-overflow ellipsis
        overflow hidden
        border-bottom 1px solid #fff
        &:hover
          text-decoration none
          border-bottom 1px solid $mcol
</style>
