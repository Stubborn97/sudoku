// 以前版本的现在不支持
// const gulp = require("gulp");
// gulp.task("webpack", () => {
//   // 转译JavaScript
// });
// gulp.task("less", () => {

// });
// gulp.task("default", ["webpack", "less"]);

// 现在版本支持
const { series, src, dest } = require("gulp");

function webpack(cb) {
  cb();
}

function less(cb) {
  cb();
}
webpack(() => {
  const webpack= require("webpack-stream");
  const config = require("./webpack.config.js");
  src("./js/**/*.js")
    .pipe(webpack(config))
    .pipe(dest("../www/js"));
});
less(() => {
  const less = require("gulp-less");
  src("./less/*.less")
    .pipe(less())
    .pipe(dest("../www/css"))
});


exports.default = series(webpack, less);