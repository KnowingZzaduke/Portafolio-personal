const { src, dest, watch} = require("gulp"); //Cargamos el módulo gulp

// css
const sass = require("gulp-sass")(require('sass')); //cargamos el plugin de gulp sass
const plumber = require('gulp-plumber'); //Cargamos el plumber

//Compilar sass con tarea de gulp
function css(done) {
    // src("src/scss/app.scss") Identificar un archivo de sass
    src("src/scss/**/*.scss") //Identificar los archivos de sass
    .pipe(plumber())//Compilamos el plumber
    .pipe(sass()) //Compilar el archivo de sass
    .pipe(dest("build/css")); //Almacenar el archivo de sass
    done();
}


// agregar un watch para escuchar por los cambios realizados
function dev (done){
    // watch("src/scss/app.scss", css) Escuchar por cambios realizados en ese archivo
    watch("src/scss/**/*.scss", css) //escuchar por todos los cambios realizados en los archivos
    done();
}

//Realizamos el llamado de las tareas mediante exports
exports.css = css;
exports.dev = dev;