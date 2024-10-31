//Compra de lapto con resolucion full hd

/* const laptops = {
    Samsung: [900, 680],
    Dell: [1100, 900],
    Compac: [1280, 720],
    HP: [1440, 1020],
    Vit: [1990, 1390],
};

const screenHeight = window.screen.height;
const screenWidth= window.screen.width;

const ConfirmScreen = (height, width)=> {
    if (height > screenHeight && screenWidth > 720) {
        return confirm('Esta laptop tiene resolucion Full HD, Deseas comprarla o revisar otras.');
    } else {
        alert('Esta laptop no posee resolucion FUll HD, Prueba con otra.');
    }
};

let build = ConfirmScreen(laptops.Vit[0], laptops.Vit[1]);

console.log(build);
if (build) {
    alert('Compra realizada exitosamente...');
} else {
    alert('Compra rechzada...'); 
}*/



//Sistema para mostrar los datos de la pagina web que se esta navegando

const web = window

console.log(web);

const text = `url: ${web.location.href} <br> 
resolucion: ${web.screen.availHeight} x ${web.screen.availWidth} <br>
navegador: ${web.navigator.appCodeName} <br>
lenguaje: ${web.navigator.language}`;

document.write(text);