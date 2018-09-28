import Vue from 'vue'
import Router from 'vue-router'
import LaunchScreen from '@/components/LaunchScreen'
import Game from '@/components/game/Game'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LaunchScreen',
      component: LaunchScreen
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    }
  ]
})
