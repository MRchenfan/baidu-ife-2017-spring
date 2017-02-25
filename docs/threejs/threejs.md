
## 了解相关知识
- WebGL/OpenGL 一种图形接口标准，在网页中通过Canvas来访问
- Three.js 将底层接口封装，使用js来实现炫酷的3d效果。提供了Canvas, SVG两种标签的渲染器。

> [voxel.js](http://voxeljs.com/)
> [three.js](https://threejs.org/)
> [three.js docs](https://threejs.org/docs/#Manual/Getting_Started/Creating_a_scene)

一个简单的例子

```js
var renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('mainCanvas')
});
renderer.setClearColor(0x000000); // black

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(45, 4 / 3, 1, 1000);
camera.position.set(0, 0, 5);
camera.lookAt(new THREE.Vector3(0, 0, 0));
scene.add(camera);

var material = new THREE.MeshBasicMaterial({
        color: 0xffffff // white
});
// plane
var planeGeo = new THREE.PlaneGeometry(1.5, 1.5);
var plane = new THREE.Mesh(planeGeo, material);
plane.position.x = 1;
scene.add(plane);

// triangle
var triGeo = new THREE.Geometry();
triGeo.vertices = [
	new THREE.Vector3(0, -0.8, 0),
	new THREE.Vector3(-2, -0.8, 0), 
	new THREE.Vector3(-1, 0.8, 0)];
triGeo.faces.push(new THREE.Face3(0, 2, 1));
var triangle = new THREE.Mesh(triGeo, material);
scene.add(triangle);

renderer.render(scene, camera);
```

## 如何开始

1. 引入three.js 获得THREE对象
2. 一个Canvas标签
3. 三大组件Renderer, Scene, Camera

## 相机 Camera

- 正交相机 平行光源
- 透视相机 点光源

```js
THREE.OrthographicCamera(left, right, top, bottom, near, far);
THREE.PerspectiveCamera(fov, aspect, near, far)
```
[OrthographicCamera]()
[PerspectiveCamera](http://www.ituring.com.cn/download/01YYrMaASOzm.big)

掌握相关概念及三大组件和物体的基本用法：
renderer => scene => camera => geometry => render

## 形状(几何体) Geometry

```js
// cube
THREE.CubeGeometry(width, height, depth, widthSegments, heightSegments, depthSegments)
// segments = 分段 # 仅仅是面分段，不是对体素分段
new THREE.CubeGeometry(1, 2, 3, 2, 2, 3)
```

```js
// plane
THREE.PlaneGeometry(width, height, widthSegments, heightSegments)
// 初始状态只在x-y平面内，可以使用旋转等操作改变位置
new THREE.PlaneGeometry(2, 4)
```

```js
// sphere
THREE.SphereGeometry(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength)
// radius 
// widthSegments 经度
// heightSegments 纬度
// phiStart 经度开始的弧度 
// phiLength 经度跨过的弧度
// thetaStart 纬度开始的弧度
// thetaLength 纬度跨过的弧度
new THREE.SphereGeometry(3, 8, 6)
new THREE.SphereGeometry(3, 18, 12)
new THREE.SphereGeometry(3, 8, 6, Math.PI / 6, Math.PI / 3)
new THREE.SphereGeometry(3, 8, 6, 0, Math.PI * 2, Math.PI / 6, Math.PI / 3)
new THREE.SphereGeometry(3, 8, 6, Math.PI / 2, Math.PI, Math.PI / 6, Math.PI / 2)
```

```js
// circle
THREE.CircleGeometry(radius, segments, thetaStart, thetaLength)
// radius
// segments
// thetaStart
// thetaLength
THREE.CircleGeometry(3, 18, Math.PI / 3, Math.PI / 3 * 4)
```

```js
// cylinder
THREE.CylinderGeometry(radiusTop, radiusBottom, height, radiusSegments, heightSegments, openEnded)
// radiusTop
// radiusBottom
// height
// radiusSegments
// heightSegments
// openEnded # 是否有顶面和地面（开口）默认为（false）
new THREE.CylinderGeometry(2, 2, 4, 18, 3)
new THREE.CylinderGeometry(2, 3, 4, 18, 3)
new THREE.CylinderGeometry(2, 3, 4, 18, 3, true)
```

```js
// 正四面体，八面体， 十二面体
THREE.TetrahedronGeometry(radius, detail)
THREE.OctahedronGeometry(radius, detail)
THREE.IcosahedronGeometry(radius, detail)
new THREE.TetrahedronGeometry(3)
new THREE.OctahedronGeometry(3)
new THREE.IcosahedronGeometry(3)
```

```js
// 圆环面
THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc)
// radius
// tube # 管道半径
// radialSegments # 可以控制精细度
// tubularSegments # 可以控制精细度
// arc # 圆环面的弧度
new THREE.TorusGeometry(3, 1, 4, 8)
new THREE.TorusGeometry(3, 1, 12, 18)
new THREE.TorusGeometry(3, 1, 4, 8, Math.PI / 3 * 2)
```

```js
// 圆环结
THREE.TorusKnotGeometry(radius, tube, radialSegments, tubularSegments, p, q, heightScale)
// radius
// tube
// radialSegments
// tubularSegments
// p
// q
// heightScale # z轴上的缩放
new THREE.TorusKnotGeometry(2, 0.5, 32, 8)
```

> [p, q => 相关样式参数](https://en.wikipedia.org/wiki/Torus_knot)

```js
// text
THREE.TextGeometry(text, parameters)
// text # your text string
// parameters # {
// 	size: # 大些字母的高度
// 	height: # 厚度
// 	curveSegments: # 弧线分段数，控制文字曲线的精度
// 	font: # 
// 	weight: # normal / bold
// 	style: # normal / italics
// 	bevelEnabled: # [boolean] 是否使用倒角
// 	bevelThickness: # 倒角厚度
// 	bevelSize: # 倒角宽度
// }
var loader = new THREE.FontLoader();
loader.load('../lib/helvetiker_regular.typeface.json', function(font) {

    var mesh = new THREE.Mesh(new THREE.TextGeometry('Hello', {
        font: font,
        size: 1,
        height: 1
    }), material);
    scene.add(mesh);

    // render
    renderer.render(scene, camera);
});
```

```js
// 自定义形状， 建议使用3dMax等建模软件导出点参数
// 初始化几何形状
var geometry = new THREE.Geometry();

// 设置顶点位置
// 顶部4顶点
geometry.vertices.push(new THREE.Vector3(-1, 2, -1));
geometry.vertices.push(new THREE.Vector3(1, 2, -1));
geometry.vertices.push(new THREE.Vector3(1, 2, 1));
geometry.vertices.push(new THREE.Vector3(-1, 2, 1));
// 底部4顶点
geometry.vertices.push(new THREE.Vector3(-2, 0, -2));
geometry.vertices.push(new THREE.Vector3(2, 0, -2));
geometry.vertices.push(new THREE.Vector3(2, 0, 2));
geometry.vertices.push(new THREE.Vector3(-2, 0, 2));

// 设置顶点连接情况
// 顶面
geometry.faces.push(new THREE.Face3(0, 1, 3));
geometry.faces.push(new THREE.Face3(1, 2, 3));
// 底面
geometry.faces.push(new THREE.Face3(4, 5, 6));
geometry.faces.push(new THREE.Face3(5, 6, 7));
// 四个侧面
geometry.faces.push(new THREE.Face3(1, 5, 6));
geometry.faces.push(new THREE.Face3(6, 2, 1));
geometry.faces.push(new THREE.Face3(2, 6, 7));
geometry.faces.push(new THREE.Face3(7, 3, 2));
geometry.faces.push(new THREE.Face3(3, 7, 0));
geometry.faces.push(new THREE.Face3(7, 4, 0));
geometry.faces.push(new THREE.Face3(0, 4, 5));
geometry.faces.push(new THREE.Face3(0, 5, 1));
```








