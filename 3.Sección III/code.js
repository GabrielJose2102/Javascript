//Clase telefono donde se describen las caracteristicas y ejecutan los metodos del objeto
class Telefono {
    //Se inicializan las variables con los datos enviados al instanciar la clase
    constructor(marca, color, peso, resolucionP, camara, ram){
        this.camara = camara;
        this.color = color;
        this.marca = marca;
        this.peso = peso;
        this.resolucionP = resolucionP;
        this.ram = ram;
    }
    //Metodos para mostrar información y ejecutar las funciones de un telefono
    descripcion(){
        return `<br><br>
        Telefono: ${this.marca} <br>
        Color: ${this.color} <br>
        Peso: ${this.peso} <br>
        Resolución: ${this.resolucionP} <br>
        Cámara: ${this.camara} <br>
        Memoria Ram: ${this.ram} <br>
        <br>`;
    }

    encender(){
        if (this.marca == "Samsung") {
            return `Bienvenido a ${this.marca}. Encendiendo... espero 5s`;
        } else if (this.marca == "Tecno") {
            return `Bienvenido a ${this.marca}. Encendiendo... espero 8s`;
        } else if (this.marca == "Redmi") {
            return `Bienvenido a ${this.marca}. Encendiendo... espero 6.5s`;
        } else if (this.marca == "Iphone") {
            return `Bienvenido a ${this.marca}. Encendiendo... espero 6.5s`;
        } else{
            return `La marca ${this.marca} no esta disponoble`;
        }
    }

    apagar(){
        if (this.marca == "Samsung") {
            return `Gracias por usar ${this.marca}. Apagando... espero 5s`;
        } else if (this.marca == "Tecno") {
            return `Gracias por usar ${this.marca}. Apagando... espero 8s`;
        } else if (this.marca == "Redmi") {
            return `Gracias por usar ${this.marca}. Apagando... espero 6.5s`;
        } else if (this.marca == "Iphone") {
            return `Gracias por usar ${this.marca}. Apagando... espero 6.5s`;
        } else{
            return `La marca ${this.marca} no esta disponoble`;
        }
    }

    reiniciar(){
        if (this.marca == "Samsung") {
            return `${this.marca}. Reiniciando... espero 5s`;
        } else if (this.marca == "Tecno") {
            return `${this.marca}. Reiniciando... espero 4s`;
        } else if (this.marca == "Redmi") {
            return `${this.marca}. Reiniciando... espero 6.5s`;
        } else if (this.marca == "Iphone") {
            return `${this.marca}. Reiniciando... espero 6.5s`;
        } else{
            return `La marca ${this.marca} no esta disponoble`;
        }
    }

    tomarFoto(){
        if (this.marca == "Samsung") {
            return `${this.marca}. Tomando foto... Resolucion de 50px`;
        } else if (this.marca == "Tecno") {
            return `${this.marca}. Tomando foto... Resolucion de 30px`;
        } else if (this.marca == "Redmi") {
            return `${this.marca}. Tomando foto... Resolucion de 60px`;
        } else if (this.marca == "Iphone") {
            return `${this.marca}. Tomando foto... Resolucion de 60px`;
        } else{
            return `La marca ${this.marca} no esta disponoble`;
        }
    }

    grabar(){
        if (this.marca == "Samsung") {
            return `${this.marca}. Grabando video... Resolucion de 50px 100fps`;
        } else if (this.marca == "Tecno") {
            return `${this.marca}. Grabando video... Resolucion de 30px 200fps`;
        } else if (this.marca == "Redmi") {
            return `${this.marca}. Grabando video... Resolucion de 60px 80fps`;
        } else if (this.marca == "Iphone") {
            return `${this.marca}. Grabando video... Resolucion de 60px 80fps`;
        } else{
            return `La marca ${this.marca} no esta disponoble`;
        }
    }

}

