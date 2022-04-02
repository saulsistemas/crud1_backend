const express = require('express');
const bodyParser = require('body-parser')//3 CONFIGURAR BODY PARSER;
const app = express(); //INSTANCIA DE MODULO

//CARGAR ARCHIVOS DE RUTA

//MIDELWARES
app.use(bodyParser.urlencoded({extended:false})) //3 PERMITE CONVERTIR TODO CONTENIDO QUE LLEGUE POR CUERTO A JSON
app.use(bodyParser.json());

//CORDS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//RUTA

app.get('/',function(request,response){
    response.status(200).send({
        mensaje:"todo bien"
    })
})
module.exports=app;