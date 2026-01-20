import express from "express";
import { index, show, store, update, modify, destroy } from "../controllers/postController.js";
import verificaOrarioApertura from "../middlewares/verificaOrarioApertura.js"


const router = express.Router();


// INDEX
router.get("/", index);

// SHOW
router.get("/:id", show);

// STORE
router.post("/", store);

// UPDATE
router.put("/:id", update);

// MODIFY
router.patch("/:id", modify);

// DESTROY
router.delete("/:id", destroy);

export default router;