import { Router } from "express";
import { createCategoryController, listAllCategoriesController, listRetrieveCategoryController } from "../controllers/categories.controller";

const categoriesRouter = Router()

categoriesRouter.post('', createCategoryController);
categoriesRouter.get('', listAllCategoriesController);
categoriesRouter.get('/:id', listRetrieveCategoryController)

export default categoriesRouter