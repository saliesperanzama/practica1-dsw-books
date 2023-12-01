const mongoose = require('mongoose');
// mongodb+srv://root:<password>@cluster0.kdc7n5g.mongodb.net/?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://root:pasale123@cluster0.kdc7n5g.mongodb.net/libreria-db?retryWrites=true&w=majority').then(
    ()=>console.log('Conexion exitosa')).catch(err=>console.error('Error al conectar', err))

module.exports = mongoose;