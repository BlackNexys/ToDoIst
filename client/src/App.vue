<template>
  <div id="app">
    <header>
      <span>Todoist</span>
    </header>
    <button class="btn-lg primary create" v-if="siteTracker == 'Overview'" type="button" v-on:click="siteController = 'Create'" name="button"><i class="fa fa-plus"></i></button>
    <button class="btn-lg primary return" v-if="siteTracker == 'Create'" type="button" v-on:click="siteController = 'Overview'" name="button"><i class="fa fa-arrow-left"></i></button>
    <component :is="dynamicComponent"></component>
  </div>
</template>

<script>
import Overview from './components/Overview.vue'
import Create from './components/Create.vue'

export default {
  name: 'app',
  data: function () {
    return {
      siteController: '',
    }
  },
  computed: {
    dynamicComponent() {
      switch (this.siteController) {
        case 'Overview':
          return Overview;
          break;
        case 'Create':
          return Create;
          break;
        default:
          return Overview;
      }
    },
    siteTracker() {
      switch (this.siteController) {
        case 'Overview':
          return 'Overview';
          break;
        case 'Create':
          return 'Create';
          break;
        default:
          return 'Overview';
      }
    }
  },
  created () {
    this.$http.get('http://localhost:8000/todos')
      .then(response => {
        console.log(response)
      })
  }
}
</script>
