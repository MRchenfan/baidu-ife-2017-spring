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
