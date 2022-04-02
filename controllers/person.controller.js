//1TRAER EL modelo
const Person = require('../models/person');

var controller = {
    home:function(request,response){
        return response.status(200).send({
            message:"esta es la home"
        })
    },
    getPersons:function(request,response){
        //METODO FIND TRAER TODO LOS ELEMENTOS DE LA ENTIDAD, SE PUEDE PASAR WHERE {age:19}
        //METODO EXEC para ejecutar una funcion de callback
        Person.find({}).sort('id').exec((error,persons)=>{
            if(error) return response.status(500).send({message:'error al devolver datos'});
            if(!persons) return response.status(404).send({message:'no hay personas para mostrar'});
            return response.status(200).send({persons:persons});
        },)
    }
}

module.exports = controller;
