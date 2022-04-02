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
        Person.find({}).sort('-_id').exec((error,persons)=>{
            if(error) return response.status(500).send({message:'error al devolver datos'});
            if(!persons) return response.status(404).send({message:'no hay personas para mostrar'});
            return response.status(200).send({persons:persons});
        },)
    },
    savePerson:function(request,response){
        var person = new Person();
        var params = request.body; //BODY VIENE DE FORMULARIO 

        person.name = params.name;
        person.age  = params.age;
        person.image = null;
        //METODO GUARDAR
        person.save(function(error,personStored){
            if(error) return response.status(500).send({message:'error al guardar datos'});
            if(!personStored) return response.status(404).send({message:'no se ha podido guardar en el documento'});

            return response.status(200).send({person:personStored});
        });

    },
    getPerson:function(request, response){
        var personId = request.params.id;//PARAMS PORQUE VIENE POR LA URL
        if (personId == null || personId =='') return response.status(404).send({message:'id no existe'}); 
        //METODO findById de ORM MONGOOSE
        Person.findById(personId,function(error,person){
            if (error) return response.status(500).send({message:'error al devolver dato'})
            if(!person) return response.status(404).send({message:'no se ha podido buscar el dodcumento'})
            return response.status(200).send({person:person});
        })
    }
}

module.exports = controller;
