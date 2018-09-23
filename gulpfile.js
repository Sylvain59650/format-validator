var babel = require("gulp-babel");
var gulp = require("gulp");
var concat = require("gulp-concat");
var watch = require("gulp-watch");
//var umd = require("gulp-umd");

var chemins = {
  sources: "./sources/",
  distrib: "./distrib/",
  demo: "./docs/demo/",
  vendor: "./docs/3parts"
};



gulp.task("format-validator.min.js", ["vendor"], () => {
  return gulp.src([
      "sources/*.js"
    ])
    .pipe(concat("format-validator.min.js"))
    .pipe(babel({
      presets: ["env"],
      compact: true,
      comments: false
    }))

  .pipe(gulp.dest(chemins.distrib))
});

gulp.task("vendor", () => {
  return gulp.src([
      "./node_modules/htmlelement-extension/distrib/htmlElement.min.js",
      "./node_modules/htmlelement-events-extension/distrib/htmlElement-events.min.js",
      "./node_modules/passthrough-object/distrib/passthrough-object.min.js"
    ])
    .pipe(gulp.dest(chemins.vendor))
});

gulp.task("demo", () => {
  return gulp.src([
      "sources/*.js"
    ])
    .pipe(concat("format-validator.min.js"))
    .pipe(babel({
      presets: ["env"],
      compact: false,
      comments: false
    }))

  .pipe(gulp.dest(chemins.demo + "modules/format-validator/distrib/"))
});

gulp.task("watch:format-validator.min.js", function() {
  watch("./sources/*.js", function() {
    gulp.run("format-validator.min.js");
  });
});



gulp.task("default", ["format-validator.min.js", "demo", "vendor"]);


gulp.task("all", ["default"]);

gulp.task("watch", ["watch:format-validator.min.js"]);