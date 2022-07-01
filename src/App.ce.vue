<template>
  <img alt="Brightside Logo" src="./assets/logo.png">
  <unitSearch v-if="page=='Unit Search'" />
</template>

<script>
import unitSearch from './components/UnitSearch.vue'

export default {
  name: 'App',
  components: {
    unitSearch,
  },
  props: {
    page: {
      default: 'Unit Search',
      type: String
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
