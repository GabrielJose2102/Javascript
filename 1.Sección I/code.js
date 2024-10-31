//Practica sección I

//alerta de menu del restaurante
alert(`Bienvenidos a, Restaurante Continental <br><br>

        Carta de precios platos continetales: <br><br>
        
        - Arepa criolla de carne mechada $4 <br>
        - Bandeja paisa ---------------- $7 <br>
        - Hamburguesa Americana -------- $8 <br>
        - Tacos al pastor con salsa ---- $10 <br>
        - Pasta Napolitana ------------- $10 <br>
        - Pabellon Criollo ------------- $15 <br><br><br>`);

//Creación de variables e introdución de datos desde el teclado
let persona1 = prompt('Ingrese nombre: ');
let dineroP1 = prompt(`${persona1} ¿Cuanto dinero tienes?`);
let vueltoP1;

let persona2 = prompt('Ingrese nombre: ');
let dineroP2 = prompt(`${persona2} ¿Cuanto dinero tienes?`);
let vueltoP2;

let persona3 = prompt('Ingrese nombre: ');
let dineroP3 = prompt(`${persona3} ¿Cuanto dinero tienes?`);
let vueltoP3;

//Condiciones para impresones de los mensajes persona1
if (dineroP1 >= 15) {
    document.write(`${persona1} posees ${dineroP1}$ el plato mas caro que puedes comprar: <br>
                    Pabellon Criollo <br>`)
    vueltoP1 = dineroP1 - 15;
} else if (dineroP1 > 9 && dineroP1 < 15) {
    document.write(`${persona1} posees ${dineroP1}$ el plato mas caro que puedes comprar: <br>
                    Pasta Napolitana o <br>
                    Tacos al pastor con salsa <br>`)
    vueltoP1 = dineroP1 - 10;
} else if (dineroP1 > 7 && dineroP1 < 10) {
    document.write(`${persona1} posees ${dineroP1}$ el plato mas caro que puedes comprar: <br>
                    Hamburguesa Americana <br>`)
    vueltoP1 = dineroP1 - 18;
} else if (dineroP1 > 6 && dineroP1 < 8) {
    document.write(`${persona1} posees ${dineroP1}$ el plato mas caro que puedes comprar: <br>
                    Bandeja paisa <br>`)
    vueltoP1 = dineroP1 - 7;
} else if (dineroP1 > 3 && dineroP1 < 7) {
    document.write(`${persona1} posees ${dineroP1}$ el plato mas caro que puedes comprar: <br>
                    Arepa criolla de carne mechada <br>`)
    vueltoP1 = dineroP1 - 4;
} else {
    document.write(`${persona1} posees ${dineroP1}$ el plato mas caro que No posees dinero suficiente <br>`)
}
document.write(`Vuelto: ${vueltoP1}$ <br><br>`);


//Condiciones para impresones de los mensajes persona2
if (dineroP2 >= 15) {
    document.write(`${persona2} posees ${dineroP2}$ el plato mas caro que puedes comprar: <br>
                    Pabellon Criollo <br>`)
    vueltoP2 = dineroP2 - 15;                
} else if (dineroP2 > 9 && dineroP2 < 15) {
    document.write(`${persona2} posees ${dineroP2}$ el plato mas caro que puedes comprar: <br>
                    Pasta Napolitana o <br>
                    Tacos al pastor con salsa <br>`)
    vueltoP2 = dineroP2 - 10;                
} else if (dineroP2 > 7 && dineroP2 < 10) {
    document.write(`${persona2} posees ${dineroP2}$ el plato mas caro que puedes comprar: <br>
                    Hamburguesa Americana <br>`)
    vueltoP2 = dineroP2 - 8;                
} else if (dineroP2 > 6 && dineroP2 < 8) {
    document.write(`${persona2} posees ${dineroP2}$ el plato mas caro que puedes comprar: <br>
                    Bandeja paisa <br>`)
    vueltoP2 = dineroP2 - 7;                
} else if (dineroP2 > 3 && dineroP2 < 7) {
    document.write(`${persona2} posees ${dineroP2}$ el plato mas caro que puedes comprar: <br>
                    Arepa criolla de carne mechada <br>`)
    vueltoP2 = dineroP2 - 4;               
} else {
    document.write(`${persona2} posees ${dineroP2}$ el plato mas caro que No posees dinero suficiente <br><br>`)
}
document.write(`Vuelto: ${vueltoP2}$ <br>`);