//Clase hija de telefono, obtiene las caracteristicas de su clase padre telefono mas las suyas propias
class TelefonoGammaAlta extends Telefono {
    //constructor de la clase donde se inicializan las variables
    constructor(marca, color, peso, resolucionP, camara, ram, reconocimientoF, camaraExtra){
        //se usa super para traer y usar las variables desde la clase madre
        super(marca, color, peso, resolucionP, camara, ram);
        this.reconocimientoF = reconocimientoF;
        this.camaraExtra = camaraExtra;
    }
    //Metodos de la clase hija, solo se puede usar cuando se instacia con esta clase hija
    descripcion(){
        return `<br><br>
        Telefono: ${this.marca} <br>
        Color: ${this.color} <br>
        Peso: ${this.peso} <br>
        Resolución: ${this.resolucionP} <br>
        Cámara: ${this.camara} <br>
        Cámara Extra: ${this.camaraExtra} <br>
        Memoria Ram: ${this.ram} <br>
        Desbloqueo: ${this.reconocimientoF} <br>
        <br>`;
    }

    grabarCamaraLenta(){
        return `${this.marca}. Grabando video en camar lenta... Resolucion de 50px 100fps velocidad 0.5`;
    }
}

// Gamma Baja
//Instanciación de la clase padre, aqui solo se usan los atributos generales de la clase
const samsung = new Telefono("Samsung", "Verde", "100gr", "680*1440", "50px", "3GB");
const tecno = new Telefono("Tecno", "Rojo", "150gr", "720*1612", "30px", "4GB");
const redmi = new Telefono("Redmi", "Azul", "100gr", "800*1900", "60px", "3GB");

// Gamma Alta
//Instanciación de la clase hija, aqui se pueden usar los atributos de la clase padre maas los de la hija propios
const iphone = new TelefonoGammaAlta("Iphone", "Azul", "100gr", "800*1900", "60px", "3GB", "20px", "Geométricas");
const iphonex = new TelefonoGammaAlta("Iphonex", "Rojo", "100gr", "720*1860", "90px", "6GB", "40px", "Geométricas");

//Variables que hacen funcionar el ciclo del menu
let menu = 1;
let seleccion = 0;


//Ciclo que hace funcionar el menu
do {
    //Selección del menu
    seleccion = prompt(`Ts Tech 2024
Lista de marcas disponobles,

Selecciona con: 
1.Samsung.
2.Tecno.
3.Redmi
4.Iphone
5.Iphonex`);

//Condiciónes para imprimir la informacion dependiende de el tipo de marca
if (seleccion == 1) {
    document.write(samsung.descripcion());
    document.write(`Funcionamiento del telefono ${samsung.marca} <br>
                    ${samsung.encender()} <br>
                    ${samsung.tomarFoto()} <br>
                    ${samsung.grabar()} <br>
                    ${samsung.reiniciar()} <br>
                    ${samsung.apagar()} <br>`);
} else if (seleccion == 2) {
    document.write(tecno.descripcion());
    document.write(`Funcionamiento del telefono ${tecno.marca} <br>
                    ${tecno.encender()} <br>
                    ${tecno.tomarFoto()} <br>
                    ${tecno.grabar()} <br>
                    ${tecno.reiniciar()} <br>
                    ${tecno.apagar()} <br>`);
} else if (seleccion == 3) {
    document.write(redmi.descripcion());
    document.write(`Funcionamiento del telefono ${redmi.marca} <br>
                    ${redmi.encender()} <br>
                    ${redmi.tomarFoto()} <br>
                    ${redmi.grabar()} <br>
                    ${redmi.reiniciar()} <br>
                    ${redmi.apagar()} <br>`);
} else if(seleccion == 4) {
    document.write(iphone.descripcion());
    document.write(`Funcionamiento del telefono ${iphone.marca} <br>
                    ${iphone.encender()} <br>
                    ${iphone.tomarFoto()} <br>
                    ${iphone.grabar()} <br>
                    ${iphone.reiniciar()} <br>
                    ${iphone.grabarCamaraLenta()} <br>
                    ${iphone.apagar()} <br>
                    ${iphone.apagar()} <br>`);
} else if(seleccion == 5) {
    document.write(iphonex.descripcion());
    document.write(`Funcionamiento del telefono ${iphonex.marca} <br>
                    ${iphonex.encender()} <br>
                    ${iphonex.tomarFoto()} <br>
                    ${iphonex.grabar()} <br>
                    ${iphonex.reiniciar()} <br>
                    ${iphonex.grabarCamaraLenta()} <br>
                    ${iphonex.apagar()} <br>
                    ${iphonex.apagar()} <br>`);
} else{
    alert('Seleccionaste una marca no disponible en este momento');
}

//Variable para continuar o finalizar el programa
menu = prompt(`1. Imprimir resultado de caracteristicas
2. Seleccionar mas telefonos`);

//Condición del ciclo para su ejecución
} while (menu == 2);





