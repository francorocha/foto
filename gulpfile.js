const {src, dest, watch, parallel} = require("gulp"); // Es una fomra de extraer la funcionalidad de gulp
//CSS
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");

//IMAGENES
const cache = require("gulp-cache");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const avif = require("gulp-avif");

function css(done) {
    src("src/scss/**/*.scss")//Identificar el archivo de sass
    .pipe( plumber())//Evita errores
    .pipe( sass())//Copilarlo
    .pipe( dest("build/css"))//Almacenar en disco duro

    done(); //Te dice cunado esta en el final la funcion
}

function imagenes(done) {
    const opciones = {
        optimizationLevel: 3
    }
    src("src/images/**/*.{png,jpg}")
        .pipe( cache( imagemin(opciones)))
        .pipe( dest("build/img"))
    done();
}

function versionWebp(done) {
    const opciones = {
        queality: 50
    };

    src("src/images/**/*{png,jpg}")
        .pipe( webp(opciones))
        .pipe( dest("build/img"))

    done();
}

function versionAvif(done) {
    const opciones = {
        queality: 50
    };

    src("src/images/**/*{png,jpg}")
        .pipe( avif(opciones))
        .pipe( dest("build/img"))

    done();
}

function dev(done) {
    watch("src/scss/**/*.scss", css);

    done();
}

exports.css = css;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel( imagenes, versionWebp, versionAvif, dev);