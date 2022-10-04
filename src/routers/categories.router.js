import { Router } from "express";
import { createCategoryController, listAllCategoriesController } from "../controllers/categories.controller";

const categoriesRouter = Router()

categoriesRouter.post('', createCategoryController);
categoriesRouter.get('', listAllCategoriesController)

export default categoriesRouter