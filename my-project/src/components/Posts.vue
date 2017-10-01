<template>
  <div class="posts">
    <h1></h1>
    <h2>Posts</h2>
    <div v-for="post in posts">
      <h2>{{ post.title }}</h2>
      <router-link :to="{ path: 'post/', params: { postId: post.id }}">Read More</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'posts',
  data () {
    return {
      posts: this.$store.state.posts
    }
  },
  mounted () {
    this.$store.dispatch('getPosts')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
