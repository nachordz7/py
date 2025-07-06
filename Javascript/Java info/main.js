//Boton que agrega un elemento li dentro de ul
let btn = document.querySelector('#btn'); // Obtiene el elemento boton con id btn
let ul = document.querySelector('ul');    // Obtiene el elemento ul por default

function nuevo(){                         // Crea una funcion llamada nuevo
  let li = document.createElement('li');  // Crea un elemento li 
  li.textContent = 'Nuevo elemento';      // Agrega texto dentro del li
  ul.append(li);                        // Carga el contenido de li al final de ul
}

let prueba = document.querySelector('#prueba');     // Obtiene el elemento con id prueba
let prueba2 = document.querySelector('#prueba2');   // Obtiene el elemento con id prueba2
let bt1 = document.querySelector('#bt1');           // Obtiene el elemento con id bt1
let bt2 = document.querySelector('#bt2');           // Obtiene el elemento con id bt2

function add(){                                     // Crea una funcion llamada add
prueba.classList.add('resaltado');                  // Agrega
if (prueba.classList.contains('resaltado')) {       // Condicion de si la clase es true
  alert('El parrafo ya tiene la clase resaltado');  // Muestra un mensaje
}
}

function toggle(){
  prueba2.classList.toggle('resaltado');  
}


