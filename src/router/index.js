import Vue from 'vue'
import Router from 'vue-router'

// router guardians
import GuardianBeforeEach from './guardians/guardian-before-each'
import GuardianAfterEach from './guardians/guardian-after-each'

Vue.use(Router)

/**
 * Load vue views
 * When the env is development, hot update the components
 */
const _import = process.env.NODE_ENV === 'production'
  ? file => () => import(`@/views/${file}.vue`)
  : file => require(`@/views/${file}.vue`).default

/**
 * Single routes map
 */
const singleRoutes = [
  { path: '/', name: 'Index', component: _import('index') },
  { path: '/404', name: 'NotFound', component: _import('errors/404') },
  { path: '*', redirect: '/404' }
]

/**
 * Root router
 */
const router = new Router({
  routes: [
    ...singleRoutes
  ]
})

/**
 * Add router guardians
 */
router.beforeEach(GuardianBeforeEach)
router.afterEach(GuardianAfterEach)

export default router
