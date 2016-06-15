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
  .pagination
    padding 0

.pagination .page-item
  display inline-block
  text-align center
  &.active
    a
      background $mred
      color #fff

  a
    border-radius: 3px
    margin 0 .1rem
    padding 0.25rem 0.8rem
    text-decoration none
    color grey
    &:hover
      background $mred
      color #fff

</style>
