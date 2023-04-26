import {
  createWebHistory,
  createRouter
} from 'vue-router'
import Posts from './Posts.vue'
import Post from './Posts.vue'
import NewPost from './NewPost.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/posts',
      component: Posts,
      children: [
        {
          path: 'new',
          component: NewPost
        },
        {
          path: ':id',
          component: Post
        }

      ]
    }
  ]
})

export { router }