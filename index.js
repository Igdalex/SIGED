const express = require('express')
const cors = require('cors')
const app = express()
const { dbConnectMySql } = require('./config/old')

//dbConnectMySql()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const ruta_dependencia = require("./routes/ruta_dependencia")

app.use('/api', ruta_dependencia)

module.exports = app 
//exports: permite que el recurso pueda
//ser utilizado desde otro módulo
