import axios from 'axios';
import { apiUrls } from '../../constants'

class Service {
  apiUrls = apiUrls;
  axios = axios;
}

export default Service;