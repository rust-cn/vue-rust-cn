<template>
<div class="post-pagination">
  <ul class="pagination">
    <li class="page-item">
        <a href="#pagination">
          <i class="ion-android-arrow-back"></i>
        </a>
    </li>
    <li class="page-item">
        <a href="#pagination">
            1
        </a>
    </li>
    <li class="page-item">
        <span>...</span>
    </li>
    <li class="page-item">
        <a href="#pagination">
            6
        </a>
    </li>
    <li class="page-item active">
        <a href="#pagination">
            7
        </a>
    </li>
    <li class="page-item">
        <a href="#pagination">
            8
        </a>
    </li>
    <li class="page-item">
        <span>...</span>
    </li>
    <li class="page-item">
        <a href="#pagination">
            12
        </a>
    </li>
    <li class="page-item">
        <a href="#pagination">
          <i class="ion-android-arrow-forward"></i>
        </a>
    </li>
  </ul>
</div>
</template>

<script>

export default {

}
</script>

<style lang="stylus" scoped>
@import '../assets/variables.styl'

.post-pagination
  text-align center
  border-top 1px dotted #f0f0f0
  .pagination
    padding 0
    margin-top .7rem
    margin-bottom .7rem

.pagination .page-item
  display inline-block
  text-align center
  &.active
    a
      background $mcol
      color #fff

  a
    border-radius: 3px
    margin 0 .1rem
    padding 0.25rem 1.5rem
    text-decoration none
    color grey
    transition all .4s
    &:hover
      background $mcol
      color #fff

</style>
