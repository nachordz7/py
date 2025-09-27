//usar Date() y  setInterval()
let h1 = document.querySelector('#elem1')

let ahora = new Date();
let vacaciones = new Date('2025-07-18 23:00:00');
let diferencia = vacaciones - ahora ; // en ms 

let d = 4;
let h = 3; 
let m = 2;
let s = 1;
h1.textContent='Faltan ${d} dias, ${h} horas, ${m} minutos y ${s} segundos.'; 
