const Book = require('../models/book.model');

exports.getBooks =async(req,res)=>{
    try {
        const books= await Book.find();
        return res.status(200).json(
            {
                message: "Consulta de libros",
                data:books
            }

        );
        
    } catch (error) {
        return res.status(500).json(
            {
                message:"Error al conultar libros",
                data:error
            }
        );
    }
}
exports.getBookById =async(req,res)=>{
    const bookId=req.params.bookId;
    try {
        const book=await Book.findById(bookId);

        return res.status(200).json(
            {
                message:"Consultando libro por ID: "+bookId,
                data:book
            }
        );
        
    } catch (error) {
        return res.status(500).json(
            {
                message:"Error al conultar libro",
                data:error
            }
        );
        }    
}

exports.newBook =async(req,res)=>{
    try {
        const{titulo,autor,isbn,genero,precio,stock}=req.body;

        const newBook =new Book({titulo,autor,isbn,genero,precio,stock});

        await newBook.save();
        return res.status(200).json(
            {
                message:"Libro creado",
                data:newBook
            }
        );
        
    } catch (error) {
        return res.status(500).json(
            {
                message:"Error al crear libro",
                data:error
            }
        );  
    }
}

exports.updateBook =async(req,res)=>{
    const bookId=req.params.bookId;
    const newData=req.body;

    try {
        const updateBook=await Book.findByIdAndUpdate(bookId,newData,{new:true});


        return res.status(201).json(
            {
                message:"Actualizar libro por Id",
                data:updateBook
            }    
        );
        
    } catch (error) {
        return res.status(500).json(
            {
                message:"Error al actualizar libro",
                data:error
            }
        );      
    }
}

exports.deleteBook =async(req,res)=>{
    const bookId=req.params.bookId;
    try {
        await Book.findByIdAndRemove(bookId);
        return res.status(200).json(
            {
                message:"Libro eliminado"
            }
        );
        
    } catch (error) {
        return res.status(500).json(
            {
                message:"Error al eliminar libro",
                data:error
            }
        );  
    }
}