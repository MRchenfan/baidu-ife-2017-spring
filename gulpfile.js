'use strict';

let fs = require('fs')
let path = require('path')
let gulp = require('gulp')
let bs = require('browser-sync')
let sass = require('gulp-sass')
let nodemon = require('gulp-nodemon')
let sourcemaps = require('gulp-sourcemaps')
let jade = require('gulp-jade')
let ejs = require('gulp-ejs')
let rename = require('gulp-rename')
let del = require('del')
let runSequence = require('run-sequence')
let data = require('gulp-data')

let config = require('./config/config')
const HOST = config.host
const PORT = config.port

// dev tasks start

gulp.task('sass', () => {

	return gulp.src('src/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(rename((filePath) => {
			filePath.dirname = filePath.dirname.replace('scss', 'css')
			filePath.extname = '.css'
		}))
		.pipe(gulp.dest('src'))
})

// gulp.task('ejs', () => {

// 	return gulp.src(srcdir.views + '/*.ejs')
// 		.pipe(data((file) => {

// 			let dataPath = srcdir.data + '/' + path.basename(file.path, '.ejs') + '.json';
// 			return JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
// 		}))
// 		.pipe(ejs())
// 		.pipe(rename((filePath) => {

// 			filePath.extname = '.html'
// 		}))
// 		.pipe(gulp.dest(srcdir.html))
// })

// gulp.task('jade', () => {

// 	return gulp.src(srcdir.views + '/*.jade')
// 		.pipe(data((file) => {

// 			let dataPath = srcdir.data + '/' + path.basename(file.path, '.jade') + '.json';
// 			return JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
// 		}))
// 		.pipe(jade())
// 		.pipe(gulp.dest(srcdir.html))
// })

gulp.task('server:dev', () => {

	bs.init({
		server: {
			baseDir: 'src',
			port: PORT
		}
	})
})

gulp.task('watch', () => {

	// gulp.watch(srcdir.views + '/**/*.ejs', ['ejs'])
	// gulp.watch(srcdir.views + '/**/*.jade', ['jade'])
	gulp.watch('src/**/*.scss', ['sass'])

	gulp.watch('src/**/*.html', bs.reload);
  gulp.watch('src/**/*.css', bs.reload);
  gulp.watch('src/**/*.js', bs.reload);
})

gulp.task('default', () => {

	return runSequence('sass', 'server:dev', 'watch')
})

// dev tasks end fuck

// build tasks start