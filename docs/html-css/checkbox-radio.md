## 标签知识
```html
<label for=""></label>
```

label.for: 当指定input.id 时，可以关联起来，点击label区域就同时点击了input元素
当没有给定for属性时，可以将input元素放在label内部，也可以起到关联作用。
当给了for属性时就必须使用id来关联。

```html
<input type="checkbox" name="" value="">
<input type="radio" name="" value="">
```

如何获取其值？

```js
input_dom.value
// jq
$('').val()
```

## css相关

### background

```css
.box {
	background: ;
	background-color: ;
	background-image: url();
	background-repeat: ;
	background-position: ;
	background-clip: ;
	background-attachment: ;
	background-origin: ;
}

```













