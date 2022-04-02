const express = require('express');
const app = express(); //INSTANCIA DE MODULO
//VALIDAR QUE EXPREES FUNCIONA
//const port = 3700;
//app.listen(port,function(){
//    console.log('servidor creado correctamente ' +port);
//})
//
app.get('/',function(request,response){
    response.status(200).send({
        mensaje:"todo bien"
    })
})
module.exports=app;