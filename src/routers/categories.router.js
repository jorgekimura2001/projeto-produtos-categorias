import { Router } from "express";
import { createCategoryController, deleteCategoryController, listAllCategoriesController, listRetrieveCategoryController, updateCategoryController } from "../controllers/categories.controller";

const categoriesRouter = Router()

categoriesRouter.post('', createCategoryController);
categoriesRouter.get('', listAllCategoriesController);
categoriesRouter.get('/:id', listRetrieveCategoryController);
categoriesRouter.patch('/:id', updateCategoryController);
categoriesRouter.delete('/:id', deleteCategoryController)

export default categoriesRouter