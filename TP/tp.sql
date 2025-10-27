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

INSERT INTO cursos (anio, division, esp, aula) VALUES 
  (4, 3, 'Computacion', 24),
  (4, 2, 'Computacion', 25),
  (4, 4, 'Computacion', 26),
  (4, 9, 'Automotor', 20);


INSERT INTO materias (horas, profesor, contraturno, nombre, curso) VALUES
  (6, 'Santiago Trini', 0, 'Proyecto Informatico', 1),
  (6, 'Santiago Trini', 0, 'Base de Datos', 1),
  (6, 'Santiago Trini', 0, 'Proyecto Informatico', 2),
  (6, 'Santiago Trini', 0, 'Proyecto Informatico', 3),
  (8, 'Camila De la Puente', 0,'Algoritmos', 1),
  (8, 'Camila De la Puente', 0,'Algoritmos', 2),
  (8, 'Camila De la Puente', 0,'Algoritmos', 3);

INSERT INTO alumnos (nombres, apellidos, dni, curso) VALUES
('Marcos', 'Acuna', 45651792, 1),
('Franco', 'Armani', 45651793, 1),
('Santiago', 'Beltran', 45651794, 1),
('Miguel', 'Borja', 45651795, 1),
('Sebastian', 'Boselli', 45651796, 1),
('Fabricio', 'Bustos', 45651797, 1),
('Milton', 'Casco', 45651798, 1),
('Kevin', 'Castano', 45651799, 1),
('Facundo', 'Colidio', 45651800, 1),
('Giorgio', 'Costantini', 45651801, 1),
('Bautista', 'Dadin', 45651802, 1),
('Paulo', 'Diaz', 45651803, 1),
('Sebastian', 'Driussi', 45651804, 1),
('Nacho', 'Fernandez', 45651805, 1),
('Matias', 'Galarza Fonda', 45651806, 1),
('Giuliano', 'Galoppo', 45651807, 1),
('Federico', 'Gattoni', 45651808, 1),
('Jeremias', 'Ledesma', 45651809, 1),
('Santiago', 'Lencina', 45651810, 1),
('Gonzalo', 'Martinez', 45651811, 1),
('Lucas', 'Martinez Quarta', 45651812, 1),
('Maximiliano', 'Meza', 45651813, 2),
('Gonzalo', 'Montiel', 45651814, 2),
('Enzo', 'Perez', 45651815, 2),
('German', 'Pezzella', 45651816, 2),
('Juan', 'Portillo', 45651817, 2),
('Juan Fernando', 'Quintero', 45651818, 2),
('Lautaro', 'Rivero', 45651819, 2),
('Maximiliano', 'Salas', 45651820, 2),
('Ian', 'Subiabre', 45651821, 2);

