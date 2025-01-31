import gulp from 'gulp';
import cssmin from 'gulp-clean-css';
import {path, tasks} from './const';

const CSS = path.DEV + '**/*.css';

gulp.task(tasks.CLIENT_CSS_DIST, () => {
  return gulp.src(CSS, {base: path.DEV})
             .pipe(cssmin())
             .pipe(gulp.dest(path.DIST));
});
