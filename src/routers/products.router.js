import { Router } from "express";
import { createProductController, deleteProductController, listAllProductsController, listProductsByCategoryController, listRetrieveProductController, updateProductController } from "../controllers/products.controller";

const productsRouter = Router()

productsRouter.post('', createProductController);
productsRouter.get('', listAllProductsController);
productsRouter.get('/:id', listRetrieveProductController);
productsRouter.patch('/:id', updateProductController);
productsRouter.delete('/:id', deleteProductController);
productsRouter.get('/category/:category_id', listProductsByCategoryController)

export default productsRouter