import { createRouter, createWebHistory } from 'vue-router'
import PostList from "@/components/PostList.vue";

const routes = [
  {
    path: '/',
    name: 'posts',
    component: PostList,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
