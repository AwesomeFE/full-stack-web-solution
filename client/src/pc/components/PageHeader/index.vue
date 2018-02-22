<template>
  <div class="PageHeader">
    <div class="PageHeader__logo">
      <router-link to="/">{{$t('LOGO')}}</router-link>
    </div>
    <div class="PageHeader__body">
      <div class="left">
        <span>icon</span>
      </div>
      <div class="right">
        <router-link class="menu" to="/">{{$t('CART')}}</router-link>
        <router-link class="menu" to="/signin">{{$t('SIGNIN')}}</router-link>
        <router-link class="menu" to="/signup">{{$t('SIGNUP')}}</router-link>
        <a class="menu">{{$t('ACCOUNT')}}</a>
        <router-link class="menu" to="/signout">{{$t('SIGNOUT')}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
})
class PageHeader extends Vue {
  mounted() {
  }
}

export default PageHeader;
</script>

<style type="text/scss" lang="scss">
$header-height: 50px;

.PageHeader {
  height: $header-height;
  background: #ccc;
  padding: 0 10px;
  .PageHeader__logo {
    float: left;
    height: 100%;
    line-height: $header-height;
    margin-right: 10px;
    a {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .PageHeader__body {
    height: 100%;
    line-height: $header-height;
    .left {
      height: 100%;
      float: left;
    }
    .right {
      height: 100%;
      float: right;
    }
  }
}
</style>

<i18n>
zh-cn:
  LOGO: "咖啡馆"
  CART: "购物车"
  ACCOUNT: "我的账户"
  SIGNIN: "登录"
  SIGNUP: "注册"
  SIGNOUT: "退出"
  ORDER: "我的订单"
  SETTING: "账户设置"
en-us:
  LOGO: "Coffee Bar"
</i18n>