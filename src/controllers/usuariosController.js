import { actualizarUsuarios, buscarUsuarios, crearUsuario, eliminarUsuarios } from "../database/crudUsuarios.js";

export const crearUsuarioController=async(req,res)=>{
    try {
        const {user}=req.body;
        //console.log(user);
        const respuesta = await crearUsuario(user);
        if (respuesta===undefined) return res.status(400).json({error:"el nombre de usuario ya existe, porfavor cambielo"});
        //console.log(respuesta);
        return res.status(200).json({msj:"se creo con satisfaccion",respuesta});
        
    } catch (error) {
        console.log(error);
        return res.status(400).json({error:"no se pudo crear"});
    }
}

export const mostrarUsuarioController=async(req,res)=>{
    try {
        const respuesta = await buscarUsuarios();
        //console.log(respuesta);
        return res.status(201).json({msj:"se muestra con satisfaccion",datos:respuesta});
    } catch (error) {
        //console.log(error);
        return res.status(400).json({error:"no se pueden cargar datos"});

    }
};

export const editarUsuarioController=async(req,res)=>{
    try {
        const {id} = req.params;
        const {user} =req.body;
        const respuesta = await actualizarUsuarios(Number(id),user)
        //console.log(respuesta);
        return res.status(200).json({msj:"se edito con satisfaccion",datos:respuesta});
    } catch (error) {
        console.log(error);
        return res.status(400).json({error:"no se pudo editar"});

    }
}

export const eliminarUsuarioController=async(req,res)=>{
    try {
        const {id} = req.params;
        const respuesta = await eliminarUsuarios(Number(id));
        //console.log(respuesta); 
        return res.status(200).json({msj:"se elimino con satisfaccion",datos:respuesta});

    } catch (error) {
        //console.log(error);
        return res.status(400).json({error:"no se pudo eliminar"});

    }
}