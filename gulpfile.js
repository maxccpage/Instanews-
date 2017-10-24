var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var eslint = require('gulp-lint');


gulp.task('styles', function() {
	return gulp.src('./css/*.css')
	.pipe(concat('style.css'))
	.pipe(gulp.dest('./dist/css/'));
});

gulp.task('scripts', function(){
	return gulp.src('./js/script.js') 
	.pipe(uglify())
	.pipe(rename({ extname: '.min.js'}))
	.pipe(gulp.dest('./build/js'));
}); 

gulp.task('watch', function() {
	gulp.watch('./index.html', ['styles', 'reload'])
	gulp.watch('./css/*.css', ['styles', 'reload'])
	gulp.watch('./js/script.js', ['scripts', 'reload'])
});

gulp.task('reload', function(){
	browserSync.reload()
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default',['watch', 'browser-sync']); 

gulp.task('lint', function() {
	return gulp.src(['**/*.js','!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

