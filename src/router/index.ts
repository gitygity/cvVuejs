import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        header: () => import('../components/header/HeaderCv.vue'),
        default: () => import('../components/content/ContentCv.vue'),
        footer: () => import('../components/footer/FooterCv.vue')
      }
    },
    {
      path: '/about',
      name: 'about',
      components: {
        header: () => import('../components/header/HeaderCv.vue'),
        default: () => import('../views/AboutView.vue'),
        footer: () => import('../components/footer/FooterCv.vue')
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView }
  ]
})

function canUserAccess(to: RouteLocationNormalized) {
  //get auth for access to private or public rout
  if (to.name !== 'Login') {
    return true
  }
  return false
}

router.beforeEach(async (to, from) => {
  const canAccess = await canUserAccess(to)
  if (!canAccess) return '/login'
})
export default router
