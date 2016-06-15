import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import Bar from './components/ByeBye'
import Hello from './pages/Hello'
import Community from './pages/Community'
import Employment from './pages/Employment'
import Wiki from './pages/Wiki'
import Course from './pages/Course'
import Register from './pages/Register'
import Login from './pages/Login'
import News from './pages/News'
import Article from './pages/Article'
import User from './pages/User'
import Setting from './pages/Setting'

/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })

Vue.use(Router)

let router = new Router()

router.map({
    '/': {
        component: Hello
    },
    '/community': {
        component: Community
    },
    '/employment': {
        component: Employment
    },
    '/wiki': {
        component: Wiki
    },
    '/course': {
        component: Course
    },
    '/register': {
        component: Register
    },
    '/login': {
        component: Login
    },
    '/news': {
        component: News
    },
    '/article': {
        component: Article
    },
    '/user': {
        component: User
    },
    '/setting': {
        component: Setting
    }

})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/'
})

router.start(App, 'app')
