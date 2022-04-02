const express = require('express');
//IMPORTAR CONTROLOADOR
const PersonController = require('../controllers/person.controller');
//SERVICIO DE LA RUTA PARA ACCEDER
const router = express.Router();

// ACEDEMOS AL controlador y el atributo name que contiene una funcion
router.get('/home',PersonController.home);

module.exports = router;
