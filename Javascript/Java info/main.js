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

function toggle(){                   // Crea una función llamada toggle 
  prueba2.classList.toggle('resaltado');  // A prueba se le asigna la clase 'resaltado', . toggle hace que alterne su valor (si es true cambia a false y viceversa) 
}


let num = Math.floor(Math.random() * 10); // Declara una variable num con un número random del 1 al 9
console.log(`Numero aleatorio: ${num}`); // Muestra el resultado en la consola

// Simulá tirar un dado que devuelve un número del 1 al 6.
let dado = Math.floor(Math.random()*6)+1; // Crea un dado con un número random del 1 al 6
console.log(`Tiraste un dado: ${dado}`); // Muestra el resultado en la consola

// Mostra un nunero aleatorio en 50 y 100
let ran = Math.floor(Math.random() * (100 - 50 + 1)) + 50;  // Crea una variable ran con un valor random de máxima 100 y mínima 50
console.log(`Numero aleatorio entre 50 y 100: ${ran}`); // Muestra el número en la consola

// Mostra un fruta aleatoria
let frutas = ['manzana', 'banana', 'uva', 'pera', 'naranja'];  // Crea un array con 5 frutas

random1 = Math.floor(Math.random() * frutas.length); // Crea random1 con un valor random de frutas, .lenght cuenta la cantidaddaue hay dentro de una variable
console.log(`Fruta: ${frutas[random1]}`); // Muestra una fruta random en la consola

// Generá dos números aleatorios del 1 al 6 y mostrales la suma.
let r1 = Math.floor(Math.random() * 6) + 1; // Crea r1 con un valor random del 1 al 6
let r2 = Math.floor(Math.random() * 6) + 1; // Crea r1 con un valor random del 1 al 6
let suma = r1 + r2;  // Crea un variable suma y almacena la suma de dos números randoms 
console.log(`${r1} + ${r2} = ${suma}`);  // Muestra el resultado de la suma en la consola

// Hacer un h1 con un background random
let h1 = document.querySelector('#encabezado');  // Localiza y crea una variable h1

function random(){   // Crea una función llamada random
  let r = Math.floor(Math.random() * 256);   // Crea una variable r con un valor random del 0-255. Math.floor redondea para abajo 
  let g = Math.floor(Math.random() * 256); // Crea una variable g con un valor random del 0-255
  let b = Math.floor(Math.random() * 256); // Crea una variable b con un valor random del 0-255
  h1.style.backgroundColor =`rgb(${r},${g},${b} )`;    // Cambia el fondo de color del h1 con los valores de r, g, y b 
  h1.textContent = `RGB: ${r},${g},${b}`;   // Cambia el contenido que hay de h1 por uno nuevo
}

