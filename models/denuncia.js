const {Schema, model } = require ('mongoose')  //Crear modelos en mongo

const DenunciaSchema = ({
    tipohurto:{
        type: String,
        inique: true,
        require: [true, 'El tipo de hurto es requerido'] 
    },

    direccion:{
        type:String,
        inique: true,
        require: [true, 'La direccion es requerida']
    },

    fecha:{
        type: String,
        inique: true,
        require: [true, 'La fecha es requerida'] 
    },

    ciudad:{
        type: String,
        inique: true,
        require: [true, 'La ciudad es requerida'] 
    },

    descripcion:{
        type: String,
        inique: true,
        require: [true, 'La descripcion requerido'] 
    }
})

module.exports = model('Denuncia', DenunciaSchema)



