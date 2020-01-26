import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import presentacion from '@/components/presentacion'
import contenidos from '@/components/contenidos'
import metodologia from '@/components/metodologia'
import recomendaciones from '@/components/recomendaciones'
import bibliografia from '@/components/bibliografia'
import evaluacion from '@/components/evaluacion'
import profesorado from '@/components/profesorado'
import orientaciones from '@/components/orientaciones'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/presentacion',
      name: 'presentacion',
      component: presentacion
    },
    {
      path: '/contenidos',
      name: 'contenidos',
      component: contenidos
    },
    {
      path: '/metodologia',
      name: 'metodologia',
      component: metodologia
    },
    {
      path: '/recomendaciones',
      name: 'recomendaciones',
      component: recomendaciones
    },
    {
      path: '/bibliografia',
      name: 'bibliografia',
      component: bibliografia
    },
    {
      path: '/evaluacion',
      name: 'evaluacion',
      component: evaluacion
    },
    {
      path: '/profesorado',
      name: 'profesorado',
      component: profesorado
    },
    {
      path: '/orientaciones',
      name: 'orientaciones',
      component: orientaciones
    }
  ]
})