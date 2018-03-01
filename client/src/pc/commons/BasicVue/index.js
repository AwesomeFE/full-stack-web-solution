import Vue from 'vue';
import { linkUrls, apiUrls } from '../../constants';

class BasicVue extends Vue {
  apiUrls = apiUrls;
  linkUrls = linkUrls;
}

export default BasicVue;