//arreglo con las materias a revisar
const materias = ['matematica', 'fisica', 'quimica'];

//función que ejecuta la revisión
const revision = (alumno)=> {

    //creación de las variables receptoras
    let asistenciaPorcentajes, promedioMateria, practicasCompletadas

    //Ciclo que se ejecuta por cada materia
    for (const materia of materias) {

        //recepcion de datos desde el teclado
        asistenciaPorcentajes = prompt(materia + ' ¿Cual fue el porcentje de asistencia?');
        promedioMateria = prompt(materia + ' ¿Cual fue el promedio de la materia?');
        practicasCompletadas = prompt(materia + ' ¿Cual fue el porcentje de practicas entregadas?');

        //condiciones para aprobar las materias
        if (asistenciaPorcentajes >= 90 && asistenciaPorcentajes <= 100) {
            if (promedioMateria >= 7 && promedioMateria <= 10) {
                if (practicasCompletadas >= 75 && practicasCompletadas <= 100) {
                    console.log(alumno + " %c Aprobaste " + materia, "color:green");
                } else {
                    console.log(alumno + " %c por falta de trabajos practicos reprobaste " + materia, "color:red");
                }
            } else {
                console.log(alumno + " %c por promedio bajo reprobaste " + materia, "color:red");
            }
        } else {
            console.log(alumno + " %c por inasistencias reprobaste " + materia, "color:red");
        }
    }
}

//recepción del nombre del alumno
let alumno = prompt('¿Cual es nombre del alumno:?');

//llamado de dla función
revision(alumno);


//creación de grupo 1 con sus actividades
console.group('semana 1');
console.log(24/14);
console.log(24/14);
console.log(56/14);
console.log(8/14);
console.groupEnd();

//creación de grupo 2 con sus actividades
console.group('semana 2');
console.log(24/14);
console.log(24/14);
console.log(56/14);
console.log(8/14);
console.groupEnd();







