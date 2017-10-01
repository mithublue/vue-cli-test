<template>
  <div class="todos">
    <h1></h1>
    <div style="float: left; width: 300px;">
      <h2>All Tasks</h2>
      <div v-for="(task,key) in tasks">
        <h4>{{ task.title }}</h4>
        <a href="javascript:" @click="changeCompletion(key, true)">Make complete</a>
      </div>
    </div>
    <div style="float: left; width: 300px;">
      <h2>Incomplete Tasks</h2>
      <div v-for="(task,key) in tasks" v-if="task.completed == false">

        <h4>{{ task.title }}</h4>
        <a href="javascript:" @click="changeCompletion(key, true)">Make complete</a>
      </div>
    </div>
    <div style="float: left; width: 300px;">
      <h2>Incomplete Tasks</h2>
      <div v-for="(task,key) in tasks" v-if="task.completed == true">
        <h4>{{ task.title }}</h4>
        <a href="javascript:" @click="changeCompletion(key, false)">Make Incomplete</a>
      </div>
    </div>

  </div>
</template>

<script>
var vue = require('vue')

export default {
  name: 'todos',
  data () {
    return {
      tasks: this.$store.state.tasks
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.$store.dispatch('getTasks')
    },
    changeCompletion (key, value) {
      vue.$set(this.tasks[key], 'completed', value)
    }
  },
  created () {
    this.fetchData()
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