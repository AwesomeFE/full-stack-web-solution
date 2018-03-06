class Geolocation {
  getMobileGeolocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 2000 });
    });
  }

  getMapGeolocation(mapType = 'baidu') {
    return new Promise((resolve, reject) => {
      resolve({});
    });
  }

  async getGeolocation(isMobile) {
    return isMobile
      ? await this.getMobileGeolocation()
      : await this.getMapGeolocation();
  }
}

export default new Geolocation();