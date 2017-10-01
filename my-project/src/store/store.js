import Vue from 'vue'
import Vuex from 'vuex'
var axios = require('axios')

Vue.use(Vuex)

var root = 'https://jsonplaceholder.typicode.com'

export default new Vuex.Store({
  state: {
    posts: [],
    post: {},
    tasks: {}
  },
  getters: {
    post: state => {
      return state.post
    },
    posts: state => {
      return state.posts
    },
    tasks: state => {
      return state.tasks
    }
  },
  mutations: {
    getPosts (state, {posts}) {
      state.posts = posts
    },
    getPost (state, {post}) {
      state.post = post
    },
    getTasks (state, {tasks}) {
      state.tasks = tasks
    },
    changeCompletion (state, {key, task}) {
      state.tasks[key] = task
    }
  },
  actions: {
    getPosts (context) {
      axios.get(root + '/posts')
          .then(function (response) {
            context.commit('getPosts', {posts: response.data})
          })
          .catch(function (error) {
            console.log(error)
          })
    },
    getPost (context, {id}) {
      axios.get(root + '/posts/' + id)
          .then(function (response) {
            context.commit('getPost', {post: response.data})
          })
          .catch(function (error) {
            console.log(error)
          })
    },
    getTasks (context) {
      axios.get(root + '/todos')
          .then(function (response) {
            context.commit('getTasks', {tasks: response.data})
          })
          .catch(function (error) {
            console.log(error)
          })
    },
    changeCompletion (context, {key, value}) {
      this.state.tasks[key].completed = value
      context.commit('changeCompletion', {key: key, task: this.state.tasks[key]})
    }
  }
})
