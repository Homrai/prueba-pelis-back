import { Router } from "express";
import { clasificacionPeliController, crearPeliController, editarPeliController, eliminarPeliController, mostrarPeliController } from "../controllers/pelisController.js";

const router = Router();

router.post("/",crearPeliController);
router.get("/",mostrarPeliController);
router.patch("/:id",clasificacionPeliController);
router.put("/:id",editarPeliController);
router.delete("/:id",eliminarPeliController);

export default router;