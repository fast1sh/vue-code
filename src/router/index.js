import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/Index.vue'),
      meta: {
        pageTitle: 'Home',
        layout: 'full',
      },
    },
    {
      path: '/second-page',
      name: 'second-page',
      component: () => import('@/views/SecondPage.vue'),
      meta: {
        pageTitle: 'Second Page',
        breadcrumb: [
          {
            text: 'Second Page',
            active: true,
          },
        ],
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('@/views/Registration.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/reset',
      name: 'reset',
      component: () => import('@/views/ResetPassword.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/reset-code',
      name: 'reset-code',
      component: () => import('@/views/ResetPasswordCode.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/article/:article',
      name: 'article',
      component: () => import('@/views/Article.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/document/:document',
      name: 'document',
      component: () => import('@/views/Document.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/subscription',
      name: 'subscription',
      component: () => import('@/views/Subscription.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('@/views/Contacts.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('@/views/Account.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
