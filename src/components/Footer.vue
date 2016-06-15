<template>
  <div class="warp">
    <div class="container" id="footer">
      <!-- <img class="foot_logo" src="../assets/logo.png"> -->
      <div class="foot_logo">
        <span>R</span>
      </div>
      <div class="foot_link">
        <ul>
          <li><a href="#">关于</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">RustConf</a></li>
          <li><a href="#">Status</a></li>
          <li><a href="#">API</a></li>
          <li><a href="#">广告投放</a></li>
          <li><a href="#">鸣谢</a></li>
          <li>🇨🇳</li>
        </ul>

        <p class="foot_info">致力于推动 Rust 的发展,不排斥其他语言. <br></p>

        <p class="foot_info">
        POWER BY RUST <br>
        VERSION: 1.0.0.1 · 21ms · UTC 03:14 · PVG 11:14 · LAX 20:14 · JFK 23:14
        </p>

        <p class="record">
          <a href="http://www.miibeian.gov.cn/" target="_blank">湘ICP备1234567号-1</a>

        </p>
      </div>

    <a id="to_top" class="btn btn-mint-outline"><i class="ion-ios-arrow-up"></i></a>
    </div>
  </div>

</template>

<script>
export default {

}
</script>


<style lang="stylus" scoped>
@import '../assets/variables.styl'

#footer
  position relative

#to_top
  position absolute
  right 28px
  bottom 10px
  border-radius 50%
  padding 0.1rem 0.6rem

.warp
  margin-top 20px
  background #fff
  overflow hidden
  border-top 1px solid rgba(0,0,0,.1)
  font-size .7em
.foot_logo
  float right
  line-height 1
  span
    font-size 8em
    color $mred
.foot_link
  ul
    padding 0
    list-style none
    margin 10px 0 0
    li
      display inline-block
      padding .5em .1em
      a
        color gray
        font-weight 300
        font-size 13px
      &:after
        content '  ·'
        color #e2e2e2
      &:last-child:after
        content ''
.foot_info
  color #bcbcbc
.record
  padding 0 0 .5em
  a
    color #3A2F2E
</style>
