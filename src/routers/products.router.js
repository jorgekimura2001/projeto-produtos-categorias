import { Router } from "express";
import { createProductController, listAllProductsController, listRetrieveProductController, updateProductController } from "../controllers/products.controller";

const productsRouter = Router()

productsRouter.post('', createProductController);
productsRouter.get('', listAllProductsController);
productsRouter.get('/:id', listRetrieveProductController);
productsRouter.patch('/:id', updateProductController);


export default productsRouter