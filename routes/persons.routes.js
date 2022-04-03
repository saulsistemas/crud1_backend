const express = require('express');
//IMPORTAR CONTROLOADOR
const PersonController = require('../controllers/person.controller');
//SERVICIO DE LA RUTA PARA ACCEDER
const router = express.Router();

// ACEDEMOS AL controlador y el atributo name que contiene una funcion
router.get('/home',PersonController.home);
router.get('/listar',PersonController.getPersons);
router.post('/guardar',PersonController.savePerson);
router.get('/buscar/:id?',PersonController.getPerson);
router.put('/actualizar/:id',PersonController.updatePerson);
router.delete('/eliminar/:id',PersonController.deletePerson);

module.exports = router;
