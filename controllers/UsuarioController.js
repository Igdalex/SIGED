const { pool } = require('../config/mysql')

const getUsers = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM view_usuarios_gestor;')
        console.table(result)

        return res.status(200).json({
            status : "success",
            mensaje: "Listado de usuarios",
            usuarios: result
        })
    } catch (error) {
        console.error('Error la ejecutar la consulta', error)
    }
}

const saveUser = async (req, res) => {
    try {
       const { type_document, document, last_name, name, pass, date, adress, genero} = req.body
       //console.log(type_document, document, last_name, name, pass, date, adress, genero)
       const result = await pool.query('CALL spRegistrarUsuario(?,?,?,?,?,?,?,?)',[type_document, document, last_name, name, pass, date, adress, genero]) 
       
       //console.log(result)

        return res.status(201).json({
            status : 'Success',
            mensagge: 'Usuario registrado con éxito'
       })
    } catch (error) {
        console.error('Error la ejecutar la consulta', error)
    }
}

const updateUser = async (req, res) => {
    try {
        const { id, type_document, document, last_name, name, pass, date, adress, gender } = req.body
        console.log(id, type_document, document, last_name, name, pass, date, adress, gender)
        const result = await pool.query('CALL spActualizarUsuario(?,?,?,?,?,?,?,?,?)',[id, type_document, document, last_name, name, pass, date, adress, gender])
        
        if( result[0].affectedRows === 0){ //En caso que no exista el ID
            return res.status(400).json(
                {
                    status: 'error',
                    mensaje: 'No existe el registro'
                }
            )
        }

        return res.status(201).json({
            status : 'Success',
            mensagge: 'Los dato del usuario fueron actualizado con éxito'
       })

    } catch (error) {
        console.error('Error la ejecutar la consulta', error)
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.body
        console.log(id)
        const result = await pool.query('CALL spEliminarUsuario(?)', [id])
        
        if(result[0].affectedRows === 0){
            return res.status(404).json({
                status: "Error",
                mensaje: "No existe el registro"
            })
        }

        return res.status(204).json({
            status: "success",
            mensaje: "Registro eliminado"
        })

    } catch (error) {
        console.error('Error la ejecutar la consulta', error)
    }
}

module.exports = { saveUser, getUsers, updateUser, deleteUser }