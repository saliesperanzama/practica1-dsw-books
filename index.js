const express = require('express');
const morgan = require('morgan');
const booksRouter = require('./routers/books.router');
const usersRouter = require('./routers/users.router');

const compression = require('compression');
require('./utils/mongoConnection');
const app = express();
const port = 3003;

//Para saber las solicitudes entrantes
app.use(morgan('dev'));

//Lo que aparece en la ruta /
app.get("/", (req, res) => {
    res.send("Bienvenido a Libreria API")
});

//Comprimir contenido si se pide
app.use(compression());

//Se permite leer y escribir JSON
app.use(express.json({limit: '50mb'}));

//Asignar el archivo de rutas
app.use('/books', booksRouter);
app.use('/users', usersRouter);

//Iniciar el servidor
app.listen(port, () => {
   console.log("Servidor iniciado en http://localhost:"+port); 
});