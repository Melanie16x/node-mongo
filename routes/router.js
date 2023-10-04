import express from 'express';
import {authCtrl} from '../controllers/auth.controller.js';
import {alumnoCtrl} from '../controllers/alumno.controller.js'
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Todo bien por aquí');
}); 

router.post('/api/register',authCtrl.register);
router.post('/api/login', authCtrl.login);
router.get('/api/crear/Alumnos',alumnoCtrl.crear);

export default router;