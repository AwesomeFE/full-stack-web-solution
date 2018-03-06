<template>
  <form class="FormSignIn">
    <h1 class="FormSignIn__title">{{$t('SIGNIN')}}</h1>
    <FormInput
      validate="required"
      name="username"
      type="text"
      v-model="formData.username"
      :placeholder="$t('PLACEHOLDER_USERNAME')"
    />
    <FormInput
      validate="required"
      name="password"
      type="password"
      v-model="formData.password"
      :placeholder="$t('PLACEHOLDER_PASSWORD')"
    />
    <button type="button" @click="handleSubmit">{{$t('SUBMIT')}}</button>
  </form>
</template>

<script>
import { Vue } from '../../common';
import FormInput from '../FormInput';
import { Component } from 'vue-property-decorator';

@Component({
  components: {
    FormInput
  }
})
class FormSignIn extends Vue {
  formData = {
    username: '',
    password: ''
  };

  disabled = false;

  async handleSubmit() {
    const isFormValid = await this.$validator.validateAll();
    const position = await this.getGeolocation();

    if(isFormValid) {
      // try {
      //   this.disableFrom();
      //   await this.$store.dispatch('user/signin', this.formData);

      // } catch(e) {
      //   this.enableFrom();
      // }
    }
  }

  disableFrom() {
    this.disabled = true;
  }

  enableFrom() {
    this.disabled = false;
  }
}

export default FormSignIn;
</script>

<style type="text/scss" lang="scss">
.FormSignIn {
  display: block;
  .FormSignIn__title {

  }
}
</style>

<i18n>
zh-cn:
  SIGNIN: "登录"
  PLACEHOLDER_USERNAME: "用户名"
  PLACEHOLDER_PASSWORD: "密码"
  SUBMIT: "递交"
en-us:
  LOGO: "Coffee Bar"
</i18n>