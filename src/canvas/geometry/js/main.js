window.onload = function () {
  rect();
  triangle();
  arc();
  bezier();
  path2D();
  clip();
};
// 1
function rect() {
  var cvs = document.getElementById('my-canvas-1');
  if (!cvs.getContext) return;

  var ctx = cvs.getContext('2d');
  ctx.fillStyle = "rgb(200,0,0)";
  ctx.fillRect(10, 10, 55, 50);

  ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
  ctx.fillRect(30, 30, 55, 50);
}
// 2
function triangle() {
  var cvs = document.getElementById('my-canvas-2');
  if (!cvs.getContext) return;

  var ctx = cvs.getContext('2d');

  ctx.beginPath();
  ctx.moveTo(75, 50);
  ctx.lineTo(100, 75);
  ctx.lineTo(100, 25);
  ctx.fill();

  // moveTo
  ctx.beginPath();
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // 绘制
  ctx.moveTo(110, 75);
  ctx.arc(75, 75, 35, 0, Math.PI, false);   // 口(顺时针)
  ctx.moveTo(65, 65);
  ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // 左眼
  ctx.moveTo(95, 65);
  ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // 右眼
  ctx.stroke();

  // lineTo
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(300, 150);
  ctx.stroke();
}
// 3
function arc() {
  var cvs = document.getElementById('my-canvas-3');
  if (!cvs.getContext) return;

  var ctx = cvs.getContext('2d');
  ctx.beginPath();
  ctx.arc(150, 75, 50, 0, 2 * Math.PI, true);
  ctx.stroke();
}
// 4
function bezier() {
  var cvs = document.getElementById('my-canvas-4');
  if (!cvs.getContext) return;

  var ctx = cvs.getContext('2d');
  // 贝尔赛曲线
  ctx.beginPath();
  ctx.moveTo(75, 25);
  ctx.quadraticCurveTo(25, 25, 25, 62.5);
  ctx.quadraticCurveTo(25, 100, 50, 100);
  ctx.quadraticCurveTo(50, 120, 30, 125);
  ctx.quadraticCurveTo(60, 120, 65, 100);
  ctx.quadraticCurveTo(125, 100, 125, 62.5);
  ctx.quadraticCurveTo(125, 25, 75, 25);
  ctx.stroke();

  //二次曲线
  ctx.beginPath();
  ctx.moveTo(75, 40);
  ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
  ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
  ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
  ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
  ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
  ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
  ctx.fillStyle = "rgba(255, 0, 0, 0.3)";
  ctx.fill();
}
// 5
function path2D() {
  var cvs = document.getElementById('my-canvas-5');
  if (!cvs.getContext) return;

  var ctx = cvs.getContext('2d');

  var rect = new Path2D();
  rect.rect(10, 10, 50, 50);

  var circle = new Path2D();
  circle.arc(100, 35, 25, 0, 2 * Math.PI);

  ctx.stroke(rect);
  ctx.fill(circle);
}
// 6
function clip() {

  var cvs = document.getElementById('my-canvas-6');
  if (!cvs.getContext) return;
  var ctx = cvs.getContext('2d');

  ctx.translate(150, 75);

  ctx.beginPath();
  ctx.arc(0, 0, 60, 0, Math.PI * 2);
  ctx.clip();

  // draw background
  var lingrad = ctx.createLinearGradient(0, -75, 0, 75);
  lingrad.addColorStop(0, '#232256');
  lingrad.addColorStop(1, '#143778');

  ctx.fillStyle = lingrad;
  ctx.fillRect(-75, -75, 150, 150);

  // draw stars
  for (var j = 1; j < 50; j++) {
    ctx.save();
    ctx.fillStyle = '#fff';
    ctx.translate(75 - Math.floor(Math.random() * 150),
      75 - Math.floor(Math.random() * 150));
    drawStar(ctx, Math.floor(Math.random() * 4) + 2);
    ctx.restore();
  }

  function drawStar(ctx, r) {
    ctx.save();
    ctx.beginPath()
    ctx.moveTo(r, 0);
    for (var i = 0; i < 9; i++) {
      ctx.rotate(Math.PI / 5);
      if (i % 2 == 0) {
        ctx.lineTo((r / 0.525731) * 0.200811, 0);
      } else {
        ctx.lineTo(r, 0);
      }
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }
}