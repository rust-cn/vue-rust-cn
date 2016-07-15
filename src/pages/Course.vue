<template>
  <v-nav-bar></v-nav-bar>
  <div class="container-fluid">
  <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="text-center">
            <h5 class="text-center animated fadeInDown"><i class="ion-ios-videocam"></i> 视频教程</h5>
            </div>
            <p class="f1rem text-center mb30 animated fadeInUp">免费的、高质量的视频教程送给你，祝愿你的能力再上一层。</p>
              <div class="row">
                <div class="col-md-3 col-sm-6 cours-video" href="#">
                  <div class="card card-default">
                    <a href="#"><img class="card-img-top img-fluid" src="http://ninghao.net/files/styles/course_cover/public/showcase/drupal8-dev-ams-showcase.jpg?itok=5fwu7yvi" alt="Card image cap"/></a>
                    <div class="card-block text-center">
                      <p class="card-title">Rust 基础教程(一)</p>
                      <p class="card-text f1rem">
                        面向初学者的简易教程

                      </p>
                    </div>
                    <div class="card-footer">
                      <a href="#" class="btn btn-block btn-sm"><i class="ion-happy-outline"></i> 开始愉快的学习</a>

                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6 cours-video" href="#">
                  <div class="card card-default">
                    <a href="#"><img class="card-img-top img-fluid" src="http://ninghao.net/files/styles/course_cover/public/showcase/wp-dev-hooks-showcase.jpg?itok=wgCzHxQ9" alt="Card image cap"/></a>
                    <div class="card-block text-center">
                      <p class="card-title">Rust 基础教程(二)</p>
                      <p class="card-text f1rem">
                        面向初学者的简易教程

                      </p>
                    </div>
                    <div class="card-footer">
                      <a href="#" class="btn btn-block btn-sm"><i class="ion-happy-outline"></i> 开始愉快的学习</a>

                    </div>

                  </div>
                </div>
                <div class="col-md-3 col-sm-6 cours-video" href="#">
                  <div class="card card-default">
                    <a href="#"><img class="card-img-top img-fluid" src="http://ninghao.net/files/styles/course_cover/public/showcase/drupal8-dev-form-api-showcase.jpg?itok=-rLVBvOM" alt="Card image cap"/></a>
                    <div class="card-block text-center">
                      <p class="card-title">Rust 基础教程(三)</p>
                      <p class="card-text f1rem">
                        面向初学者的简易教程

                      </p>
                    </div>
                    <div class="card-footer">
                      <a href="#" class="btn btn-block btn-sm"><i class="ion-happy-outline"></i> 开始愉快的学习</a>


                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6 cours-video" href="#">
                  <div class="card card-default">
                    <a href="#"><img class="card-img-top img-fluid" src="http://ninghao.net/files/styles/course_cover/public/showcase/mixitup-showcase.jpg?itok=DwRCzl6T" alt="Card image cap"/></a>
                    <div class="card-block text-center">
                      <p class="card-title">Rust 基础教程(四)</p>
                      <p class="card-text f1rem">
                        面向初学者的简易教程

                      </p>
                    </div>
                    <div class="card-footer">
                      <a href="#" class="btn btn-block btn-sm"><i class="ion-happy-outline"></i> 开始愉快的学习</a>

                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6 cours-video" href="#">
                  <div class="card card-default">
                    <a href="#"><img class="card-img-top img-fluid" src="http://ninghao.net/files/styles/course_cover/public/showcase/docker-showcase.jpg?itok=_6Ga3Vq3" alt="Card image cap"/></a>
                    <div class="card-block text-center">
                      <p class="card-title">Rust 基础教程(终)</p>
                      <p class="card-text f1rem">
                        面向初学者的简易教程

                      </p>
                    </div>
                    <div class="card-footer">
                      <a href="#" class="btn btn-block btn-sm"><i class="ion-happy-outline"></i> 开始愉快的学习</a>

                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6 cours-video" href="#">
                  <div class="card card-default">
                    <a href="#"><img class="card-img-top img-fluid" src="http://ninghao.net/files/styles/course_cover/public/showcase/plyr-showcase.jpg?itok=J62DfcfC" alt="Card image cap"/></a>
                    <div class="card-block text-center">
                      <p class="card-title">Rust RESTful Api</p>
                      <p class="card-text f1rem">
                        Rust 开发 Web 的进阶课程

                      </p>
                    </div>
                    <div class="card-footer">
                      <a href="#" class="btn btn-block btn-sm"><i class="ion-happy-outline"></i> 开始愉快的学习</a>

                    </div>
                  </div>
                </div>


              </div>
          </div>
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

export default {
  components:{
    VNavBar,
    VAc,
    VTip,
    VFooter
  },
  data () {
    return {

    }
  },

  ready(){

  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/variables.styl'

.container-fluid
  background url('../assets/geometry/geometry_@2X.png')
  overflow hidden
  margin-bottom -20px
p.f1rem
  margin-bottom 27px
  margin-top 10px


h5
  display inline-block
  border-bottom 1px solid $mcol
  padding 0 1em
.container
  margin-top 20px




.card-title
  font-size 1.2em

.cours-video
  margin-bottom 25px
  .card-footer
    padding 0
    a
      color #333
      font-size .9rem
      &:hover
        color $mcol
  .card-block
    padding 0
    p
      margin .5em 0
    .card-text
      padding 0 .5em

</style>
