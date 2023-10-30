const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

const pathPublic = path.join(__dirname, './public/');

// Levantamos el Servidor //
app.listen(port, ()=> console.log(`Servidor funcionando en el puerto ${port}.`));

// Definimos Rutas y Flujo Request-Response  //
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './views/home.html'))
});

// Dejamos Estaticos a los recursos de la carpeta Public //
app.use(express.static(pathPublic))