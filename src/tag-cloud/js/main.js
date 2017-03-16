$(function () {
  var settings = {
    //height of sphere container
    height: 400,
    //width of sphere container
    width: 400,
    //radius of sphere
    radius: 150,
    //rotation speed
    speed: 3,
    //sphere rotations slower
    slower: 0.9,
    //delay between update position
    timer: 5,
    //dependence of a font size on axis Z
    fontMultiplier: 15,
    //tag css stylies on mouse over
    hoverStyle: {
      border: 'none',
      color: '#0b2e6f'
    },
    //tag css stylies on mouse out
    mouseOutStyle: {
      border: '',
      color: ''
    }
  };

  $('#tagcloud').tagoSphere(settings);
});

$(function () {
  $.fn.tagcloud.defaults = {
    size: {start: 14, end: 18, unit: 'pt'},
    color: {start: '#cde', end: '#f52'}
  };
  $('#whatever a').tagcloud();
});