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


let num = Math.floor(Math.random() * 10);
console.log(`Numero aleatorio: ${num}`);

// Simulá tirar un dado que devuelve un número del 1 al 6.
let dado = Math.floor(Math.random()*6)+1;
console.log(`Tiraste un dado: ${dado}`);

// Mostra un nunero aleatorio en 50 y 100
let ran = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
console.log(`Numero aleatorio entre 50 y 100: ${ran}`);

// Mostra un fruta aleatoria
let frutas = ['manzana', 'banana', 'uva', 'pera', 'naranja'];

random1 = Math.floor(Math.random() * frutas.length);
console.log(`Fruta: ${frutas[random1]}`);

// Generá dos números aleatorios del 1 al 6 y mostrales la suma.
let r1 = Math.floor(Math.random() * 6) + 1;
let r2 = Math.floor(Math.random() * 6) + 1;
let suma = r1 + r2;
console.log(`${r1} + ${r2} = ${suma}`);

// Hacer un h1 con un background random
let h1 = document.querySelector('#encabezado');

function random(){
  let r = Math.floor(Math.random() * 256)+1;
  let g = Math.floor(Math.random() * 256)+1;
  let b = Math.floor(Math.random() * 256)+1;
  h1.style.backgroundColor =`rgb(${r},${g},${b} )`;
  h1.textContent = `RGB: ${r},${g},${b}`;
}

