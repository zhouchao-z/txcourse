import { API } from '@/utils/config.js';
import { $ } from '@/utils/http.js';

function getCourseDatas () {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: API.getCourseDatas,
      type: 'get',
      dataType: 'jsonp',
      success (data) {
        resolve(data);
      }
    })
  })
}

// function getCourseDatas () {
//   return new Promise((resolve, reject) => {
//     axiosGet({
//       url: API.getCourseDatas,
//       success (res) {
//         resolve(res);
//       },
//       error (err) {
//         reject(err);
//       }
//     })
//   })
// }
export {
  getCourseDatas
}