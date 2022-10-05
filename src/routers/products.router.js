import { Router } from "express";
import { createProductController, listAllProductsController } from "../controllers/products.controller";

const productsRouter = Router()

productsRouter.post('', createProductController)
productsRouter.get('', listAllProductsController)

export default productsRouter