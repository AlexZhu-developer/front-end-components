import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/btn',
      name:'btn',
      component:pageQuiButton
    },
    {
      path:'/list',
      name:'list',
      component:pageQuiList
    },  
    {
      path:'/nav',
      name:'nav',
      component:pageQuiNav
    },
  ]
})
