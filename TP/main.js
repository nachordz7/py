// Cargar cursos al inicio
function cargarCursos() {
  fetch('http://localhost:3000/api/cursos')
    .then(res => res.json())
    .then(cursos => {
      const selectCurso = document.querySelector('#curso');
      const selectAlumnoCurso = document.querySelector('#alumCurso');
      selectCurso.innerHTML = '';
      selectAlumnoCurso.innerHTML = '<option value="">Seleccionar curso...</option>';

      for (let curso of cursos) {
        const option = document.createElement('option');
        option.value = curso.id;
        option.textContent = `${curso.anio} ${curso.division}° - ${curso.esp}`;
        selectCurso.appendChild(option);

        const option2 = document.createElement('option');
        option2.value = curso.id;
        option2.textContent = `${curso.anio} ${curso.division}° - ${curso.esp}`;
        selectAlumnoCurso.appendChild(option2);
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
      if (materias.length > 0) {
        cargarAlumnos(materias[0].id);
      } else {
        document.querySelector('#asistencia tbody').innerHTML = '';
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
      alumnos.forEach((alumno, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${index + 1}</td>
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
      });
    })
    .catch(err => console.error('Error cargando alumnos:', err));
}

// Registrar asistencia
function handleClick(event) {
  const tipo = event.target.textContent;
  const row = event.target.closest('tr');
  const idAlumno = row.children[0].textContent;
  const idMateria = document.querySelector('#materia').value;

  const datos = { tipo, alumno: idAlumno, materia: idMateria };

  fetch('http://localhost:3000/api/asistencias', {
    method: 'POST',
    body: JSON.stringify(datos),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => res.json())
    .then(data => alert(data.msg || 'Registro insertado correctamente'))
    .catch(err => alert('Error: ' + err.message));
}

// Agregar alumno nuevo
function handleSubmit(e) {
  e.preventDefault();

  const nombre = document.querySelector('#nombre').value.trim();
  const apellido = document.querySelector('#apellido').value.trim();
  const curso = document.querySelector('#alumCurso').value;

  if (!nombre || !apellido || !curso) {
    alert('Completá todos los campos');
    return;
  }

  const datos = { nombres: nombre, apellidos: apellido, curso };

  fetch('http://localhost:3000/api/alumnos', {
    method: 'POST',
    body: JSON.stringify(datos),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => res.json())
    .then(data => {
      alert(data.msg || 'Alumno agregado correctamente');
      document.querySelector('#form-alumno').reset();
      // refresca la tabla si estamos viendo el curso de la materia
      const materiaId = document.querySelector('#materia').value;
      if (materiaId) cargarAlumnos(materiaId);
    })
    .catch(err => alert('Error: ' + err.message));
}

cargarCursos();
