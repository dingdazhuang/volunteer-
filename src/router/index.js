import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/components/pages/HomePage/HomePage'
import ClassRoom from '@/components/pages/ClassRoom/ClassRoom'
import FindColleage from '@/components/pages/FindColleage/FindColleage'
import University from '@/components/pages/University/Index.vue'

import Overview from '@/components/pages/University/Overview.vue'
import Major from '@/components/pages/University/Major.vue'
import Treate from '@/components/pages/University/Treate.vue'
import Evalute from '@/components/pages/University/Evalute.vue'
import Envior from '@/components/pages/University/Envior.vue'

import Recommend from '@/components/pages/Recommend/Recommend'
import Profession from '@/components/pages/Profession/Profession'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomePage,
      children: [
        {
          path: '',
          redirect: 'classroom'
        },
        {
          path: '/classroom',
          component: ClassRoom,
          name: 'classroom'
        },
        {
          path: '/recommend',
          component: Recommend
        },
        {
          path: '/colleage',
          component: FindColleage
        },
        {
          path: '/profession',
          component: Profession
        }
      ]
    },
    {
      path: '/university',
      component: University,
      children: [
        {
          path: '',
          component: Overview
        },
        {
          path: 'major',
          component: Major
        },
        {
          path: 'treate',
          component: Treate
        },
        {
          path: 'evaluate',
          component: Evalute
        },
        {
          path: 'envior',
          component: Envior
        }
      ]
    }
  ]
})
