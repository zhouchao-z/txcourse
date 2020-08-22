//设置根元素标签的字体为 100px; 以iphone6为基准。
document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px';

//取消touchmove的默认事件
document.documentElement.addEventListener('touchmove', function (e) {
  if(e.touches.length > 1) {
    e.preventDefault;
  }
}, false);

//解决移动端400mm延迟
// window.addEventListener('load', function () {
//   FastClick.attach(document.body);
// }, false)
