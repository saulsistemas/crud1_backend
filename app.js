const express = require('express');
const bodyParser = require('body-parser')//3 CONFIGURAR BODY PARSER;
const app = express(); //INSTANCIA DE MODULO

//CARGAR ARCHIVOS DE RUTA

//MIDELWARES
app.use(bodyParser.urlencoded({extended:false})) //3 PERMITE CONVERTIR TODO CONTENIDO QUE LLEGUE POR CUERTO A JSON
app.use(bodyParser.json());

//CORDS


//RUTA

app.get('/',function(request,response){
    response.status(200).send({
        mensaje:"todo bien"
    })
})
module.exports=app;