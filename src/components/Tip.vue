<template>
<div class="card tip">
  <div class="card-block">
    <!-- <p>优雅的排版，能给阅读者带来一天的好心情</p> -->
    <strong>你知道吗？</strong>
    <p>
      <span class="label-g" style="padding: 0.25em 0.5em">G</span> 代表 Great 代表精华<br>
      <span class="label-j" style="padding: 0.25em 0.6em;">J</span> 代表 Job 用来标记招聘话题<br>
      <span class="label-r" style="padding: 0.25em 0.5em">R</span> 代表 Rust 标记管理员指定为精华，并收录入 Wiki 中<br>
      <span class="label-t" style="padding: 0.25em 0.6em">T</span> 代表 Top 置顶的标签
    </p>
  </div>
</div>
</template>



<style lang="stylus" scoped>
.tip
  strong
    display inline-block
    padding-bottom 5px
  .card-header
    padding 5px
  .card-block
    padding 5px 15px
    font-size .9rem
    line-height 2.3
</style>
