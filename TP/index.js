/*
1. Descargar e instalar NodeJS.
2. Abrir cmd y ejecutar node -v y npm -v para verificar que se haya instalado correctamente 
3. Crear una carpeta para el py
mkdir api-mysql
cd api.mysql

4. Iniciar el py
npm init -y                    //Crea un archivo package.json con la configuración del proyecto
npm install express mysql cors

5.Crear archivo del servidor
notepad index.js

6. Navegar hasta donde guardaste el archivo index.js y ejecutar lo mismo
npm init -y 
npm install express mysql cors

7. Verificar en el Xampp que este funcando la bd creada y despues ejecutar estando en la carpeta del index.js
node index.js
Si todo esta bien hecho debe aparecer esto.
Base de datos conectada
Server running at http://localhost:3000
*/

const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',       
    password: '',       
    database: 'tp'
});

conn.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Base de datos conectada');
});

app.post('/api/asistencias', (req, res) => {
    const { tipo, alumno, materia } = req.body;
    const data = [tipo, alumno, materia];
    const q = 'INSERT INTO registros (tipo, alumno, materia) VALUES (?, ?, ?)';
    conn.query(q, data, (err, rs) => {
        if (err) {
            console.error('Error al insertar:', err);
            return res.status(500).json({ error: 'Error al insertar' });
        }
        res.status(201).json({ msg: 'Alta OK' });
    });
});
  
app.listen(3000, () => console.log('Server running at http://localhost:3000'));'));

app.listen(3000, () => console.log('server online en localhost'));
