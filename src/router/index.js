import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "../views/LoginView.vue"
import HomeView from "../views/HomeView.vue"
import DashboardView from "../views/DashboardView.vue"
import FormView from "../views/FormView.vue"
import UserView from "../views/UserView.vue"
import PostView from "../views/PostView.vue"
import CategoryView from "../views/CategoryView.vue"
import ProfileView from "../views/ProfileView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/category',
      name: 'category',
      component: CategoryView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },

    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/edit',
      name: 'form',
      component: FormView
    },
    {
      path: '/user',
      name: 'user',
      component: UserView
    },
    {
      path: '/post',
      name: 'post',
      component: PostView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    // }
  ]
})

export default router
