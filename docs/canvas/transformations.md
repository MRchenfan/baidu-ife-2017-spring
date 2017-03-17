Canvas 学习笔记之变形 -- by Damon

## 状态保存和恢复
```js
ctx.save()
ctx.restore()
```
状态包括：
- 当前的移动、旋转、缩放
- strokeStyle, fillStyle, globalAlpha, lineWidth, lineCap, lineJoin, miterLimit, shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor, globalCompositeOperation 的值
- 当前的裁切路径（cliping path)

状态栈：
每次调用save就是入栈操作，restore就是出栈操作

```js
ctx.translate(x, y)
ctx.rotate(ratio)
ctx.scale(x, y)
ctx.setTransform(m11, m12, m21, m22, dx, dy)
ctx.resetTransform() // == ctx.setTransform(1, 0, 0, 1, 0, 0)
```
m11: 水平方向的缩放
m12: 水平方向的偏移
m21: 竖直方向的偏移
m22: 竖直方向的缩放
dx: 水平方向的移动
dy: 竖直方向的移动

常用方法
变换前先save一下状态，然后变形，画完后重置

```js
window.onload = function() {

  translate();
  rotating();
  scale();
};

// 1
function translate() {

  var cvs = document.getElementById('my-canvas-1');
  var ctx = cvs.getContext('2d');
  cvs.height = 300;
  cvs.width = 300;

  ctx.fillRect(0, 0, 300, 300);
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      ctx.save();
      ctx.strokeStyle = '#9CFF00';
      ctx.translate(50 + j * 100, 50 + i * 100);
      ctx.beginPath();
      ctx.arc(0, 0, 20, 0, Math.PI * 2);
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    }
  }
}
// 2
function rotating() {

  var cvs = document.getElementById('my-canvas-2');
  var ctx = cvs.getContext('2d');
  cvs.height = 300;
  cvs.width = 300;

  ctx.translate(150, 150);
  for (var i = 1; i < 7; i++) {
    for (var j = 0; j < i * 6; j++) {
      ctx.save();
      ctx.fillStyle = '#F0F';
      ctx.rotate(2 * Math.PI / 6 / i * j);
      ctx.beginPath();
      ctx.arc(20 * i, 0, 4, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
  }
}
// 3
function scale() {

  var cvs = document.getElementById('my-canvas-3');
  var ctx = cvs.getContext('2d');
  cvs.height = 300;
  cvs.width = 300;

  ctx.translate(150, 150);
  for (var i = 1; i < 7; i++) {
    for (var j = 0; j < i * 6; j++) {
      ctx.save();
      ctx.scale(1 + i / 10, 1 + i / 10);
      ctx.fillStyle = '#F0F';
      ctx.rotate(2 * Math.PI / 6 / i * j);
      ctx.beginPath();
      ctx.arc(20 * i, 0, 4, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
  }
}
// 4
function transform() {
  var cvs = document.getElementById('my-canvas-2');
  var ctx = cvs.getContext('2d');
  cvs.height = 300;
  cvs.width = 300;

  ctx.translate(150, 150);
  for (var i = 1; i < 7; i++) {
    for (var j = 0; j < i * 6; j++) {
      ctx.save();
      ctx.fillStyle = '#F0F';
      ctx.rotate(2 * Math.PI / 6 / i * j);
      ctx.beginPath();
      ctx.arc(20 * i, 0, 4, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
  }
}
```