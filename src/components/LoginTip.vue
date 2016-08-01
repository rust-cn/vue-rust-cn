<template>
      <div class="card">
        <div class="card-block operate">
          <span><strong>Rust China</strong></span><br>
          <span class="ofade">做最时髦的开发者社区</span>
          <hr v-if="!isLogin">
          <a href="#" class="btn btn-info btn-block" v-if="isLogin">创建话题</a>
          <div class="text-center" v-if="!isLogin">
            <a v-link="{ name: 'register'}" class="btn btn-mint-outline btn-sm">立即注册</a>
            <p class="f1rem m0">已经注册的用户，请 <a v-link="{ name: 'login'}">登陆</a></p>
          </div>
        </div>
      </div>
</template>


<script>


export default {
  data(){
    return{
      isLogin: sessionStorage.user_id ? 1 : 0,
    }
  }
}
</script>


<style lang="stylus" scoped>

.ofade
  color #ccc
  font-size .7rem

hr
  margin 8px 0

.operate
  padding 5px 10px
  .m0
    margin-top 10px

</style>
