document.querySelector('table').addEventListener('click', (event) => {
  let boton = event.target;

  if (boton.classList.contains('A') || boton.classList.contains('P')) {
    let fila = boton.closest('tr');
    let btnAusente = fila.querySelector('.A');
    let btnPresente = fila.querySelector('.P');

    if (boton.classList.contains('A')) {
      
      btnAusente.classList.toggle('ausente');
      btnPresente.classList.remove('presente');
    } else {
      
      btnPresente.classList.toggle('presente');
      btnAusente.classList.remove('ausente');
    }
  }
});