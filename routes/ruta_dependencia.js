const express = require("express");
const router = express.Router();

const { listarDependencias, saveItem, updateItem, deleteItem } = require("../controllers/DependenciaController")
const { saveUser, getUsers, updateUser, deleteUser } = require('../controllers/UsuarioController')

router.get('/dependencias', listarDependencias)

router.post('/dependencia', saveItem)

router.put('/dependencia', updateItem)

router.delete('/dependencia', deleteItem)

router.post('/usuario', saveUser)

router.get('/usuarios', getUsers)

router.put('/usuario', updateUser)

router.delete('/usuario', deleteUser)

module.exports = router