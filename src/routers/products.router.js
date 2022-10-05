import { Router } from "express";
import { createProductController, listAllProductsController, listProductsByCategoryController, listRetrieveProductController, updateProductController } from "../controllers/products.controller";
import deleteProductService from "../services/products/deleteProduct.service";

const productsRouter = Router()

productsRouter.post('', createProductController);
productsRouter.get('', listAllProductsController);
productsRouter.get('/:id', listRetrieveProductController);
productsRouter.patch('/:id', updateProductController);
productsRouter.delete('/:id', deleteProductService);
productsRouter.get('/category/:category_id', listProductsByCategoryController)

export default productsRouter