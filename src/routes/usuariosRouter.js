import { Router } from "express";
import { crearUsuarioController, editarUsuarioController, eliminarUsuarioController, mostrarUsuarioController } from "../controllers/usuariosController.js";

const router=Router();

router.post("/",crearUsuarioController);
router.get("/",mostrarUsuarioController);
router.put("/:id",editarUsuarioController);
router.delete("/:id",eliminarUsuarioController);

export default router;