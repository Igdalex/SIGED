require('dotenv').config() //Accede a variable de entorno
const { Sequelize } = require('sequelize')

const { MYSQL_DATABASE } = process.env
const { MYSQL_HOST } = process.env
const { MYSQL_USER } = process.env
const { MYSQL_PASSWORD } = process.env

//Instaciar sequelize

const sequelize = new Sequelize(
    MYSQL_DATABASE,
    MYSQL_USER,
    MYSQL_PASSWORD,
    {
        MYSQL_HOST,
        dialect:'mysql'
    }
)

const dbConnectMySql = async() =>{
    try {//intentar
        await sequelize.authenticate()
        console.log('Conexion exitosa')
    } catch (error) { //capturar el error
        console.log('Error en la conexión', error)
    }
}

module.exports = { dbConnectMySql, sequelize }

