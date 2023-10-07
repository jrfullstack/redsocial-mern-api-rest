const express = require("express");
const router = express.Router();
const publicationContoller = require("../controllers/publication");
const check = require("../middlewares/auth");


// Definir las rutar
router.get("/prueba-publication", publicationContoller.pruebaPublication);
router.post("/save", check.auth, publicationContoller.save);
router.get("/detail/:id", check.auth, publicationContoller.detail);
router.delete("/remove/:id", check.auth, publicationContoller.remove);
router.get("/user/:id/:page?", check.auth, publicationContoller.user);


// Exportar router
module.exports = router;
