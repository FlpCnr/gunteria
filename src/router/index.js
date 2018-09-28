import Vue from 'vue'
import Router from 'vue-router'
import LaunchScreen from '@/components/LaunchScreen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LaunchScreen',
      component: LaunchScreen
    }
  ]
})
