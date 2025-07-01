// FUNDAMENTOS EN JAVASCRIPT

// 1. ¡Hola, mundo!
/*
Crea una página que muestre el mensaje “¡Soy JavaScript!”.
alert("¡Soy JavaScript!");
*/

// 2. Estructura del codigo
// 3. El modo moderno, "use strict"
/*
(no hay tarea).
*/

// 4. Variables
/*
Declara dos variables: admin y name.
Asigna el valor "John" a name.
Copia el valor de name a admin.
Muestra el valor de admin usando alert (debe salir “John”).
let admin;
let name = "John";
admin = name;
alert(admin);

Crea una variable con el nombre de nuestro planeta. ¿Cómo nombrarías a dicha variable?
Crea una variable para almacenar el nombre del usuario actual de un sitio web. ¿Cómo nombrarías a dicha variable?

let ourPlanetName = "Tierra";
let currentUserName = "Juan";
*/

// 10. Ejecución condicional: if, '?'
/*
let name = prompt('¿Cuál es el nombre “oficial” de JavaScript?');

if(name == 'ECMAScript'){
    alert('¡Correcto!');
}
else alert('¿No lo sabes? ¡ECMAScript!');


let num = prompt('Ingrese un numero: ');
if(num > 0){
    alert('1');
}
else if(num < 0){
    alert('-1');
}
else alert('0');
*/

// 15. Funciones 

function showMessage(){
    alert('mensaje desde una funcion');
}

showMessage();
