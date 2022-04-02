const mongoose = require('mongoose');
//2 IMPORTANDO CONFIGURACION EXPRESS
const app = require('./app');
const port = 3700;
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://0.0.0.0:27017/bdcrud')
        .then(function(){
            //2 IMPORTANDO CONFIGURACION EXPRESS
            app.listen(port,function(){
                console.log('servidor creado en puerto '+port);
            })
            console.log('conectado correctamente');
        })
        .catch(function(error){
            console.log(error);
        })

