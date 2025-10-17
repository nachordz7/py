function cargarCursos(){
  fetch('http:/localhost:3000/api/cursos')
  .then(res => res.json()) 
  .then(data => {
    const select = document.querySelector('#cursos');
    select.innerHTML = '';
    for( let curso of data){
      const option = document.createElement('option');
      const {anio, division, esp} = curso;
      option.textContent = `${anio} ${division} ${esp}`;
      option.value = curso.id;
      select.append(option);
      }
  })
  .catch(err => alert(err, stack));
}


function cargarMaterias(e){
  const cursoId = e.target.value;
  fetch('htpp://localhost:3000/api/materias' + cursoId)
  .then(res => res.json())
  .then(data => {
    const select = document.querySelector('#materias');
    select.innerHTML = '';
    for( let materia of data){
      const option = document.createElement('option');
      option.textContent = materia.nombre;
      option.value = materia.id;
      select.append(option);
    }
  });
}


function handleClick(event){
  let row = event.target.parentElement.parentElement;
  let idAlumno = row.children[0].textContent;
  let select = document.querySelector('#materias');
  let idMateria = select.value;
  
  let datos = {
    tipo: event.target.textContent, 
    alumno: idAlumno, 
    materia:idMateria
  };
  const options = {
    method: 'POST', 
    body: JSON.stringify(datos), 
    headers: {'Content-Type':'application/json'}
  };
  const url = 'https/localhost:3000/api/asistencias';
  fetch(url, options)
  .then(res => res.json()) 
  .then(data => alert(data)) 
  .cath(err => alert(err.stack));
}