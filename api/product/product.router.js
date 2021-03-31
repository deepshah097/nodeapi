const productController = require("./product.controller");

const router = require("express").Router();

router.post("/add", productController.create);

router.get("/", productController.list);

router.delete("/remove/:id", productController.delete);


module.exports = router;
