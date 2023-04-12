import { actualizarPelis, buscarPelis, crearPeli, eliminarPelis, puntajePelis } from "../database/crudPelis.js";

export const crearPeliController=async(req,res)=>{

    try {
        const {peli}=req.body;
        const respuesta = await crearPeli(peli);
        if (respuesta===undefined) return res.status(400).json({error:"el titulo de la pelicula ya existe, porfavor cambielo"});
        //console.log(respuesta);
        return res.status(200).json({msj:"se creo con satisfaccion",respuesta});
        
    } catch (error) {
        //console.log(error);
        return res.status(400).json({error:"no se pudo crear"});
    }
}

export const mostrarPeliController=async(req,res)=>{
    try {
        const respuesta = await buscarPelis()
        console.log(respuesta);
        return res.status(201).json({msj:"se muestra con satisfaccion",datos:respuesta});
    } catch (error) {
        console.log(error);
        return res.status(400).json({error:"no se pueden cargar datos"});

    }
};

export const editarPeliController=async(req,res)=>{
    try {
        const {id} = req.params;
        const {peli} =req.body;
        const respuesta = await actualizarPelis(Number(id),peli)
        //console.log(respuesta);
        return res.status(200).json({msj:"se edito con satisfaccion",datos:respuesta});
    } catch (error) {
        //console.log(error);
        return res.status(400).json({error:"no se pudo editar"});

    }
}

export const clasificacionPeliController=async(req,res)=>{
    try {
        const {valor} = req.body;
        const {id} = req.params;
        const respuesta = await puntajePelis(Number(id),valor)
        //console.log(respuesta);
        return res.status(200).json({msj:"se califico con satisfaccion",datos:respuesta});
    } catch (error) {
        //console.log(error);
        return res.status(400).json({error:"no se pudo clasificar"});
    }
}


export const eliminarPeliController=async(req,res)=>{
    try {
        const {id} = req.params;
        const respuesta = await eliminarPelis(Number(id))
        //console.log(respuesta); 
        return res.status(200).json({msj:"se elimino con satisfaccion",datos:respuesta});

    } catch (error) {
        //console.log(error);
        return res.status(400).json({error:"no se pudo eliminar"});

    }
}