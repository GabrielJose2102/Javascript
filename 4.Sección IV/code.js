//Calculadora 2

//Variables 
let num1, num2, ope;

//Funcion calculadora sencilla
let calculadora = ()=>{
    //Menu de selección
    ope = prompt(`Selecciona la operacion: 
    1.Suma
    2.Resta
    3.Multiplicación
    4.División`);
    
    //Ingreso de datos
    num1 = parseInt(prompt('Ingresa el primer numero'));
    num2 = parseInt(prompt('Ingresa el segundo numero'));

    //Selector de operaión
    if (ope === '1') {
        console.log(num1 + num2);
    } else if (ope === '2') {
        console.log(num1 - num2);
    } else if (ope === '3') {
        console.log(num1 * num2);
    } else if (ope === '4') {
        console.log(num1 / num2);
    }
}

//Funcion calculadora avanzada
let calculadoraAvanzada = ()=>{
    //Funcion calculadora sencilla
    ope = prompt(`Selecciona la operacion: 
    1.Exponencial
    2.Raiz Cuadrada
    3.Raiz Cubica
    4.Potencia
    5.Maximo
    6.Minimo`);

    //Selector de operaión
    if (ope === '1') {
        num1 = parseInt(prompt('Ingresa el numero'));
        console.log(Math.exp(num1));
    } else if (ope === '2') {
        num1 = parseInt(prompt('Ingresa el numero'));
        console.log(Math.sqrt(num1));
    } else if (ope === '3') {
        num1 = parseInt(prompt('Ingresa el numero'));
        console.log(Math.cbrt(num1));
    } else if (ope === '4') {
        num1 = parseInt(prompt('Ingresa la base'));
        num2 = parseInt(prompt('Ingresa el exponente'));
        console.log(Math.pow(num1, num2));
    } else if (ope === '5') {
        num1 = parseInt(prompt('Ingresa el primer numero'));
        num2 = parseInt(prompt('Ingresa el segundo numero'));
        console.log(Math.max(num1, num2));
    } else if (ope === '6') {
        num1 = parseInt(prompt('Ingresa el primer numero'));
        num2 = parseInt(prompt('Ingresa el segundo numero'));
        console.log(Math.min(num1, num2));
    }
}

//Selector de calculadora
let tipoCalculadora = prompt(`1.Calculadora Sencilla
2.calculado Avanzada`);

//Calculadora sencilla
if (tipoCalculadora == '1') {
    calculadora();
}

//Calculadora avanzada
if (tipoCalculadora == '2') {
    calculadoraAvanzada();
}





//Plan de actividades escolar

//Objeto contenedor de los arragles de datos
let planEducativo = {
    materia: ['Programación', 'Matematica', 'Filosofia'],
    profesores: ['Julian', 'Carmen', 'Matias'],
    alumnos: [['Lucas', 'Alberto'],['Alberto', 'Jhon', 'Lucas'],['Carla', 'Daniela', 'Diana', 'Lucas']]
}

//función muestra materias, profesor asignado y cantidad de alumnos inscritos
let infoGeneral = ()=> {
    let materia, profesor;
    //Ciclo for-in que itera segun la cantidad de materia
    for (const materias in planEducativo.materia) {
        materia = planEducativo.materia[materias];
        profesor = planEducativo.profesores[materias];

        //impresión de mensaje en consola
        console.log(`Asignación de materias profesores
        Materia: ${materia} (profesor: ${profesor}) 
        Matricula: `);

        //Ciclo for-in que itera segun la cantidad de alumnos por materia
        for (const alumnos of planEducativo.alumnos[materias]) {
            console.log(alumnos);
        }
    }
}

//Busca en que materia esta inscrito un alumno buscado por su nombre
let buscarAlumno = (alumno)=> {
    let clases = 0;
    let inscrito = false;

    //busca el nombre de alumno en las listas de las materias
    for (const alumnos in planEducativo.alumnos) {
       inscrito = planEducativo.alumnos[alumnos].includes(alumno);

       //si esta inscrito aumenta el numero de clases
       if (inscrito === true) {
           clases++
       }
    }

    //Se muestra el nombre del alumno y la cantidad de materias en la que esta inscrito
    console.log(`El alumno: ${alumno} esta inscrito en ${clases} clases`);
}

//Llamada de las funciones
infoGeneral();
buscarAlumno('Lucas');


/* let planEducativo = {
    materia: ['Programación', 'Matematica', 'Filosofia'],
    profesores: ['Julian', 'Carmen', 'Matias'],
    alumnos: [['Lucas', 'Alberto'],['Alberto', 'Jhon', 'Lucas'],['Carla', 'Daniela', 'Diana', 'Lucas']]
} */


//Función para inscribir un alumno en la materia
let inscripcion = (materia, nombre) =>{

    //obteniendo las posiciones dentro de los arreglos 
    let idMateria = planEducativo.materia.indexOf(materia);
    let inscrito = planEducativo.alumnos[idMateria].includes(nombre);
    let matricula = planEducativo.alumnos[idMateria].length;

    //comprobando si hay cupos en la materia
    if (matricula < 4) {
        //Comprobando si esta inscrito
        if (inscrito !== true) {
            planEducativo.alumnos[idMateria].push(nombre);
            console.log(`Se ah incrito correctamente materia: ${materia} nombre alumno: ${nombre}`);
        } else {
            console.log(`El alumno ${nombre} ya se encuentra inscrito`);
        }
    } else {
        console.log(`La matricula de ${materia} esta llena...`);
    }
}

//Obteniendo datos por parte del usuario 
let materia = prompt('Ingrese la materia en que desea inscribirse');
let nombre = prompt('Ingrese su nombre');

//Llamando función
inscripcion(materia, nombre);