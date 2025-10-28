/*
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

*/
// Cargar cursos al inicio
function cargarCursos() {
  fetch('http://localhost:3000/api/cursos')
    .then(res => res.json())
    .then(cursos => {
      const selectCurso = document.querySelector('#curso');
      selectCurso.innerHTML = '';
      for (let curso of cursos) {
        const option = document.createElement('option');
        option.value = curso.id;
        option.textContent = `${curso.anio} ${curso.division}° - ${curso.esp}`;
        selectCurso.appendChild(option);
      }
      if (cursos.length > 0) {
        cargarMaterias(cursos[0].id);
      }
    })
    .catch(err => console.error('Error cargando cursos:', err));
}

// Cargar materias de un curso
function cargarMaterias(cursoId) {
  fetch(`http://localhost:3000/api/materias/${cursoId}`)
    .then(res => res.json())
    .then(materias => {
      const selectMateria = document.querySelector('#materia');
      selectMateria.innerHTML = '';
      for (let materia of materias) {
        const option = document.createElement('option');
        option.value = materia.id;
        option.textContent = materia.nombre;
        selectMateria.appendChild(option);
      }
      // Cargar alumnos de la primera materia automáticamente
      if (materias.length > 0) {
        cargarAlumnos(materias[0].id);
      }
    })
    .catch(err => console.error('Error cargando materias:', err));
}

// Cargar alumnos de una materia
function cargarAlumnos(materiaId) {
  fetch(`http://localhost:3000/api/alumnos/${materiaId}`)
    .then(res => res.json())
    .then(alumnos => {
      const tbody = document.querySelector('#asistencia tbody');
      tbody.innerHTML = '';
      for (let alumno of alumnos) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${alumno.id}</td>
          <td>${alumno.nombres}</td>
          <td>${alumno.apellidos}</td>
          <td>
          <button class="presente" onclick="handleClick(event)">P</button>
          <button class="tarde" onclick="handleClick(event)">T</button>
          <button class="ausente" onclick="handleClick(event)">A</button>
          <button class="retiro" onclick="handleClick(event)">RA</button>
        </td>
        `;
        tbody.appendChild(tr);
      }
    })
    .catch(err => console.error('Error cargando alumnos:', err));
}

// Registrar asistencia al clickear 
function handleClick(event) {
  const tipo = event.target.textContent;
  const row = event.target.closest('tr');
  const idAlumno = row.children[0].textContent;
  const idMateria = document.querySelector('#materia').value;

  const datos = {
    tipo,
    alumno: idAlumno,
    materia: idMateria
  };

  fetch('http://localhost:3000/api/asistencias', {
    method: 'POST',
    body: JSON.stringify(datos),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => res.json())
    .then(data => alert(data.msg || 'Registro insertado correctamente'))
    .catch(err => alert('Error: ' + err.message));
}

cargarCursos();

