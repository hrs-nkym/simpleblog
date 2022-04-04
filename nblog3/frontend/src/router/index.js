import { createRouter, createWebHistory } from 'vue-router'
import Post from '@/components/Post.vue';
import PostList from "@/components/PostList.vue";

const routes = [
  {
    path: '/',
    name: 'posts',
    component: PostList,
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Post,
    props: routes => ({
      id: Number(routes.params.id),
    })
  }
]

const router = createRouter({
  // eslint-disable-next-line no-undef
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
