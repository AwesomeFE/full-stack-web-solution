<template>
  <div class="Entry">
    Entry
  </div>
</template>

<script>
import Vue from '../../commons/BasicVue';
import { Component } from 'vue-property-decorator';

@Component({
  components: {
    FormSignIn: () => import('../../components/FormSignIn'),
    FormSignUp: () => import('../../components/FormSignUp')
  }
})
class Entry extends Vue {
  
}

export default Entry;
</script>

<style type="text/scss" lang="scss">
.Entry {
}
</style>
