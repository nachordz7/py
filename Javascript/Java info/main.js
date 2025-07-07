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

let random1 = Math.floor(Math.random() * frutas.length); // Crea random1 con un valor random de frutas, .lenght cuenta la cantidaddaue hay dentro de una variable
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

//Usar onclick en un boton para cambiar el color de un <h1> con style.color.
let boton = document.querySelector('#boton');
let header = document.querySelector('#h1');

function cambiar(){
  header.style.backgroundColor = 'gray';
  header.style.color = 'red';
}

// formulario y boton 
function handleSubmit(event){
  event.preventDefault();
  let form = event.target;
  let msg = 'Bienvenido ' + form.nombre.value;
  alert(msg);
  form.reset();
}

function handleClick(event){
  let bot = event.target;
  let n = parseInt(bot.textContent);
  n = n + 1;
  bot.textContent = n;
}

// Funcion que muestre el elemento clickeado en consola
let body = document.querySelector('body');
function handleAnyClick(e){
  console.log(e.target);
}
body.onclick = handleAnyClick;

/*Escribir una funcion que se ejecute al enviar un formulario con dos imputs cuyos nombres son 'a' y 'b'.
Al enviar el formulario leer los valores y cambiar un <h1>(el unico de la pagina) para que diga resultado de a + b.
*/
function enviar(e){
  e.preventDefault();
  let formulario = e.target; 
  let h1 = document.querySelector('#unico');
  let resultado = parseFloat(formulario.a.value) + parseFloat(formulario.b.value);
  h1.textContent = `Resultado de a + b = ${resultado}`; 
}

let button = document.querySelector('#button');
let h2 = document.querySelector('#h2');

button.addEventListener('click',function(){
  h2.style.color = 'green';
});

// Hacer un reloj
setInterval(actualizarReloj,1000); // Repite la funcion actualizarReloj cada 1 segundo
function actualizarReloj(){     // Crea una funcion
  let ahora = new Date();       // Crea un objeto de fecha y hora actual

  // Formula de String: String(valor).padStart(2,'0') Esto sirve para crear un minimo de 2 caracteres
  let horas = String(ahora.getHours()).padStart(2,'0'); // Crea horas y se le asigna la hora actual. 
  let minutos = String(ahora.getMinutes()).padStart(2,'0'); // Crea minutos y se le asigna los minutos actuales.
  let segundos = String(ahora.getSeconds()).padStart(2,'0'); // Crea segundos y se le asigna los segundos actuales.

  let reloj = `${horas}:${minutos}:${segundos}`; // Crea reloj y se le asigna los valores de horas, minutos y segundos
  let h1 = document.querySelector('#clock h1'); // Lee el h1 dentro del div con id #clock 
  h1.textContent = reloj ; // Crea un nuevo texto en h1 con el contenido de reloj 
}
actualizarReloj(); // llama a la funcion. Esto hace que corra la funcion sin que tenga delay


// Hacer un contador
let intervalo = setInterval(contador,1000);

function contador(){
  let cont = document.querySelector('#contador h1');
  let now = new Date();
  let fecha = new Date('2025-07-19 00:00:00');
  let diff = fecha - now;

  if(diff <=0){
    cont.textContent = 'SON VACACIONES DE INVIERNO';
    clearInterval(intervalo);
    return;
  }
  
  let dia = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hora = Math.floor(diff / (1000 * 60 * 60)) % 24;
  let minuto = Math.floor (diff / (1000 * 60)) % 60;
  let segundo = Math.floor(diff / 1000) % 60;
  console.log(dia,hora,minuto,segundo);

  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);


  cont.style.backgroundColor = `rgb(${r},${g},${b})`;
  cont.textContent = `Faltan ${dia} dias, ${hora} horas, ${minuto} minutos y ${segundo} segundos para las vacaciones`;
}
contador();
