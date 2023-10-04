import Alumno from "../models/Alumno.js";
import { crearAlumno } from "../prueba.js";

export const alumnoCtrl = {};


 alumnoCtrl.crear = async (req,res) =>{

    try {
        for(let i = 0; i<100;i++){
            let alumno = crearAlumno();
            console.log(alumno);
            const alumnoNuevo = new Alumno (alumno)
            if(!alumnoNuevo){
                throw({
                    status:400,
                    message:'Error al generar los alumnos!'
                })
            }
            await alumnoNuevo.save();
        };
        const alumnosCreados = await Alumno.find();
        return res.status(201).json(alumnosCreados) ;
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({message:'error interno del servidor!'})
    }

};


