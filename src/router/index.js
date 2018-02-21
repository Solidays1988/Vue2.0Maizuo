import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import indexList from '@/view/list/index.vue'
import film from '@/view/film/index.vue'
import detail from '@/view/film/detail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/',
    name: 'index',
    component: indexList
  },
  {
    path: '/film',
    name: 'film',
    component: film
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: detail
  }
  ]
})
