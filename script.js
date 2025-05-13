
let velocidad = prompt('Ingrese velocidad');
let unidad = prompt('Decime la unidad a la que queres pasar(m/s o km/h)');

if(unidad == 'km/h'){ 
alert(velocidad*3.6);
}
else if (unidad == 'm/s'){
    alert(velocidad/3,6);
}
else alert('Sabes leer cabeza de queso parmigiano?');

/*
2.Recibir un año y decir si es biciesto o no.

3.Recibir un mes(numero del 1 al 12) y decir y cuantos dias tiene.

*/