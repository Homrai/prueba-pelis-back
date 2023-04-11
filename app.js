import express from "express";
import usuariosRouter from "./src/routes/usuariosRouter.js";
import pelisRouter from "./src/routes/pelisRouter.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json({}));

const whiteList=[process.env.ORIGIN];
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
app.use(
    cors({
        origin:(origin, callback)=>{
            if (!origin || whiteList.includes(origin)) {
                return callback(null, origin)
            }
            return callback("Protegido por CORS :"+ origin + "No autorizado!")
        },
        credentials:true,
        optionSuccessStatus:200,
    })
);

app.use("/usuarios", usuariosRouter);
app.use("/pelis", pelisRouter);

app.listen(PORT, ()=>{
    console.log("puerto iniciado");
})