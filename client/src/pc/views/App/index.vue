<template>
  <div class="App">
    <PageHeader></PageHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from '../../commons/BasicVue';
import PageHeader from '../../components/PageHeader';
import { Component } from 'vue-property-decorator';

@Component({
  components: {
    PageHeader
  }
})
class App extends Vue {
  async mounted() {
    await this.$store.dispatch('preLogin');
  }
}

export default App;
</script>

<style type="text/scss" lang="scss">
.App {
  min-height: 100vh;
  min-width: 100vw;
  position: relative;
}
</style>
