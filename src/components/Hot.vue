<template>
        <div class="hot-post">

            <div class="post animated fadeInLeft">
              <a class="title" v-link="{ name: 'article', params: {article_id: source[0].id}}">
                  <span class="label label-g" v-if="source[0].label.g">G</span><span class="label label-j" v-if="source[0].label.j">J</span><span class="label label-r" v-if="source[0].label.r">R</span><span class="label label-t" v-if="source[0].label.t">T</span>

                {{ source[0].title }}

              </a>
                <div class="description"><a href="#">{{ source[0].category }}</a> · 由 <a href="">{{ source[0].last_comment.user_name }}</a> 于 {{ source[0].last_comment.last_time }}回复
                </div>
            </div>

            <div class="post animated fadeInRight">
              <a class="title" v-link="{ name: 'article', params: {article_id: source[1].id}}">
                  <span class="label label-g" v-if="source[1].label.g">G</span><span class="label label-j" v-if="source[1].label.j">J</span><span class="label label-r" v-if="source[1].label.r">R</span><span class="label label-t" v-if="source[1].label.t">T</span>

                {{ source[1].title }}

              </a>
                <div class="description"><a href="#">{{ source[1].category }}</a> · 由 <a href="">{{ source[1].last_comment.user_name }}</a> 于 {{ source[1].last_comment.last_time }}回复
                </div>
            </div>

        </div>

</template>

<script>
import { getHot } from '../api/getIndexHot'

export default {

  data () {
    let source
    getHot((response) => {
      source = response.content
    })

    return {
      source: source
    }
  }
}

</script>

<style lang="stylus" scoped>
    .hot-post
      height 70px
      position absolute
      bottom 0
      left 0
      right 0
      background-color rgba(255,255,255,.25)
      text-align center
      overflow hidden
      @media screen and (max-width: 600px)
          display none
      .post
        z-index 5
        text-align left
        padding-right 2em
        padding-top .7em
        display inline-block
        color #3A2F2E
        a
          color #fff
        .title
          display inline-block
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 300px;
        .description
          font-size .9rem
          display block
          text-align center
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 300px;

</style>
