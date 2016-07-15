<template>
<div class="container" transition="expand" v-if="message">
  <p style="margin:0">
    {{ message }}
  </p>
</div>

</template>


<script>

export default {
  props: ['message'],
  watch: {
    message() {
        clearTimeout(this.timer)

        this.timer = setTimeout(() => {
          this.$dispatch('resetMessage')
        }, 3000)


    }
  }
}

</script>


<style lang="stylus">
@import '../assets/variables.styl'

/* 必需 */
.expand-transition {
  transition all .3s ease
  font-size .8rem
  padding-top .4rem
  padding-bottom .3rem
  min-height 3em
  line-height 2em
  margin-top .8rem
  // background $mcol
  color $mcol
  border 1px dotted $mcol
  border-radius .5rem
}

/* .expand-enter 定义进入的开始状态 */
/* .expand-leave 定义离开的结束状态 */
.expand-enter, .expand-leave {
  opacity 0
}
</style>
