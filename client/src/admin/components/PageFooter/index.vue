<template>
  <div class="PageFooter">
    <section class="PageFooter__row" v-for="(footerItems, footerTitle) in footerRows" :key="footerTitle">
      <h1 class="PageFooter__title">{{$t(footerTitle)}}</h1>
      <ul>
        <li class="PageFooter__item" v-for="footerItem in footerItems" :key="footerItem">
          <router-link :to="'/'">{{$t(footerItem)}}</router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { Vue } from '../../common';
import { Component } from 'vue-property-decorator';

@Component()
class PageFooter extends Vue {
  footerRows = {
    SITEMAP: ['INTRODUCTION', 'STRUCTURE', 'PRODUCT', 'BUSINESS'],
    JOININ: ['SHOPJOIN', 'PROXYJOIN', 'GIFTCARD', 'OTHER'],
    ABOUT: ['CONTACTUS']
  };
}

export default PageFooter;
</script>

<style type="text/scss" lang="scss">
@import '../../assets/scss/variable.scss';

.PageFooter {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: $footer-height;
  background: $footer-color;
  padding: 10px $page-padding-value;
  overflow: hidden;
  box-sizing: border-box;
  .PageFooter__title {
    font-size: 12px;
  }
  .PageFooter__row {
    width: 150px;
    float: left;
  }
  .PageFooter__item {
    font-size: 12px;
  }
}
</style>

<i18n>
zh-cn:
  SITEMAP: "网站导航"
  INTRODUCTION: "公司介绍"
  STRUCTURE: "集团构成"
  PRODUCT: "产品介绍"
  BUSINESS: "经营业务"

  JOININ: "加盟合作"
  SHOPJOIN: "店铺加盟"
  PROXYJOIN: "代理加盟"
  GIFTCARD: "礼品卡采购"
  OTHER: "其他业务合作"

  ABOUT: "关于我们"
  CONTACTUS: "关于我们"

  MEDIA: "公众号"
  WEIXIN: "微信"
  SINA: "新浪"

en-us:
  LOGO: "Coffee Bar"
</i18n>
