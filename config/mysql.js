require('dotenv').config()
const mysql = require('mysql2/promise')

const { MYSQL_DATABASE } = process.env
const { MYSQL_HOST } = process.env
const { MYSQL_USER } = process.env
const { MYSQL_PASSWORD } = process.env
const { MYSQL_PORT } = process.env

const pool = mysql.createPool({
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    database: MYSQL_DATABASE,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
})

module.exports = { pool }
