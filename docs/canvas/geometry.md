canvas学习笔记--by Damon

## 基础用法
1. 默认宽高300x150
2. 标签 
3. 渲染上下文

## 绘制形状

### 矩形 rect
```js
ctx.fillRect(x, y , w, h)
// x, y => position
// w, h => width and height
ctx.strokeRect
// 边框没有颜色
ctx.clearRect
```

> 除了矩形外都需要先建立好路径，然后填充操作
beginPath => closePath => stroke/fill

### triangle/line
```js
ctx.moveTo(x, y)
ctx.stroke()
ctx.
```

### arc
```js
ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise)
```

### bezier
```js
ctx.quadraticCurveTo(cp1x, cp1y, x, y) 
ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
// 一次和二次贝塞尔曲线， 区别，控制点一个和两个
```

### path2D
```js
var path2D = new Path2D();
// 为路径对象，存储路径，直到最后使用
// path2D.rect....
// ctx.fill(path2D)
```










