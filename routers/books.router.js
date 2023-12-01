//Instancias para utilizar express, router y el controlador
const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books.controller');
const authMiddleware = require('../utils/auth.middleware');



//Obtener todos los libros
router.get('/', booksController.getBooks);

//Obtener libro por ID
router.get('/:bookId', booksController.getBookById);

//Crear nuevo libro con autenticacion authMiddleware.authenticateToken,
router.post('/',  booksController.newBook);

//Actualizar un libro por ID
router.put('/:bookId',  authMiddleware.authenticateToken, booksController.updateBook);

//Borrar libro por ID
router.delete('/:bookId',  authMiddleware.authenticateToken, booksController.deleteBook);

module.exports = router;