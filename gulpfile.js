var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');
var connect = require('gulp-connect');
gulp.task('build', function() {
  var stream = gulp.src('src/index.html')
    .pipe(vulcanize({
      abspath: '',
      excludes: [],
      inlineScripts: true,
      stripExcludes: false
    }))
		.on('error',function(error){
			console.log(error.toString());
			this.emit('end');
		})
    .pipe(gulp.dest('dest'))
    .pipe(connect.reload());


  return stream;
});

gulp.task('default', function() {
  connect.server({
    root: "dest",
    livereload: true
  })

  gulp.watch(["src/**"], ['build']);

})
