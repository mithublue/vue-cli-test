import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Posts from '@/components/Posts'
import Post from '@/components/Post'
import Todos from '@/components/Todos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
    {
      path: '/post/:postId',
      name: 'post',
      component: Post
    },
    {
      path: '/todos',
      name: 'todos',
      component: Todos
    }
  ]
})
