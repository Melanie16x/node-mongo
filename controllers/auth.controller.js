import User from "../models/User.js";
import bcrypt  from 'bcryptjs';
import { generarJWT } from "../helpers/generateJWT.js";
const maxAttempts = 5; 
let attempts = 0;
export const authCtrl ={};

authCtrl.register = async (req,res)=>{
    const {lastname, name, email, pass} = req.body;
    try {
        const userFind = await User.findOne({email:email});
        if (!userFind) {
            const salt = await bcrypt.genSalt(10);
            const passHash = await bcrypt.hash(pass, salt);
            const user = new User ({lastname, name, email, pass: passHash});
        if(!user){
            throw({
                status:400,
                message: 'Error al intentar crear un usuario, por favor verifique los campos!'
            });
        };
        await user.save();
        return res.status(201).json({user, message:'Usuario Registrado con éxito!'});
        }else{
            return res.status(409).json({message: 'El Email ya se encuentra registrado!'});
        }
    } catch (error) {
        console.log(error);
        return res.status(error.status|| 500).json({message:'Error interno del servidor!'})
    };
};

authCtrl.login = async (req,res)=>{
    const {email, pass} = req.body;

    try {
        const user = await User.findOne({email: email});
        if(!user){
            throw(
                {
                    status:401,
                    message:'El usuario y/o contraseña es inválido!'
                }
            );
        };
        const passValid = bcrypt.compareSync(pass, user.pass);
        let userId = user._id;
        let isActive = user.state;
        if(isActive == false){
            return res.status(401).json({message:'El usuario se encuentra bloqueado, comuniquese con el administrador!'})
        }
        if(!passValid){
            attempts++;
            if(attempts >= maxAttempts){
                const bloqUser = await User.updateOne({_id : userId},{$set:{state:false}});
                return res.status(401).json({message:'Usuario Bloqueado!'});
            };
            return res.status(401).json({message:'Usuario o Contraseña incorrectos!'})
        }; 
        const token = await generarJWT(userId);
        // localStorage.setItem('token',token)
        return res.status(200).json({token, message:'Iniciaste correctamente!'})
    } catch (error) {
        console.log(error);
        return res.status(error.status||500).json({message:'error interno del servidor'})
    };
};