/* App */

//Clase App se describe las caracteristica de la aplicaón
class App {
    //Se inicializan las variables con los datos enviados al instanciar la clase
    constructor(nombre, descargas, puntuacion, peso, instalada, iniciada){
        this.nombre = nombre;
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.instalada = instalada;
        this.iniciada = iniciada;
    }

    //metodos de la clase App, de momento solo devuelven cadenas de string
    descripcion(){
        return `
        Nombre: ${this.nombre} <br>
        Descargas: ${this.descargas}-Millones <br>
        puntuacion: ${this.puntuacion}-Estrellas <br>
        peso: ${this.peso}GB <br>
        <br><br>`;
    }

    instalar(){
        if (this.instalada == true) {
            alert(`Ya has instalado ${this.nombre}... <br>`);
        } else {
            alert(`Instalando ${this.nombre} por favor espere... <br>`);
        return this.instalada = true;
        }
        
    }

    abrir(){

        if (this.instalada == true) {
            alert(`Ejecutando ${this.nombre} por favor espere... <br>`);
            return this.iniciada = true;
        } else {
            alert(`La app ${this.nombre} no esta instalada... <br>`);
            return this.iniciada = false;
        }
    }

    cerrar(){

        if (this.iniciada == true) {
            alert(`Finalizando ${this.nombre} por favor espere... <br>`);
            return this.iniciada = false;
        } else { 
            alert(`La app ${this.nombre} no existe... <br>`);
        }
    }

    desinstalar(){

        if (this.instalada == true) {
            alert(`Desinstalando ${this.nombre} por favor espere... <br>`);
            return this.instalada = false;
        } else {
            alert(`La app ${this.nombre} no existe... <br>`);
        }

    }
}

//Instanciación de clase por cada aplición
const cod = new App('COD', 100, 4.5, 5);
const free = new App('FREE', 100, 3.5, 3);
const pug = new App('PUG', 110, 4, 4);
const lol = new App('LOL', 300, 5, 9);
const ark = new App('ARK', 200, 4.2, 4);
const cs2 = new App('CS2', 90, 4, 5);
const tft = new App('TFT', 120, 3.9, 2);

//Se alojaron los objetos que devuelve cada instanciacón en el arreglo
let aplicaciones = [cod, free, pug, lol, ark, cs2, tft];

//Referencias de comparación con la app que se busca
let referenciaDes = parseInt(prompt('¿promedios de descargas que buscas?'));
let referenciaEst = parseFloat(prompt('¿promedios de puntuación que buscas?'));
let referenciaPes = parseInt(prompt('¿peso maximo de la aplicaión?'));

//Datos de las app que existen
let des, est, pes;

//Ciclo para iterar el arreglo y extraer los datos de cada objeto de la clase
for (const aplicacion in aplicaciones) {
    //imprimir en pantalla la descripción de cada aplicación
    

    //Asignación de los datos de las app del sistema
    des = aplicaciones[aplicacion].descargas;
    est = aplicaciones[aplicacion].puntuacion;
    pes = aplicaciones[aplicacion].peso;

    //Comprobación de requisitos de las app
    if (des >= referenciaDes && est >= referenciaEst && pes <= referenciaPes) {
        document.write(`<span style="color: green;">Esta App cumple los requisitos que buscas, se recomendada</span>`);
        document.write(aplicaciones[aplicacion].descripcion());
    } else {
        document.write(`<span style="color: red;">Esta App no cumple los requisitos que buscas, no se recomienda</span>`);
        document.write(aplicaciones[aplicacion].descripcion());
    }
}


//Ejecutando los metodos de la clase app
cod.instalar();
cod.desinstalar();
cod.abrir();
cod.cerrar();



