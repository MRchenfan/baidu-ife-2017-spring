canvas 学习笔记 -- by Damon

## colors
```js
ctx.fillStye = color
ctx.strokeStyle = color
ctx.globalAlpha = alphaValue // 0 ~ 1
```

## line styles
```js
ctx.lineWidth = value
ctx.lineCap = type 
// ['butt', 'round', 'square']
ctx.lineJoin = type
// ['round','bevel','miter']
ctx.miterLimit = value
// lineJoin miter limit 内外交点的距离
ctx.getLineDash()
ctx.setLineDash(segments)
ctx.lineDashOffset = value
```

## gradient
```js
ctx.createLinearGradient(x1, y1, x2, y2)
// (x1, y1) => (x2, y2)
ctx.createRadialGradient(x1, y1, r1, x2, y2, r2)
// circle1 circle2
```

## pattern
```js
var pattern = ctx.createPattern(img, 'repeat')
// img对象
ctx.fillStyle = pattern;
```

## shadow
```js
ctx.shadowoffsetX
ctx.shadowOffsetY
ctx.shadowBlur
ctx.shadowColor
```

## fill
```js
ctx.fill('evenodd')
ctx.fill('nonzero')
```

## fillText/strokeText
```js
ctx.font = 10px sans-serif
ctx.textAlign = start, end, left, right or center
ctx.textBaseline = top, hanging, middle, alphabetic, ideographic, bottom
ctx.direction = ltr, rtl, inherit
ctx.measureText(String)// => TextMetrics object
```










