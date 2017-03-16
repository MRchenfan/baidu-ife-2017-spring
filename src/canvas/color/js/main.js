window.onload = function () {

  test1();
  test2();
  globalAlpha();
  rgba();
  lineWidth();
  lineCap();
  lineJoin();
  dash();
  linearGradient();
  radialGradient();
  pattern();
  shadow();
  fill();
};

// 1
function test1() {

  var cvs = document.getElementById('my-canvas-1');
  var ctx = cvs.getContext('2d');

  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++) {
      ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ',' + Math.floor(255 - 42.5 * j) + ',0)';
      ctx.fillRect(j * 25, i * 25, 25, 25);
    }
  }
}
// 2
function test2() {

  var cvs = document.getElementById('my-canvas-2');
  var ctx = cvs.getContext('2d');

  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++) {
      ctx.strokeStyle = 'rgb(0,' + Math.floor(255 - 42.5 * i) + ',' + Math.floor(255 - 42.5 * j) + ')';
      ctx.beginPath();
      ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
      ctx.stroke();
    }
  }
}
// 3
function globalAlpha() {

  var cvs = document.getElementById('my-canvas-3');
  var ctx = cvs.getContext('2d');

  // 画背景
  ctx.fillStyle = '#FD0';
  ctx.fillRect(0, 0, 75, 75);
  ctx.fillStyle = '#6C0';
  ctx.fillRect(75, 0, 75, 75);
  ctx.fillStyle = '#09F';
  ctx.fillRect(0, 75, 75, 75);
  ctx.fillStyle = '#F30';
  ctx.fillRect(75, 75, 75, 75);
  ctx.fillStyle = '#FFF';

  // 设置透明度值
  ctx.globalAlpha = 0.2;

  // 画半透明圆
  for (var i = 0; i < 10; i++) {
    ctx.beginPath();
    ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
    ctx.fill();
  }
}
// 4
function rgba() {
  var cvs = document.getElementById('my-canvas-4');
  var ctx = cvs.getContext('2d');

  // 画背景
  ctx.fillStyle = 'rgb(255,221,0)';
  ctx.fillRect(0, 0, 150, 37.5);
  ctx.fillStyle = 'rgb(102,204,0)';
  ctx.fillRect(0, 37.5, 150, 37.5);
  ctx.fillStyle = 'rgb(0,153,255)';
  ctx.fillRect(0, 75, 150, 37.5);
  ctx.fillStyle = 'rgb(255,51,0)';
  ctx.fillRect(0, 112.5, 150, 37.5);

  // 画半透明矩形
  for (var i = 0; i < 10; i++) {
    ctx.fillStyle = 'rgba(255,255,255,' + (i + 1) / 10 + ')';
    for (var j = 0; j < 4; j++) {
      ctx.fillRect(5 + i * 14, 5 + j * 37.5, 14, 27.5)
    }
  }
}
// 5
function lineWidth() {

  var cvs = document.getElementById('my-canvas-5');
  var ctx = cvs.getContext('2d');

  for (var i = 0; i < 10; i++) {

    ctx.lineWidth = i + 1;
    ctx.beginPath();
    ctx.moveTo(5 + i * 14, 5);
    ctx.lineTo(5 + i * 14, 145);
    ctx.stroke();
  }
}
// 6
function lineCap() {

  var cvs = document.getElementById('my-canvas-6');
  var ctx = cvs.getContext('2d');

  // 创建路径
  ctx.strokeStyle = '#09f';
  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.lineTo(140, 10);
  ctx.moveTo(10, 140);
  ctx.lineTo(140, 140);
  ctx.stroke();

  // 画线条
  ctx.strokeStyle = 'black';
  var lineCap = ['butt', 'round', 'square'];
  for (var i = 0; i < lineCap.length; i++) {
    ctx.lineWidth = 15;
    ctx.lineCap = lineCap[i];
    ctx.beginPath();
    ctx.moveTo(25 + i * 50, 10);
    ctx.lineTo(25 + i * 50, 140);
    ctx.stroke();
  }
}
// 7
function lineJoin() {

  var cvs = document.getElementById('my-canvas-7');
  var ctx = cvs.getContext('2d');

  var lineJoin = ['round', 'bevel', 'miter'];
  ctx.lineWidth = 10;
  for (var i = 0; i < lineJoin.length; i++) {
    ctx.lineJoin = lineJoin[i];
    ctx.beginPath();
    ctx.moveTo(-5, 5 + i * 40);
    ctx.lineTo(35, 45 + i * 40);
    ctx.lineTo(75, 5 + i * 40);
    ctx.lineTo(115, 45 + i * 40);
    ctx.lineTo(155, 5 + i * 40);
    ctx.stroke();
  }
}
// 8
function dash() {

  var cvs = document.getElementById('my-canvas-8');
  var ctx = cvs.getContext('2d');

  ctx.lineWidth = 4.0;
  var offset = 0;
  setInterval(function () {
    offset++;
    if (offset > 16) offset = 0;
    draw();
  }, 20);

  function draw() {

    ctx.clearRect(0, 0, cvs.width, cvs.height);
    ctx.setLineDash([4, 10]);
    ctx.lineDashOffset = -offset;
    ctx.strokeRect(10, 10, 100, 100);
  }
}
// 9
function linearGradient() {

  var cvs = document.getElementById('my-canvas-9');
  var ctx = cvs.getContext('2d');

  var lingrad = ctx.createLinearGradient(0, 0, cvs.width, cvs.height);
  lingrad.addColorStop(0, '#F00');
  lingrad.addColorStop(0.5, '#FFF')
  lingrad.addColorStop(1, '#000');

  ctx.fillStyle = lingrad;
  ctx.strokeStyle = lingrad;

  ctx.fillRect(10, 0, 150, 150);
  ctx.strokeRect(190, 0, 20, 150);
}
// 10
function radialGradient() {

  var cvs = document.getElementById('my-canvas-10');
  var ctx = cvs.getContext('2d');

  var radgrad = ctx.createRadialGradient(45, 45, 10, 52, 50, 30);
  radgrad.addColorStop(0, '#A7D30C');
  radgrad.addColorStop(0.9, '#019F62');
  radgrad.addColorStop(1, 'rgba(1,159,98,0)');

  ctx.fillStyle = radgrad;
  ctx.fillRect(0, 0, 150, 150);
}
// 11
function pattern() {

  var cvs = document.getElementById('my-canvas-11');
  var ctx = cvs.getContext('2d');

  var img = document.createElement('img');
  img.src = 'img/img00001.png';
  img.onload = function() {

    var pattern = ctx.createPattern(img, 'no-repeat');
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, 150, 150);
  };
}
// 12
function shadow() {

  var cvs = document.getElementById('my-canvas-12');
  var ctx = cvs.getContext('2d');

  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  ctx.shadowBlur = 2;
  ctx.shadowColor = "rgba(0, 0, 0, 0.5)";

  ctx.font = "20px Times New Roman";
  ctx.fillStyle = "Black";
  ctx.fillText("Sample String", 5, 30);
  ctx.fillText('Hello World', 200, 100);
}
// 13
function fill() {

  var cvs = document.getElementById('my-canvas-13');
  var ctx = cvs.getContext('2d');

  ctx.beginPath();
  ctx.arc(50, 50, 30, 0, Math.PI * 2, true);
  ctx.arc(50, 50, 15, 0, Math.PI * 2, true);
  ctx.fill("evenodd");

  ctx.beginPath();
  ctx.arc(120, 50, 30, 0, Math.PI * 2, true);
  ctx.arc(120, 50, 15, 0, Math.PI * 2, true);
  ctx.fill("nonzero");

  ctx.beginPath();
  ctx.arc(190, 50, 30, 0, Math.PI * 2, true);
  ctx.arc(190, 50, 15, 0, Math.PI * 2, true);
  ctx.fill();
}