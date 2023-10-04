import mongoose, { Schema, model } from "mongoose";


const alumnoSchema = new Schema({
    escuela: {
        type: String
    },
    grado:{
        type:String,
        default: ""
    },
    codNivelEducativo:{type:[]},
    nombre:{
        type:String,
        required:true,
    },
    apellido:{
        type:String,
        required:true,
    },
    edad:{
        type:Number,
        required:true,
    },
    dni:{
        type:String,
        required:true,
    },
    fechaNac:{
        type:Date,
        required:true,
    },
    nacionalidad:{
        type:String,
        required:true,
    },
    fechaIngreso:{
        type:Date,
    },domicilio:{
        type:[]
    },
    materia:{
        type:{}
    },
    tutor:{
        type:[],
    },
    cicloLectivo:{
        type:String,
    },
},{
    timestamp:true,
});

const Alumno = model('Alumno',alumnoSchema);
export default Alumno;

