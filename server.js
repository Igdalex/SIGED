require('dotenv').config()
const { createServer } = require('node:http')

//Datos del servidor de NODE
const { APP_HOST } = process.env
const { APP_PORT } = process.env

const app = require('./index')

try {//Intertar ejecutar un código
    const server = createServer(app)
    server.listen(APP_PORT, APP_HOST, ()=>{
        console.log(`Estado del servidor http://${APP_HOST}:${APP_PORT}`)
        //console.log(process.env)
        
    })
} catch (error) { //capturar errores
    console.log(error)
}