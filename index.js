import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import fs from 'fs';
import { connectDB } from './database/db.js';
import router from './routes/router.js';


const index = express();
//constante con el directorio de los logs
const logDirectory = './logs';
//crear directorio si no existe
if(!fs.existsSync(logDirectory)){
    fs.mkdirSync(logDirectory);
};

const accessLogStream = fs.createWriteStream(`${logDirectory}/acess.log`,{flags:'a'})

index.use(express.json());
index.use(morgan('combined',{stream: accessLogStream}));
index.use(helmet());
index.use(router);


const PORT = process.env.PORT || 3040;

index.listen(PORT, ()=>{
    connectDB();
    console.log(`servidor funcionando en http://localhost:${PORT}`);
})