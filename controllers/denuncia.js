const {response} = require('express');
const { model } = require('mongoose');

Denuncia = require('../models/denuncia')

const getDenuncia = async(req, res ) => {
    
    const denuncias = await Denuncia.find(); //Obtener todos los documentos de una coleccion
    res.json({
        msg: denuncias
    })
}

const postDenuncia = async(req, res) => {
    const datos = req.query //Capturar daros de la url-postman
    let mensaje = 'Inserccion exitosa'
    try {
        const denuncia = new Denuncia(datos) // instancia objeto
        await denuncia.save() //guardar en la bd
        console.log(denuncia)  
    } catch (error) {
        mesaje = error
        console.log (error)
    }

    res.json({
        msg: mensaje
    })

}    

const putDenuncia = async (req, res) => {
    const { tipohurto, direccion, fecha, ciudad, descripcion } = req.query // desectructurar el array con los datos
    let mensaje = ''

    try {
        const usuario = await Denuncia.findOneAndUpdate({tipohurto: tipohurto}, // Busqueda
        {tipohurto: tipohurto, direccion:direccion, fecha:fecha, ciudad:ciudad, descripcion: descripcion }) // Campos a editar
        mensaje = 'actualizacion exitosa'

    } catch (error) {
        mensaje = error
    }

    res.json({
        msg: mensaje

    })
}

const deleteDenuncia = async (req, res) => {
    const { tipohurto } = req.query // desectructurar el array con los datos
    let mensaje = ''

    try {
        const denuncia = await Denuncia.findOneAndDelete({tipohurto:tipohurto}) // Busqueda
        mensaje = 'eliminacion exitosa'

    } catch (error) {
        mensaje = error
    }

    res.json({
        msg: mensaje

    })
}


module.exports = {
    getDenuncia,
    postDenuncia,
    putDenuncia,
    deleteDenuncia
}
