import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const crearUsuario = async (user)=>{
    const buscar = await prisma.usuarios.findFirst({
        where:{
            nombre: user.nombre,
        },
    });
    if (buscar) {
        return
    }
    const post = await prisma.usuarios.create({
        data:{
            nombre: user.nombre,
            password: user.password,
            telefono: user.telefono,
            direccion: user.direccion,
        }
    });
    return post
};

export const buscarUsuarios = async ()=>{
    const post = await prisma.usuarios.findMany();
    return post
};

export const actualizarUsuarios = async (id,user)=>{
    const post = await prisma.usuarios.update({
        where:{
            id: Number(id),
        },
        data:{
            nombre: user.nombre,
            password: user.password,
            telefono: user.telefono,
            direccion: user.direccion,
        }
    });
    return post
};

export const eliminarUsuarios = async (id)=>{
    const post = await prisma.usuarios.delete({
        where:{
            id: id,
        }
    });
    return post
};