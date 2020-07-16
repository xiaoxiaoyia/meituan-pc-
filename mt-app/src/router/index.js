import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import defaultpage from '@/layout/default.vue'
import blankpage from '@/layout/blank.vue'
import Index from '@/page/index.vue'
import ChangeCity from '@/page/changeCity.vue'
import GoodsList from '@/page/goodsList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'defaultpage',
      component: defaultpage,
      children: [{
        path: 'index',
        name: 'index',
        component: Index
      },
      {
        path: 's/:name',
        name: 'goods',
        component: GoodsList
      }, {
        path: 'changeCity',
        name: 'changeCity',
        component: ChangeCity
      }]
    },
    {
      path: '/blank',
      name: 'blankpage',
      component: blankpage
    }
  ]
})
