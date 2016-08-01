<template>
  <v-nav-bar></v-nav-bar>
  <div class="container">
        <div class="row">
          <div class="col-md-9 col-sm-12 col-xs-12 animated slideInLeft">
            <div class="card">
              <div class="card-header">
                <h6><strong>注册</strong></h6>
                <span class="f1rem">欢迎加入最时髦的开发者行列，跟大家一起聊聊 ？</span>
              </div>
              <div class="card-block">

                <form class="form-horizontal">
                  <fieldset class="form-group row" :class="{'has-error': emailError}">
                    <label for="inputEmail" class="col-lg-2 control-label"><strong>邮箱</strong></label>
                    <div class="col-lg-10">
                      <input type="email" v-model="userInput.email" class="form-control" id="inputEmail" placeholder="Email">
                    </div>
                  </fieldset>
                  <fieldset class="form-group row" :class="{'has-error': usernameError}">
                    <label for="inputPassword" class="col-lg-2 control-label"><strong>用户名</strong></label>
                    <div class="col-lg-10">
                      <input type="text" v-model="userInput.username" class="form-control" id="inputPassword" placeholder="Username">
                    </div>
                  </fieldset>
                  <fieldset class="form-group row" :class="{'has-error': passwordError}">
                    <label for="inputPassword" class="col-lg-2 control-label"><strong>密码</strong></label>
                    <div class="col-lg-10">
                      <input type="password" v-model="userInput.password" class="form-control" id="inputPassword" placeholder="Password">
                    </div>
                  </fieldset>

                  <fieldset class="form-group row " :class="{'has-error': confirmError}">
                    <label for="inputPassword" class="col-lg-2 control-label"><strong>确认密码</strong></label>
                    <div class="col-lg-10">
                      <input type="password" v-model="userInput.confirmPassword" class="form-control" id="inputPassword" placeholder="Confirm Password">
                    </div>
                  </fieldset>

                  <fieldset class="form-group row">
                    <div class="col-lg-12">
                      <button @click.prevent="register" class="btn btn-sm btn-mint-outline pull-right">注册</button>
                      <span class="f1rem">已有账号？那就快 <a v-link="{path:'login'}" class="text-danger">登陆</a> 吧</span>
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
  components:{
    VNavBar,
    VAc,
    VTip,
    VFooter,
    VMessage
  },
  data () {
    return {
      confirmError: false,
      passwordError: false,
      usernameError: false,
      emailError: false,
      message: '',
      userInput:{
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  watch:{
    confirmError(){
      clearTimeout(this.timer)

        this.timer = setTimeout(() => {
          this.confirmError = false
        }, 3000)
    },
    passwordError(){
        clearTimeout(this.timer)

        this.timer = setTimeout(() => {
          this.passwordError = false
        }, 3000)
    },
    usernameError(){
      clearTimeout(this.timer)

        this.timer = setTimeout(() => {
          this.usernameError = false
        }, 3000)
    },
    emailError(){
        clearTimeout(this.timer)

        this.timer = setTimeout(() => {
          this.emailError = false
        }, 3000)
    }
  },
  methods: {
    register(){
      console.log('click register')

      if (this.userInput.email.length <= 0) {
        this.emailError=true
        this.message='邮箱不能为空！'
        return
      }

      if (this.userInput.username.length <= 0) {
        this.usernameError=true
        this.message='用户名不能为空！'
        return
      }

      if (this.userInput.password.length < 6) {
        this.passwordError=true
        this.message='密码长度必须大于6位！'
        return
      }

      console.log(this.userInput.password == this.userInput.confirmPassword)
      if (this.userInput.password == this.userInput.confirmPassword) {
        request.post('https://api.local/register')
             .send({email: this.userInput.email,username:this.userInput.username,password:this.userInput.password})
             .end((err, res) => {
                  if(!res.ok&&err){
                    console.log(err)
                  }else{
                    console.log('register success')
                    sessionStorage.user_id = parseInt(res.user_id)
                    sessionStorage.face_img = res.face_img
                    sessionStorage.username = res.username

                    this.$router.go({path:'/community'})
                  }
              })
      }else{
        this.confirmError = true
        this.message='密码与确认密码不一致，请确认！'
      }


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
.has-error input
  border 1px solid red

.btn
  outline none
</style>
