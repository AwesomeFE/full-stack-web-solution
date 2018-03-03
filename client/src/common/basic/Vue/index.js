import Vue from 'vue';
import { linkUrls, apiUrls } from '../../constants';

class CommonVue extends Vue {
  apiUrls = apiUrls;
  linkUrls = linkUrls;
}

export default CommonVue;