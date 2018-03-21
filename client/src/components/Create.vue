<template>
  <div class="wrapper">
    <div class="Overview Create">
        <input type="text" class="form-control name-input" v-model="name" placeholder="Skriv her!">
        <button class="btn-lg primary add" type="button" v-on:click="saveTodo()" name="button"><i class="fa fa-plus"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Create',
  data: function () {
    return {
      name: "",
    }
  },
  methods: {
    saveTodo: function () {
      const self = this;
      this.$http.post('http://localhost:8000/todos', {
        "name": self.name,
        "active": "true"
      })
      location.reload();
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
