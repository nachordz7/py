function handleClick(event){
  let datos = {
    tipo: "P", //event.target.textContent
    alumno: 2, 
    materia: 1
  };

  const options = {
    method: 'POST', 
    body: JSON.stringify(datos), 
    headers: { 'Content-Type': 'application/json' }
  };

  const url = 'http://localhost:3000/api/asistencias';

  fetch(url, options)
    .then(res => res.json()) 
    .then(data => alert(JSON.stringify(data))) 
    .catch(err => alert(err.stack));
}
