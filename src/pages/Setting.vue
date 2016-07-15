<template>
  <v-nav-bar></v-nav-bar>
  <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-12 col-xs-12 animated slideInLeft">
            <div class="card">
              <div class="card-block">

                <div class="text-center">
                  <img class="img-circle user-face" src="https://ruby-china-files.b0.upaiyun.com/user/big_avatar/11178.jpg">
                  <p style="margin-top: 20px"><a href="#" class="btn btn-sm btn-primary">上传头像</a></p>
                </div>

              </div>
            </div>


          <div class="card">
              <div class="card-block">

                <form>
                    <div class="form-group">
                      <input type="text" name="" class="form-control" placeholder="旧密码">
                    </div>
                    <div class="form-group">
                      <input type="text" name="" class="form-control" placeholder="新密码">
                    </div>
                    <div class="form-group">
                      <input type="text" name="" class="form-control" placeholder="确认密码">
                    </div>
                    <div class="text-center">
                      <input type="submit" class="btn btn-sm" value="提交">
                    </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-md-9 col-sm-12 col-xs-12 animated slideInRight">
            <div class="card ">
              <div class="card-block">

                <form class="form-horizontal">
                  <fieldset class="form-group row">
                    <label for="inputEmail" class="col-lg-2 control-label"><strong>名称</strong></label>
                    <div class="col-lg-12">
                      <input type="text" class="form-control" id="inputEmail" placeholder="" value="Yugo">
                    </div>
                  </fieldset>
                  <fieldset class="form-group row">
                    <label for="inputPassword" class="col-lg-2 control-label"><strong>邮箱</strong></label>
                    <div class="col-lg-12">
                      <input type="text" class="form-control" id="inputPassword" placeholder="Password" value="1sdfa@gmail.com" disabled>
                    </div>
                  </fieldset>

                  <fieldset class="form-group row">
                    <label for="inputPassword" class="col-lg-2 control-label"><strong>新浪微博</strong></label>
                    <div class="col-lg-12">
                      <input type="text" class="form-control" id="inputPassword" placeholder="Password" value="xxxxxxxx" >
                    </div>
                  </fieldset>


                  <fieldset class="form-group row">
                    <label for="inputPassword" class="col-lg-2 control-label"><strong>个人博客</strong></label>
                    <div class="col-lg-12">
                      <input type="text" class="form-control" id="inputPassword" placeholder="Password" value="xxx" >
                    </div>
                  </fieldset>


                  <fieldset class="form-group row">
                    <label for="inputPassword" class="col-lg-2 control-label"><strong>Github 地址</strong></label>
                    <div class="col-lg-12">
                      <input type="text" class="form-control" id="inputPassword" placeholder="Password" value="xxxxx" >
                    </div>
                  </fieldset>

                   <fieldset class="form-group row">
                    <label for="inputPassword" class="col-lg-2 control-label"><strong>个人简介</strong></label>
                    <div class="col-lg-12">
                      <textarea class="form-control" style="min-width: 100%;min-height:100px">
倔强的病人
                      </textarea>
                    </div>
                  </fieldset>

                  <fieldset class="form-group row">
                    <div class="col-lg-12">
                      <button type="submit" class="btn btn-sm btn-mint-outline pull-right">提交</button>
                    </div>
                  </fieldset>

                </form>

              </div>
            </div>
          </div>
  </div>
  </div>
  <v-footer></v-footer>
</template>

<script>
import VNavBar from '../components/NavBar'
import VFooter from '../components/Footer'


export default {
  components:{
    VNavBar,
    VFooter
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>

.user-face
  display inline-block

.container
  margin-top 20px
  // min-height 400px
h6
  margin 0
hr
  padding 0
  margin 0
  color #f0f0f0
</style>
