$(function() {

	var cp = new ColorPicker({
		container: $('.cp-container')[0],
		cpBarCvs: $('.cp-bar canvas')[0],
		cpPanelCvs: $('.cp-panel canvas')[0],
		cpBarPicker: $('.cp-bar-picker')[0],
		cpPanelPicker: $('.cp-panel-picker')[0]
	});
	cp.on('change', function(color) {

		$('body').css({ background: color.rgba })
	})
	window.cp = cp;
});