<template>
  <div class="post">
    <div>
      <h2>{{ post.title }}</h2>
      <div>
      {{ post.body }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'post',
  data () {
    return {
      post: this.$store.state.post
    }
  },
  created () {
    this.$store.dispatch('getPost', {id: this.$route.params.postId})
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
