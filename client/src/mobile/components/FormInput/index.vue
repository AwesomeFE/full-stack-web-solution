<template>
  <div :class="formInputClass">
    <input
      :name="name"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      v-if="validate"
      v-validate="validate"
      @input="inputHandler"
    />
    <input
      :name="name"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      v-else
      @input="inputHandler"
    />
    <span v-if="errorMsg">{{errorMsg}}</span>
  </div>
</template>

<script>
import { Vue } from '../../common';
import { Component } from 'vue-property-decorator';

@Component({
  props: {
    name: String,
    type: String,
    value: String,
    validate: String,
    placeholder: String,
    errorMsg: String,
  },
  inject: [
    '$validator'
  ]
})
class FormInput extends Vue {
  get isInvalid() {
    return this.$validator.errors.items.some(item => item.field === this.name);
  }

  get formInputClass() {
    return [
      'FormInput',
      { hasError: this.isInvalid }
    ];
  }

  inputHandler(event) {
    this.$emit('input', event.target.value);
  }
}

export default FormInput;
</script>

<style type="text/scss" lang="scss">
</style>
