class Map {
  loadMapScript(mapType = 'baidu') {
    return new Promise((resolve, reject) => {
      const firstJs = document.getElementsByTagName('script')[0];

      if(document.getElementById(`${mapType}Map-jssdk`)) {
        resolve();
      } else {
        const mapSDK = document.createElement('script');
        mapSDK.id = `${mapType}Map-jssdk`;
        mapSDK.src = `http://api.map.baidu.com/api?v=2.0&ak=您的密钥`;
        firstJs.parentNode.insertBefore(mapSDK, firstJs);

        mapSDK.onload = () => resolve();
      }
    });
  }
}

export default new Map();