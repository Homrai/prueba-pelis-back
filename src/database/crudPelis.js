import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const crearPeli = async (peli)=>{
    const buscar = await prisma.peliculas.findFirst({
        where:{
            titulo: peli.titulo,
        },
    });
    //console.log(peli.titulo);
    if (buscar) {
        return
    }
    const post = await prisma.peliculas.create({
        data:{
            titulo: peli.titulo,
            detalles: peli.detalles,
            calificacion: [],
        }
    });
    return post
};

export const buscarPelis = async ()=>{
    const post = await prisma.peliculas.findMany();
    return post
};

export const puntajePelis = async (id,num)=>{
    const post = await prisma.peliculas.update({
        where:{
            id: id,
        },
        data:{
            calificacion: {
                push: num,
            }
        }
    });
    return post
};

export const actualizarPelis = async (id,peli)=>{
    const post = await prisma.peliculas.update({
        where:{
            id: id,
        },
        data:{
            titulo: peli.titulo,
            detalles: peli.detalles,
            calificacion: peli.calificacion,
        }
    });
    return post
};

export const eliminarPelis = async (id)=>{
    const post = await prisma.peliculas.delete({
        where:{
            id: id,
        }
    });
    return post
};