var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');
var connect = require('gulp-connect');
gulp.task('build', function () {
	return gulp.src('src/index.html')
		.pipe(vulcanize({
			abspath: '',
			excludes: [],
			inlineScripts: true,
			stripExcludes: false
		}))
		.pipe(gulp.dest('dest'))
		.pipe(connect.reload());
});

gulp.task('default', function() {
	connect.server({
		root: "dest",
		livereload: true
	})
	gulp.watch(["src/**"],['build']);

})
