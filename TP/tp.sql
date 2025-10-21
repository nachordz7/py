/*
Agregar un insert para alumnos
Acuña Marcos
Armani Franco
Beltrán Santiago
Borja Miguel
Boselli Sebastián
Bustos Fabricio
Casco Milton
Castaño Kevin
Colidio Facundo
Costantini Giorgio
Dadín Bautista
Díaz Paulo
Driussi Sebastián
Fernández Nacho
Galarza Fonda Matías
Galoppo Giuliano
Gattoni Federico
Ledesma Jeremías
Lencina Santiago
Martínez Gonzalo
Martínez Quarta Lucas
Meza Maximiliano
Montiel Gonzalo
Pérez Enzo
Pezzella Germán
Portillo Juan
Quintero Juan Fernando
Rivero Lautaro
Salas Maximiliano
Subiabre Ian
*/


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
