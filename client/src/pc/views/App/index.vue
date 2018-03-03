<template>
  <div class="App">
    <PageHeader></PageHeader>
    <div class="PageBody">
      <router-view></router-view>
    </div>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import { Vue } from '../../common';
import PageHeader from '../../components/PageHeader';
import PageFooter from '../../components/PageFooter';
import { Component } from 'vue-property-decorator';

@Component({
  components: {
    PageHeader,
    PageFooter
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
@import '../../assets/scss/variable.scss';

.App {
  min-height: 100vh;
  min-width: 750px;
  position: relative;
  .PageBody {
    min-height: $page-min-height;
    padding-bottom: $footer-height;
  }
}
</style>
