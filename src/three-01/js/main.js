window.onload = function() {

	_init();

	_camera();

	_perspectiveCamera();

	_textGeometry();

	_customGeometry();

	_homework();
};

function _init() {

	var renderer = new THREE.WebGLRenderer({
		canvas: document.getElementById('main-canvas')
	});

	// set.bg.color
	renderer.setClearColor('#000');

	var scene = new THREE.Scene();

	var camera = new THREE.PerspectiveCamera(45, 4 / 3, 1, 1000);
	camera.position.set(0, 0, 5);
	scene.add(camera);

	var material = new THREE.MeshBasicMaterial({
		color: '#F00'
	})
	var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 2, 3), material);
	scene.add(cube);

	renderer.render(scene, camera);
}

function _camera() {

	var renderer = new THREE.WebGLRenderer({
		canvas: document.getElementById('camera-canvas')
	});
	renderer.setClearColor('#000');

	var scene = new THREE.Scene();

	var camera = new THREE.OrthographicCamera(-2, 2, 1.5, -1.5, 1, 10);
	camera.position.set(4, -3, 5);
	camera.lookAt(new THREE.Vector3(0, 0, 0));
	scene.add(camera);

	var material = new THREE.MeshBasicMaterial({
		color: '#F00',
		wireframe: true
	});
	var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1), material);
	scene.add(cube);

	renderer.render(scene, camera);
}

function _perspectiveCamera() {

	var renderer = new THREE.WebGLRenderer({
		canvas: document.getElementById('perspective-camera-canvas')
	});
	renderer.setClearColor('#000');

	var scene = new THREE.Scene();

	var camera = new THREE.PerspectiveCamera(45, 400 / 300, 1, 10);
	camera.position.set(0, 0, 5);
	scene.add(camera);

	var material = new THREE.MeshBasicMaterial({
		color: '#F00',
		wireframe: true
	});
	var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1), material);
	scene.add(cube);

	renderer.render(scene, camera);
}

function _textGeometry() {

	var renderer = new THREE.WebGLRenderer({
		canvas: document.getElementById('text-geometry')
	});
	renderer.setClearColor('#000');

	var scene = new THREE.Scene();

	var camera = new THREE.PerspectiveCamera(45, 400 / 300, 1, 10);
	camera.position.set(0, 0, 5);
	scene.add(camera);

	var material = new THREE.MeshBasicMaterial({
		color: '#0F0',
		wireframe: true
	});
	var loader = new THREE.FontLoader();
	loader.load('', function(font) {

		var textGeometry = new THREE.TextGeometry('Hello world', {
			size: 1,
			height: 1
		});
		var mesh = new THREE.Mesh(textGeometry, material);
		scene.add(mesh);

		renderer.render(scene, camera);
	})
}

function _customGeometry() {

	var renderer = new THREE.WebGLRenderer({
		canvas: document.getElementById('custom-geometry')
	});
	renderer.setClearColor('#000');

	var scene = new THREE.Scene();

	var camera = new THREE.OrthographicCamera(-4, 4, 3, -3, 1, 10);
	camera.position.set(4, -3, 5);
	camera.lookAt(new THREE.Vector3(0, 0, 0));
	scene.add(camera);

	var material = new THREE.MeshBasicMaterial({
		color: '#0F0',
		wireframe: true
	});
	var customGeometry = _generateCustomGeometry();
	var mesh = new THREE.Mesh(customGeometry, material);
	scene.add(mesh);

	renderer.render(scene, camera);
}

function _generateCustomGeometry() {
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

	return geometry;
}

function _homework() {

	var renderer = new THREE.WebGLRenderer({
		canvas: document.getElementById('home-work')
	});
	renderer.setClearColor('#999')

	var scene = new THREE.Scene();

	var camera = new THREE.PerspectiveCamera(45, 400 / 300, 1, 10);
	camera.position.set(5, 5, 3);
	camera.lookAt(new THREE.Vector3(0, 0, 0));
	scene.add(camera);

	var bodyMesh = _getBodyMesh();
	scene.add(bodyMesh);

	var frontLeftWheelMesh = _getFrontLeftWheelMesh();
	scene.add(frontLeftWheelMesh);

	var frontRightWheelMesh = _getFrontRightWheelMesh();
	scene.add(frontRightWheelMesh);

	var backLeftWheelMesh = _getBackLeftWheelMesh();
	scene.add(backLeftWheelMesh);

	var backRightWheelMesh = _getBackRightWheelMesh();
	scene.add(backRightWheelMesh);

	renderer.render(scene, camera);

	function _getBodyMesh() {
		var material = new THREE.MeshBasicMaterial({
			color: '#9CA64B',
			wireframe: true
		});
		var cube = new THREE.CubeGeometry(4, 2, 2, 4, 2, 2);
		var cubeMesh = new THREE.Mesh(cube, material);
		return cubeMesh;
	}

	function _getFrontLeftWheelMesh() {
		var material = new THREE.MeshBasicMaterial({
			color: '#000',
			wireframe: false
		})
		var torus = new THREE.TorusGeometry(0.5, 0.1, 8, 16);
		torus.translate(-1, -0.75, 0.05 + 1);
		return new THREE.Mesh(torus, material);
	}

	function _getFrontRightWheelMesh() {
		var material = new THREE.MeshBasicMaterial({
			color: '#000',
			wireframe: false
		})
		var torus = new THREE.TorusGeometry(0.5, 0.1, 8, 16);
		torus.translate(-1, -0.75, -1);
		return new THREE.Mesh(torus, material);
	}

	function _getBackLeftWheelMesh() {
		var material = new THREE.MeshBasicMaterial({
			color: '#000',
			wireframe: false
		})
		var torus = new THREE.TorusGeometry(0.5, 0.1, 8, 16);
		torus.translate(1, -0.75, 0.05 + 1);
		return new THREE.Mesh(torus, material);
	}

	function _getBackRightWheelMesh() {
		var material = new THREE.MeshBasicMaterial({
			color: '#000',
			wireframe: false
		})
		var torus = new THREE.TorusGeometry(0.5, 0.1, 8, 16);
		torus.translate(1, -0.75, -1);
		return new THREE.Mesh(torus, material);
	}
}