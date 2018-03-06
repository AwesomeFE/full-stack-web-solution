import Vue from 'vue';
import UA from 'ua-parser-js';
import map from './map';
import geolocation from './geolocation';
import { linkUrls, apiUrls } from '../../constants';

class CommonVue extends Vue {
  apiUrls = apiUrls;
  linkUrls = linkUrls;
  isMobile = new UA(navigator.userAgent).getDevice().type === 'mobile';


  getGeolocation = async () => await geolocation.getGeolocation(this.isMobile);
}

export default CommonVue;