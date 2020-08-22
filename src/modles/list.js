import { API } from '@/utils/config.js';
import { $ } from '@/utils/http.js';


function getCourses (field) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: API.getCourses + field,  
      type: 'get',
      dataType: 'jsonp',
      success (data) {
        // resolve(data);
        console.log(0);
      }
    })
  })
}

function getCourseFields () {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: API.getCourseFields,
      type: 'get',
      dataType: 'jsonp',
      success (data) {
        resolve(data);
      }
    })
  })
}



// function getCourses (field) {
//   return new Promise((resolve, reject) => {
//     axiosGet({
//       url: API.getCourses + field,
//       success (data) {
//         resolve(data);
//       },
//       error (err) {
//         reject(err);
//       }
//     })
//   })
// }

// function getCourseFields () {
//   return new Promise((resolve, reject) => {
//     axiosGet({
//       url: API.getCourseFields,
//       success (data) {
//         resolve(data);
//       },
//       error (err) {
//         reject(err);
//       }
//     })
//   })
// }

export {
  getCourseFields,
  getCourses
}