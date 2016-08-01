<template>
    <div class="card">
        <div class="card-header text-muted">
          热门城市
        </div>
        <div class="card-block">
          <div class="text-left" >
            <a v-for="item in city" v-link="{ name: 'node',params: {node_id: item.id} }">{{item.name}}</a>
          </div>
        </div>
    </div>
</template>
<script>

import { getAllCity } from '../api/getAllCity'

export default {
  data(){
    let source
    getAllCity((ret) => {
      source  = ret
    })
    return {
      city: source.content
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/variables.styl'
.card-block
  padding 5px 10px
  a
    display inline-block
    color #3A2F2E
    padding .2em 1em
    border-radius 5px
    margin .3em 0
    font-size 1rem
    border 1px solid #fff
    &:hover
      text-decoration none
      border 1px solid $mcol
      color $mcol

</style>
