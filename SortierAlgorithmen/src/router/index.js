import Vue from 'vue'
import Router from 'vue-router'
import SortierAlgorithmen from '@/components/SortierAlgorithmen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SortierAlgorithmen',
      component: SortierAlgorithmen
    }
  ]
})
