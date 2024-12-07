const { pool } = require('../config/mysql')

const listarDependencias = async (req, res) =>{
    try {
        const [result] = await pool.query('SELECT * FROM view_dependencias;')
        console.table(result)
        return res.status(200).json({
            status: "Success",
            mensaje: "Listado de dependencias",
            dependencias: result
        })

    } catch (error) {
        console.error('Error en ejecutar la consulta', error)
    }
}

const saveItem = async (req, res) => {
    try {
        const {name, state} = req.body
        //Validar los campos
        if(!name || !state){
            return res.status(400).json({
                status: 'Error',
                mensaje: 'Falta el nombre o el estado'
            })
        }

        const result = await pool.query('CALL sp_registrarDependencia(?,?)', [name, state])
        console.log(result)
        return res.status(201).json({
            status: 'Success',
            mensaje: 'Dependencia creada con éxito'
        })
    } catch (e) {
        console.error('Error al crear la dependencia: ', e)
    }
}

const updateItem = async (req, res) =>{
    try {
        const {name, id} = req.body
       console.log(name, id)
        const result = await pool.query('CALL sp_actualizarDependencia(?,?)', [id, name])
        
        if(result[0].affectedRows === 0){ //si en caso que el registro no existe
            return res.status(400).json({
                status: 'Error',
                mensaje: "No existe el registro"
            })
        }

        return res.status(201).json({
            status: "success",
            mensaje: "Registro actualizado con éxito"
        })


    } catch (error) {
        console.error('Error al actualizar el registro', error)

    }
}

/* Eliminado fisico */
const deleteItem = async (req, res) => { 
    try {
        const { id } = req.body
        console.log(id)
    } catch (error) {
        console.error('Error al eliminar el registro', error)
    }
}

module.exports = { listarDependencias, saveItem, updateItem, deleteItem }