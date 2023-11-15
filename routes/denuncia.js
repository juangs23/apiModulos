const {Router} = require('express')

const route = Router()


//Listar todos los datos
const { getDenuncia, postDenuncia, putDenuncia, deleteDenuncia } = require('../controllers/denuncia')

route.get('/', getDenuncia)
route.post('/', postDenuncia)
route.put('/', putDenuncia)
route.delete('/', deleteDenuncia)

//Consultar un dato
route.get('/consultarUsuario', (req, res) => {
    res.json({
        msg: 'Listar Datos'
    })
})

//Metodo para agregar datos
route.post('/', (req, res) => {
    res.json({
        msg: 'Insercion exitosa'
    })
})

//Metodo para editar
route.put('/', (req, res) => {
    res.json({
        msg: 'Edicion exitosa'
    })
})

//Metodo para eliminar
route.delete('/', (req, res) => {
    res.json({
        msg: 'Eliminacion exitosa'
    })
})


module.exports = route 