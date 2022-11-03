const { src, dest, watch, parallel} = require('gulp'); //Cargamos el módulo gulp

// css
const sass = require('gulp-sass')(require('sass')); //cargamos el plugin de gulp sass
const plumber = require('gulp-plumber'); //Cargamos el plumber

// webp

// const webp = require('gulp-webp');
//Compilar sass con tarea de gulp
function css(done) {
    // src("src/scss/app.scss") Identificar un archivo de sass
    src("src/scss/**/*.scss") //Identificar los archivos de sass
    .pipe(plumber())//Compilamos el plumber
    .pipe(sass()) //Compilar el archivo de sass
    .pipe(dest("build/css")); //Almacenar el archivo de sass
    done();
}
//Cambiar formato de imágenes a .webp
// function versionWebp(done){
//     const opciones = {
//         quality: 100
//     }
//     src("src/img/**/*.{png,jpg}")
//     .pipe(dest('build/img'))
//     .pipe(webp(opciones))
//     done()
// }

// agregar un watch para escuchar por los cambios realizados
function dev (done){
    // watch("src/scss/app.scss", css) Escuchar por cambios realizados en ese archivo
    watch("src/scss/**/*.scss", css) //escuchar por todos los cambios realizados en los archivos
    done();
}

//Realizamos el llamado de las tareas mediante exports, esta sintaxis hace parte de node.js
exports.css = css;
// exports.dev = parallel (versionWebp, dev); //Pararell sirve para llamar tareas una detras de la otra
exports.dev = dev;