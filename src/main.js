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

Vue.use(Router)

let router = new Router()

router.map({
    '/': {
        name: 'index',

        component: Hello
    },
    '/community': {
        name: 'community',

        component: Community
    },
    '/employment': {
        name: 'employment',

        component: Employment
    },
    '/wiki': {
        name: 'wiki',

        component: Wiki
    },
    '/course': {
        name: 'course',

        component: Course
    },
    '/register': {
        name: 'register',

        component: Register
    },
    '/login': {
        name: 'login',

        component: Login
    },
    '/news': {
        name: 'news',
        component: News
    },
    '/article/:article_id': {
        name: 'article',
        component: Article
    },
    '/user/:user_id': {
        name: 'user',
        component: User
    },
    '/setting': {
        name: 'setting',
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
