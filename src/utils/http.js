// import axios from 'axios';
// import qs from 'qs';

// jsonp跨域。
const $ = {
  ajax: function (options) {
    let url = options.url;
    let dataType = options.dataType;
    let type = options.type;

    let targetProtocol = '';
    let targetHost = '';
    if (url.indexOf('http://') == 0 || url.indexOf('https://') == 0) {
      //不同源，
      let urlObj = new URL(url);
      targetProtocol = urlObj.protocol;
      targetHost = urlObj.host;
    } else {
      //同源，直接设置为本地的就行了
      targetProtocol = location.protocol;
      targetHost = location.host;
    }
    //是否为jsonp，否的话自动走正常的ajax
    if (dataType == 'jsonp') {
      //判断是否同源
      if (location.protocol == targetProtocol && location.host == targetHost) {
        //同源，省略。。。。。
      } else {
        //不同源,
        // 1. 生成script标签，
        // 2. 随机生成callback的名字。
        // 3. 设置src为url，并且后面还要拼接callback参数。
        let oScript = document.createElement('script');
        let callback = "jquery" + Math.floor(Math.random() * 100000000000000);
        window[callback] = options.success;
        if (url.indexOf('?') !== -1) {
          //代表之前已经有参数。
          oScript.src = url + '&callback=' + callback;
        } else {
          oScript.src = url + '?callback=' + callback;
        }
        document.body.appendChild(oScript);
      }
    }
  }
}



export {
  $
}
// function axiosPost (options) {
//   axios({
//     url: options.url,
//     method: 'post',
//     header: {
//       "Conten-type": "application/x-www-form-urlencoded"
//     },
//     data: qs.stringify({
//       ...options.data
//     })
//   })
//   .then((res) => {
//     options.success(res.data);
//   })
//   .catch((err) => {
//     options.error(err);
//   })
// }

// function axiosGet (options) {
//   axios(options.url)
//     .then((res) => {
//       options.success(res);
//     })
//     .catch((err) => {
//       options.error(err);
//     })
// }




