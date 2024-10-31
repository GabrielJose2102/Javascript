//Variables 
let nombre, edad, hora = 0, vip = 0;

//Función para imprimir el resultado en pantalla segun la condicion que se cumpla 
const portero = (N, E, H)=>{
    //Condición de edad
    if (E >= 18) {
        document.write(`${N} tienes ${E} años puedes pasar eres mayor de edad <br>`);
            //Condiciones para pasar gratis 
        if (H >= 2 && vip == 0) {
            document.write(`Son las ${H} AM eres la primera persona que llega despues de las 2 AM puedes pasar gratis <br><br>`);
            vip++;
        } else {
            document.write(`muy bien son las ${H} AM la entrada Cuesta 5$ <br><br>`);
        }
    } else {
        document.write(`${N} tienes ${E} no puedes pasar eres menor de edad <br><br>`); 
    }
}

//Ciclo repetitivo para introducir los datos desde teclado y ejecutar función 
do {
    //recibir datos desde teclado
    nombre = prompt('¿Como es tu nombre?');
    edad = prompt('¿Que edad dice tu cedula?');

    //Incrementar hora
    hora++;

    //Llamado de función
    portero(nombre, edad, hora);

} while (hora <= 5);



//Recepción cantidad de alumnos desde el teclado
let alumnos = prompt('¿Cuantos alumnos hay inscritos en la materia?');
//Aloja resultado de asistencia
let asistio;
//Creación de objeto con arreglos 
let listado = {
    nombres: [],
    asistencias: [],
    inasistencias: []
} 

//Llenado de arreglos
const llenarLista = ()=>{
    //Ciclo se ejecuta por la cantidad de alumnos que esten inscrito
    for (let alumno = 0; alumno < alumnos; alumno++) {
        //Nombre de alumno
        listado.nombres[alumno] = prompt(`Cual es el Nombre del alumno Nro ${alumno+1}`);
        //Confirmación de asistencia
        listado.asistencias[alumno] = 0;
        //Confirmación de inasistencias
        listado.inasistencias[alumno] = 0;
    }
}

//Función para tomar asistencias
const tomarAsistencia = ()=>{
    //Ciclo se ejecuta por cantidad de dias
    for (let i = 0; i < 30; i++) {
        //Ciclo for-in se ejecuta por la cantidad de alumnos en la lista
        for (const lista in listado.nombres) {

            //Pregunta por la asistencia del alumno
            asistio = prompt(`Dia: ${i+1} Alumno ${listado.nombres[lista]} ¿Vino?`);
       
           //Condición para llenar espacio de la asistencia
           if (asistio == 'si') {
               listado.asistencias[lista] = ++listado.asistencias[lista];
           } else {
               listado.inasistencias[lista] = ++listado.inasistencias[lista];
           }
           
       }
        
    }
}

//Imprimir lista de alumnos
const imprimirHoja = ()=>{
    //Ciclo for-in se ejecuta por cantidad de alumnos en la lista
    for (const lista in listado.nombres) {

        //Imprime el numero de lista y nombre del alumno
        document.write(`Nro ${parseInt(lista)+1}. ${listado.nombres[lista]}: <br>`);

        //Condición para saber si aprobo o reprobo la materia
        if (listado.inasistencias[lista] >= 3) {
            document.write(`Posees ${listado.asistencias[lista]} asistencias <br>
                                   ${listado.inasistencias[lista]} inasistencias has
                                   reprobado la materia por superar el 9% <br><br>`);
        } else {
            document.write(`Posees ${listado.inasistencias[lista]} inasistencias <br>
                                   ${listado.asistencias[lista]} asistencias has aprobado la materia <br><br>`);
        }
    }
}

//Llamada de las funciones
llenarLista();
tomarAsistencia();
imprimirHoja();




//Calculadora sencilla, función con 3 argumentos
const calculadora = (opc, num1, num2)=>{
    //Condiones para saber que tipo de operación se ejecutara
    if (opc == 1) {
        return num1 + num2;
    } else if (opc == 2) {
        return num1 - num2;
    } else if (opc == 3) {
        return num1 * num2;
    } else if (opc == 4) {
        return num1 / num2;
    } else{
        console.log('Opcion no valido');
    }
}

//Variable con opción
let opcion= 0;

//Ciclo para ejecutar el menu y llamar la función
do {
    //Mostrar menu y introducir datos desde el teclado
     opcion = parseInt(prompt(`
                    1.Suma
                     2.Resta
                     3.Multiplicación
                     4.División
                     5.Salir de la app`));

    //Introcución de parametros para la ejecución de la operación
    let num1 = parseInt(prompt('Ingresa el primer numero'));
    let num2 = parseInt(prompt('Ingresa el primer numero'));

//Llamado de la función
console.log(calculadora(opcion, num1, num2));

//Condiciones del ciclo
} while (opcion<5 && opcion>0);