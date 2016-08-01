<template>
  <v-nav-bar></v-nav-bar>
  <div class="container">
        <div class="row">
          <div class="col-md-9 col-sm-12 col-xs-12 animated slideInLeft">
            <div class="card">
              <div class="card-header">
                <h6><strong>登录</strong></h6>
                <span class="f1rem">欢迎回来，我的朋友。</span>
              </div>
              <div class="card-block">

                <form class="form-horizontal">
                  <fieldset class="form-group row">
                    <label for="inputEmail" class="col-lg-2 control-label"><strong>邮箱</strong></label>
                    <div class="col-lg-10">
                      <input type="email" v-model="userInput.email" class="form-control" id="inputEmail" placeholder="Email" required>
                    </div>
                  </fieldset>
                  <fieldset class="form-group row">
                    <label for="inputPassword" class="col-lg-2 control-label"><strong>密码</strong></label>
                    <div class="col-lg-10">
                      <input type="password"  v-model="userInput.password" class="form-control" id="inputPassword" placeholder="Password" required>
                    </div>
                  </fieldset>

                  <fieldset class="form-group row">
                    <div class="col-lg-12">
                      <button type="submit" @click.prevent="login" class="btn btn-sm btn-mint-outline  pull-right">登录</button>
                      <span class="f1rem">没有账号？那就快 <a <a v-link="{path:'register'}" class="text-danger">注册</a> 吧</span>
                    </div>
                  </fieldset>

                </form>

              </div>
            </div>

            <v-message :message="message"></v-message>
          </div>
          <div class="col-md-3 col-sm-12 col-xs-12 animated slideInRight">
            <div class="card ">
              <div class="card-block">
                <a href="#" class="btn btn-block btn-dark"><span class="ion-social-github"></span> Github 登录</a>
                <a href="#" class="btn btn-block btn-danger"><span class="ion-social-google"></span> Google 登录</a>
              </div>
            </div>
            <v-tip></v-tip>
            <v-ac></v-ac>
          </div>
  </div>
  </div>
  <v-footer></v-footer>
</template>

<script>
import VNavBar from '../components/NavBar'
import VTip from '../components/Tip'
import VAc from '../components/Announcement'
import VFooter from '../components/Footer'
import VMessage from '../components/Message'

let request = require('superagent')
let config = require('../../build//superagent-mock-config')
let superagentMock = require('superagent-mock')(request, config)



export default {
  components: {
    VNavBar,
    VAc,
    VTip,
    VFooter,
    VMessage
  },
  data() {
    return {
      message: '',
      userInput: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login() {

      if (this.userInput.email.length <= 0) {
        this.emailError=true
        this.message='请输入邮箱'
        return
      }

      if (this.userInput.password.length < 6) {
        this.passwordError=true
        this.message='密码长度必须大于6位！'
        return
      }


      request.post('https://api.local/login')
             .send({email: this.userInput.email,password:this.userInput.password})
             .end((err, res) => {
                  if(!res.ok&&err){
                    console.log(err)
                    this.message = '验证失败'
                  }else{
                    console.log('login success')
                    sessionStorage.user_id = parseInt(res.user_id)
                    sessionStorage.face_img = res.face_img
                    sessionStorage.username = res.username

                    this.$router.go({path:'/community'})
                  }
              })
    }
  },
  events: {
    resetMessage(){
      this.message = ''
    }
  },
}
</script>

<style lang="stylus" scoped>
.container
  margin-top 20px
  // min-height 400px
h6
  margin 0
hr
  padding 0
  margin 0
  color #f0f0f0

.btn
  outline none
</style>
