<template>
  <div class="Entry">
    <div class="Entry__boardcast">Here is Ad.</div>
    <div class="Entry__form">
      <FormSignIn v-show="isSignIn"></FormSignIn>
      <FormSignUp v-show="isSignUp"></FormSignUp>
    </div>
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
  get isSignIn() {
    return this.$route.query.type === 'signin';
  }

  get isSignUp() {
    return this.$route.query.type === 'signup';
  }
}

export default Entry;
</script>

<style type="text/scss" lang="scss">
.Entry {
  .Entry__boardcast {
    float: left;
    width: 50%;
    height: 100%;
  }
  .Entry__form {
    margin-left: 50%;
  }
}
</style>
