<template>
  <div class="FormSignUp">
    <h1 class="FormSignUp__title">{{$t('SIGNUP')}}</h1>
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
  </div>
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
class FormSignUp extends Vue {
  formData = {
    username: '',
    password: ''
  };

  disabled = false;

  async handleSubmit() {
    const isFormValid = await this.$validator.validateAll();

    if(isFormValid) {
      try {
        this.disableFrom();
        await this.$store.dispatch('user/signup', this.formData);

      } catch(e) {
        this.enableFrom();
      }
    }
  }

  disableFrom() {
    this.disabled = true;
  }

  enableFrom() {
    this.disabled = false;
  }
}

export default FormSignUp;
</script>

<style type="text/scss" lang="scss">
.FormSignUp {
}
</style>

<i18n>
zh-cn:
  SIGNUP: "注册"
  PLACEHOLDER_USERNAME: "用户名"
  PLACEHOLDER_PASSWORD: "密码"
  SUBMIT: "递交"
en-us:
  LOGO: "Coffee Bar"
</i18n>