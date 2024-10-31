let alumnos = {
    nombreCompleto: "",
    cedula: "",
    materias: ['Progamacion', 'Algoritmos', 'BD', 'Patrones', 'Estructuras'],
    notas: [],
    promedio: ""
};


function ingresarNotas(callback) {
    callback();
};

ingresarNotas(()=> {
    const nombre =  prompt('Ingrese su nombre completo: ');
    const cedula =  prompt('Ingrese su cedula: ');
    alumnos.nombreCompleto = nombre;
    alumnos.cedula = cedula;
    
    
    for (const materia of alumnos.materias) {
        let nota = prompt(`Ingrese la nota de ${materia}: `)
        alumnos.notas.push(nota);
    }
});


const evaluar = ()=> {
    return new Promise((resolve, reject)=> {
        
        if (alumnos.notas.length === 0) {
            reject('qualification data not exists')
        } else if (alumnos.notas.length > 5) {
            reject('qualification data exceeded')
        } else {
            let acumulado = 0;
            for (const notas of alumnos.notas) {
                acumulado += parseInt(notas);
            }
            let promedio = acumulado / alumnos.notas.length;
            alumnos.promedio = promedio;

            for (const nota in alumnos.notas) {
                console.log(`${alumnos.materias[nota]} Nota: ${alumnos.notas[nota]}`);
            }
            resolve('state studen completed')
        }
    })
};




const mostrar = async ()=> { 

    await evaluar()
            .then((data)=> console.log(data))
            .catch((error)=> console.log(error))

    if (alumnos.promedio < 10) {
        console.log(`${alumnos.nombreCompleto} Alumno reprobado con promedio de: ${alumnos.promedio}`);
    } else {
        console.log(`${alumnos.nombreCompleto} Alumno Aprobado con promedio de: ${alumnos.promedio}`);
    }
}

mostrar();