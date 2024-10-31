const contentKeys = document.querySelector('.content-keys'); //obteniendo nodo desde el html
const groupKeys = document.createDocumentFragment(); //crear contenedor de etiquetas creadas para agregar al html
const btn = document.querySelector('btn-send'); //obteniendo node de boton

const random = ()=> { //función crea numero aleatorio que van del 1 al 100
   let random = Math.random()*100;
   return random;
}

for (let i = 0; i < 20; i++) { //iterando para crear elementos
   //diseño de etiquetas de la llave
   const design = `<img src="llave.png" alt="imagen llave" class="img-key">
      <p class="title-key">Modelo: M${Math.floor(random())}</p>
      <p class="id-key">Serial: #${Math.floor(random())}</p>
      <p class="price-key">Precio: ${random().toFixed(2)}</p>`;

   const label = document.createElement('DIV'); //creando elemento div
   label.innerHTML = design; //agregando contenido de la etiqueta
   groupKeys.appendChild(label); //agregando al contenedor general para asignarlas al html
};
contentKeys.appendChild(groupKeys); //insertando a la etiqueta que esta en el html


const div = document.querySelectorAll('.content-keys div'); //obteniendo nodo insertado en el html

for (let i = 0; i < 20; i++) { //iterando para agregar clase y atributo al nodo
   div[i].classList.add('card');
   div[i].setAttribute('id', `${Math.floor(random())}`);
};

const card = document.querySelectorAll('.card'); //obteniendo todos los nodos con la clase card
let datos; //variable del objeto


card.forEach((card)=> { //iterarel objeto con todos los nodos creados de la clase card
   card.addEventListener('click', (event)=> { //evento al hacer click activa función para agregar clase y obtener objeto al que se le realizo el click
      const seleccion = document.querySelector('.card-select'); //obteniendo nodo de la clase card-select

      if (seleccion !== null) { //comprobando si eciste nodo con esa claase agregada
         seleccion.classList.remove('card-select'); //si existe remover esa clase
      };
      
      const llave = event.currentTarget.children; //obteniendo el nodo al que e le realizo el click
       datos = { //creando y llenando el objeto con los datos del nodo que se rrealizo el click
         img: llave[0].getAttribute('src'),
         Modelo: llave[1].innerHTML,
         Serial: llave[2].innerHTML,
         precio: llave[3].innerHTML
      };

      event.currentTarget.classList.add('card-select'); //agregando la clase card-select al nodo que se realizo el click
      return datos; //retornando objeto
   });
});

const enviar = ()=> { //función para enviar objeto al pulsar botones
   const seleccion = document.querySelector('.card-select');

      if (seleccion !== null) {
         seleccion.classList.remove('card-select'); //quitar clase de nodo seleccionado
      };

      console.log(datos);
};


