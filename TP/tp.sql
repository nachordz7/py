--Base de datos del tp 
DROP DATABASE IF EXISTS tp;
CREATE DATABASE tp;
USE tp;

CREATE TABLE cursos(
  id INT AUTO_INCREMENT PRIMARY KEY,
  anio INT, 
  division INT, 
  esp ENUM('Automotores', 'Ciclo badico', 'Computacion'), 
  aula INT
);

CREATE TABLE alumnos (
  id INT AUTO_INCREMENT PRIMARY KEY, 
  nombres varchar(255), 
  apellidos varchar(255), 
  dni INT, 
  curso INT, 
  FOREIGN KEY (curso) REFERENCES cursos(id)
);

CREATE TABLE materias (
  id INT AUTO_INCREMENT PRIMARY KEY, 
  horas INT, 
  profesor varchar(255), 
  contraturno boolean, 
  nombre varchar(255), 
  curso INT, 
  FOREIGN KEY (curso) REFERENCES cursos(id)
);

CREATE TABLE registros(
  id INT AUTO_INCREMENT PRIMARY KEY, 
  creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
  tipo ENUM('A', 'P', 'T', 'RA', 'AP' ), 
  alumno INT, 
  materia INT,
  FOREIGN KEY(alumno) REFERENCES alumnos(id), 
  FOREIGN KEY(materia) REFERENCES materias(id)
);