//Condiciones para impresones de los mensajes persona3
if (dineroP3 >= 15) {
    document.write(`${persona3} posees ${dineroP3}$ el plato mas caro que puedes comprar: <br>
                    Pabellon Criollo <br>`)
    vueltoP3 = dineroP3 - 15;
} else if (dineroP3 > 9 && dineroP3 < 15) {
    document.write(`${persona3} posees ${dineroP3}$ el plato mas caro que puedes comprar: <br>
                    Pasta Napolitana o <br>
                    Tacos al pastor con salsa <br>`)
    vueltoP3 = dineroP3 - 10;
} else if (dineroP3 > 7 && dineroP3 < 10) {
    document.write(`${persona3} posees ${dineroP3}$ el plato mas caro que puedes comprar: <br>
                    Hamburguesa Americana <br>`)
    vueltoP3 = dineroP3 - 8;
} else if (dineroP3 > 6 && dineroP3 < 8) {
    document.write(`${persona3} posees ${dineroP3}$ el plato mas caro que puedes comprar: <br>
                    Bandeja paisa <br>`)
    vueltoP3 = dineroP3 - 7;
} else if (dineroP3 > 3 && dineroP3 < 7) {
    document.write(`${persona3} posees ${dineroP3}$ el plato mas caro que puedes comprar: <br>
                    Arepa criolla de carne mechada <br>`)
    vueltoP3 = dineroP3 - 4;
} else {
    document.write(`${persona3} ${dineroP3}$ No posees dinero suficiente <br>`)
}
document.write(`Vuelto: ${vueltoP3}$ <br><br><br><br>`);


//Solución Recomendada

// Estructura de datos para almacenar información de platos y precios
/* const menu = [
    { name: 'Pabellon Criollo', price: 15 },
    { name: 'Pasta Napolitana', price: 10 },
    { name: 'Tacos al pastor con salsa', price: 10 },
    { name: 'Hamburguesa Americana', price: 8 },
    { name: 'Bandeja paisa', price: 7 },
    { name: 'Arepa criolla de carne mechada', price: 4 },
  ];
  
  // Función para determinar el plato más caro que una persona puede comprar
  function determinarPlato(persona, dinero) {
    let platoComprado = null;
    let vuelto = 0;
  
    for (let i = 0; i < menu.length; i++) {
      if (dinero >= menu[i].price) {
        platoComprado = menu[i].name;
        vuelto = dinero - menu[i].price;
        break;
      }
    }
  
    if (platoComprado) {
      document.write(`${persona} posees ${dinero}$ el plato más caro que puedes comprar: <br>${platoComprado} <br>`);
    } else {
      document.write(`${persona} posees ${dinero}$ No posees dinero suficiente <br>`);
    }
  
    document.write(`Vuelto: ${vuelto}$ <br><br>`);
  }
  
  // Llamadas a la función determinarPlato para cada persona
  determinarPlato(persona1, dineroP1);
  determinarPlato(persona2, dineroP2);
  determinarPlato(persona3, dineroP3); */




//Ejercicio boletos de loteria

//Crear variable
let boletos;

//Impresión de mensaje en pantalla
document.write(`Triple Gordo Venta de Loteria <br><br>

        Precio del Boleto 1.5$ <br><br>`);

//Condiciones para resultado de variable
if (vueltoP1 >= 7.5) {
    boletos = 5;
} else if (vueltoP1 >= 6) {
    boletos = 4;
} else if (vueltoP1 >= 4.5) {
    boletos = 3;
} else if (vueltoP1 > 3) {
    boletos = 2;
} else if (vueltoP1 > 1.5) {
    boletos = 1;
} else {
    boletos = 0;
}

//Impresión de mensaje de resultado en pantalla
document.write(`Con los ${vueltoP1}$ de vuelto ${persona1} puedes comprar ${boletos} Boletos`);


//Codigo Recomendado
/* const precioBoleto = 1.5;

//función para ejecutar el codigo de calculos de los boletos
const calcularCantidadBoletos = (vuelto) => {
  if (vuelto >= 7.5) {
    return 5;
  } else if (vuelto >= 6) {
    return 4;
  } else if (vuelto >= 4.5) {
    return 3;
  } else if (vuelto > 3) {
    return 2;
  } else if (vuelto > 1.5) {
    return 1;
  } else {
    return 0;
  }
};

const vueltoP1 = 10; // Ejemplo de valor para el vuelto de la persona 1

//Llamada de la función
const boletosP1 = calcularCantidadBoletos(vueltoP1);

//Mesaje de resultado en pantalla
document.write(`Triple Gordo Venta de Loteria <br><br>
  Precio del Boleto ${precioBoleto}$ <br><br>
  Con los ${vueltoP1}$ de vuelto ${persona1} puedes comprar ${boletosP1} Boletos`); */


//creación de varible para condición
let resultado = 2;

//Condiciones para el resultado del detector
if (resultado == 1) {
    console.log('Verdadero, no se da descarga electrica')
} else if (resultado == 2) {
    console.log('Falso, si se da descarga electrica')
} else if (resultado == 3) {
    console.log('Inconcluso, vuelve a preguntar')
} else{
    console.log('No dio ninguna respuesta')
}