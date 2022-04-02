//1TRAER EL modelo
const Person = require('../models/person');

var controller = {
    home:function(request,response){
        return response.status(200).send({
            message:"esta es la home"
        })
    }
}

module.exports = controller;
