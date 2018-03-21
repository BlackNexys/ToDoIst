<template>
  <div class="wrapper">
  <div class="Overview">
    <div v-for="todo in todosList" class="todoList">
        <div class="todo">
          <span>{{todo.name}}</span>
          <a v-if="deleteMode" v-on:click="deleteTodo(todo)" type="button btn-lg pointer" name="delete"><i class="fa fa-trash deleteLine"></i></a>
          <span v-else>
            <a v-if="todo.active" v-on:click="updateTodo(todo)" type="button btn-lg pointer" name="done"><i class="fa fa-circle"></i></a>
            <a v-else-if="!todo.active" v-on:click="updateTodo(todo)" type="button btn-lg pointer" name="done"><i class="fa fa-check-circle"></i></a>
          </span>
      </div>
    </div>
  </div>
  <button class="btn-lg red deleteBtn" v-bind:class="{ active: deleteMode }" v-on:click="deleteMode = !deleteMode" type="button" name="button"><i class="fa fa-trash"></i></button>
</div>

</template>

<script>
export default {
  name: 'Overview',
  data: function () {
    return {
      todosList: [],
      deleteMode: false,
    }
  },
  methods: {
    refreshTodo: function () {
      const self = this;
      this.$http.get('http://localhost:8000/todos')
        .then(response => {
          self.todosList = response.body;
        })
    },
    updateTodo: function (todo) {
      // update the list of todos
      const self = this;
      const url = "http://localhost:8000/todos/" + todo._id;
      var newState = "";

      if (todo.active) {
        newState = "false";
      }else {
        newState = "true";
      }

      this.$http.put(url, {
        "active": newState
      })
      self.refreshTodo();
    },

    deleteTodo: function (todo) {
      // deletes todo
      const self = this;
      const url = "http://localhost:8000/todos/" + todo._id;
      this.$http.delete(url)
      self.refreshTodo();
    },
  },
  mounted () {
    this.refreshTodo();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
