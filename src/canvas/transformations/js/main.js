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