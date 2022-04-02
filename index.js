const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://0.0.0.0:27017/bdcrud')
        .then(function(){
            console.log('conectado correctamente');
        })
        .catch(function(error){
            console.log(error);
        })

