<template>
  <div class="App">
    <router-link to="/">Home</router-link>
    <router-link to="/notFound">NotFound</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component()
class App extends Vue {

}

export default App;
</script>

<style type="text/scss" lang="scss">
.App {

}
</style>
