Canvas 学习笔记 -- by Damon

## canvas对于图像的操作能力
功能：动态的图像合成、图形的背景、游戏界面

图片源：
1. img元素 Image()/<img>
2. <video>
3. <canvas>
4. ImageBitmap 高性能的位图，可以低延迟地绘制

## 使用案例
1. 绘制图片
```js
ctx.drawImage(image, x, y)
// image: img/canvas obj
// (x, y) start position
```

2. 缩放 Scaling
```js
ctx.drawImage(image, x, y, width, height)
// width, height => 控制大小
```

3. 切片 Slicing
```js
ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
// s => source
// d => desination
// 方法被重载了，注意区别
```
例子： 相框

4. Gecko的新属性，控制图像的缩放行为
cx.mozImageSmoothingEnabled = false;

## 用canvas替换图片
```js
window.onload = function() {

  drawImage();
  slicing();
};

// 1
function drawImage() {

  var cvs = document.getElementById('my-canvas-1');
  var ctx = cvs.getContext('2d');

  var img = new Image();
  img.src = 'img/img00003.png';
  img.onload = function() {
    ctx.drawImage(img, 100, 0);

    var pattern = ctx.createPattern(img, 'no-repeat');
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, 300, 150);
  };
}
// 2
function slicing() {

  var cvs = document.getElementById('my-canvas-2');
  var ctx = cvs.getContext('2d');

  var frame = new Image();
  frame.src = 'img/frame.jpg';
  frame.onload = function() {

    ctx.drawImage(frame, 0, 0);

    var img = new Image();
    img.src = 'img/img00004.png';
    img.onload = function() {

      ctx.drawImage(img, 0, 0, 200, 200, 50, 50, 200, 100);
    };
  };
}
// 3

```














