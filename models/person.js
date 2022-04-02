const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const PersonSherma = Shema({
    name:String,
    image:String,
    age:Number
})
//ELEGIR ESQUEMA Y ELGIRLO COMO MODELO nombre de la tabla Primera mayucula, luego en singular, el esquema
module.exports = mongoose.model('persons',PersonSherma)