/**
 * module start
 * @param  {object} root    
 * @param  {function} factory 
 * @return {[type]}         [description]
 */
!(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([], factory);
	} else if (typeof define === 'function' && define.cmd) {
		define(function(require, exports, module) {
			module.exports = factory();
		});
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.ColorPicker = factory();
	}
}(this, function() {
	var EventEmitter = (function() {
		var EventEmitter = function() {
			this.listeners = {};
			this.oneListeners = {};
		}
		EventEmitter.prototype = {
			constructor: EventEmitter,
			on: function(type, handler) {
				if (!this.listeners[type]) {
					this.listeners[type] = [];
				}
				this.listeners[type].push(handler);
			},
			emit: function(type) {
				var _arguments = [];
				for (var i = 1; i < arguments.length; i++) {
					_arguments.push(arguments[i]);
				}

				if (type in this.listeners) {
					var handlers = this.listeners[type];
					for (var i = 0; i < handlers.length; i++) {
						handlers[i].apply(null, _arguments);
					}
				}

				if (type in this.oneListeners) {
					while (this.oneListeners[type].length) {
						this.oneListeners[type].shift().apply(null, _arguments);
					}
				}
			},
			one: function(type, handler) {
				if (!this.listeners[type]) {
					this.oneListeners[type] = [];
				}
				this.oneListeners[type].push(handler);
			}
		};
		return EventEmitter;
	}());

	var ColorPicker = function(cfg) {

		var _cfg = {
			container: null,
			cpBarCvs: null,
			cpPanelCvs: null,
			cpBarPicker: null,
			cpPanelPicker: null,
			cpForm: null,
		};
		EventEmitter.call(this);
		this.cfg = extend(cfg, _cfg);
		this.color = {
			base: 'rgba(0, 0, 0, 0)',
			r: 0,
			g: 0,
			b: 0,
			a: 0,
			hex: '#000',
			hsl: ''
		};
		this.init();
	};

	var fn = ColorPicker.prototype = new EventEmitter();

	fn.init = function() {

		this.render();
		this.bind();
	};

	fn.render = function() {

		// init.render
		_renderColorBar(this.cfg.cpBarCvs);
		this.cfg.cpBarPicker.style.top = 50;
		this.color.base = _getImageRgba(0, 50, this.cfg.cpBarCvs).base;
		_renderColorPanel(this.cfg.cpPanelCvs, this.color.base);

		this.cfg.cpPanelPicker.style.left = 20;
		this.cfg.cpPanelPicker.style.top = 20;

		this.getColor();
		this.renderForm();
	};

	fn.renderForm = function() {

		this.cfg.cpForm['cp-form-r'].value = this.color.r;
		this.cfg.cpForm['cp-form-g'].value = this.color.g;
		this.cfg.cpForm['cp-form-b'].value = this.color.b;
		this.cfg.cpForm['cp-form-a'].value = this.color.a;
		this.cfg.cpForm['cp-form-hex'].value = this.color.hex;
		this.cfg.cpForm['cp-form-h'].value = this.color.h;
		this.cfg.cpForm['cp-form-s'].value = this.color.s;
		this.cfg.cpForm['cp-form-l'].value = this.color.l;
		this.cfg.cpForm['cp-form-result'].style.background = this.color.rgba;
		return this;
	};

	fn.bind = function() {

		var self = this;
		// cp-bar
		this.cfg.cpBarCvs.onclick = function(e) {

			var y = e.offsetY;
			self.cfg.cpBarPicker.style.top = y;
			self.color.base = _getImageRgba(0, y, self.cfg.cpBarCvs).base;
			_renderColorPanel(self.cfg.cpPanelCvs, self.color.base);
			self.emit('change', self.getColor());
		};

		// cp-panel
		this.cfg.cpPanelCvs.onclick = function(e) {

			var x = e.offsetX;
			var y = e.offsetY;
			self.cfg.cpPanelPicker.style.left = x;
			self.cfg.cpPanelPicker.style.top = y;
			self.emit('change', self.getColor());
		};

		// cp-form
		this.on('change', function() {

			self.renderForm();
		})
	};

	fn.getColor = function() {

		var x = this.cfg.cpPanelPicker.style.left.replace('px', '');
		var y = this.cfg.cpPanelPicker.style.top.replace('px', '');
		x = parseInt(x);
		y = parseInt(y);
		var initColor = _getImageRgba(x, y, this.cfg.cpPanelCvs);
		var hsl = rgb2hsl(initColor.r, initColor.g, initColor.b);
		this.color.r = initColor.r;
		this.color.g = initColor.g;
		this.color.b = initColor.b;
		this.color.a = initColor.a;
		this.color.rgba = initColor.rgba;
		this.color.hex = rgb2hex(initColor.r, initColor.g, initColor.b);
		this.color.h = hsl.h;
		this.color.s = hsl.s;
		this.color.l = hsl.l;
		return this.color;
	}

	fn.destroy = function() {

		this.cfg.container.remove();
	};

	function _renderColorBar(cvs) {
		var cvsW = cvs.offsetWidth;
		var cvsH = cvs.offsetHeight;

		cvs.width = cvsW;
		cvs.height = cvsH;

		var ctx = cvs.getContext('2d');

		ctx.clearRect(0, 0, cvsW, cvsH);

		var gradientBar = ctx.createLinearGradient(0, 0, 0, cvsH);
		gradientBar.addColorStop(0, 'rgba(255, 0, 0, 1)');
		gradientBar.addColorStop(1 / 6, 'rgba(255, 0, 255, 1)');
		gradientBar.addColorStop(2 / 6, 'rgba(0, 0, 255, 1)');
		gradientBar.addColorStop(3 / 6, 'rgba(0, 255, 255, 1)');
		gradientBar.addColorStop(4 / 6, 'rgba(0, 255, 0, 1)');
		gradientBar.addColorStop(5 / 6, 'rgba(255, 255, 0, 1)');
		gradientBar.addColorStop(1, 'rgba(255, 0, 0, 1)');

		ctx.fillStyle = gradientBar;
		ctx.fillRect(0, 0, cvsW, cvsH);
	}

	function _renderColorPanel(cvs, color) {

		var cvsW = cvs.offsetWidth;
		var cvsH = cvs.offsetHeight;

		cvs.width = cvsW;
		cvs.height = cvsH;

		color = color ? color : 'rgba(255, 0, 0, 1)';
		var ctx = cvs.getContext('2d');

		ctx.clearRect(0, 0, cvsW, cvsH);

		var gradientBase = ctx.createLinearGradient(cvsW, 0, 0, 0);
		gradientBase.addColorStop(0, color);
		gradientBase.addColorStop(1, 'rgba(255, 255, 255, 1)');
		ctx.fillStyle = gradientBase;
		ctx.fillRect(0, 0, cvsW, cvsH);

		var gradientBg = ctx.createLinearGradient(0, cvsH, 0, 0);
		gradientBg.addColorStop(0, 'rgba(0, 0, 0, 1)');
		gradientBg.addColorStop(1, 'rgba(0, 0, 0, 0)');
		ctx.fillStyle = gradientBg;
		ctx.fillRect(0, 0, cvsW, cvsH);
	}

	function _getImageRgba(x, y, cvs) {

		var ctx = cvs.getContext('2d');
		var imgData = ctx.getImageData(x, y, 1, 1);
		var r = imgData.data[0];
		var g = imgData.data[1];
		var b = imgData.data[2];
		var a = (y / cvs.height).toFixed(2);
		return {
			r: r,
			g: g,
			b: b,
			a: a,
			rgba: 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')',
			base: 'rgba(' + r + ', ' + g + ', ' + b + ', 1)',
			data: imgData.data
		};
	}

	// utils
	function extend() {
		var result = {},
			i, attr;
		for (i = 0; i < arguments.length; i++) {
			for (attr in arguments[i]) {
				if (arguments[i].hasOwnProperty(attr) && typeof result[attr] === "undefined") {
					result[attr] = arguments[i][attr];
				}
			}
		}
		return result;
	};

	function rgb2hsl(r, g, b) {

		var hsl = {};
		// step-1:
		r = (r / 255).toFixed(2);
		g = (g / 255).toFixed(2);
		b = (b / 255).toFixed(2);
		// step-2: 
		var max = Math.max(r, g, b);
		var min = Math.min(r, g, b);
		// step-3: 
		hsl.l = ((max + min) / 2).toFixed(2);
		// step-4:
		if (max === min) {
			hsl.s = 0;
		} else {

			if (hsl.l < 0.5) hsl.s = ((max - min) / (max + min)).toFixed(2);
			else hsl.s = ((max - min) / (2.0 - max - min)).toFixed(2);
		}
		// step-5:
		hsl.h = 0;
		if (r === max) hsl.h = ((g - b) / (max - min)).toFixed(2);
		if (g === max) hsl.h = (2.0 + (b - r) / (max - min)).toFixed(2);
		if (b === max) hsl.h = (4.0 + (r-g) / (max - min)).toFixed(2);
		hsl.h *= 60.0;
		if (hsl.h < 0) hsl.h += 360;
		return hsl;
	}

	function rgb2hex(r, g, b) {
		var hex = '#';
		hex += rightPad(r.toString(16), 2);
		hex += rightPad(g.toString(16), 2);
		hex += rightPad(b.toString(16), 2);
		hex = hex.toUpperCase();
		return hex;
	}

	/**
	 * [rightPad description]
	 * @param  {string} str  [description]
	 * @param  {number} len  length
	 * @param  {string || number} fill [description]
	 * @return {string}      [description]
	 */
	function rightPad(str, len, fill) {
		str = str.toString();
		fill = fill ? fill : '0';
		for (var i = str.length; i < len; i++) {
			str = fill + str;
		}
		if (str.length > len) {
			str = str.substr(0, len);
		}
		return str;
	}

	return ColorPicker;
}));