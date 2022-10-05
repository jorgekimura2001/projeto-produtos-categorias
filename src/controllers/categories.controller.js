import createCategoryService from "../services/categories/createCategory.service"
import deleteCategoryService from "../services/categories/deleteCategory.service"
import listAllCategoriesService from "../services/categories/listAllCategories.service"
import listRetrieveCategoryService from "../services/categories/listRetrieveCategory.service"
import updateCategoryService from "../services/categories/updateCategory.service"

export const createCategoryController = async (req, res) => {
    const {name} = req.body
    try {
        const newCategory = await createCategoryService(name)
        
        return res.status(201).json(newCategory)

    } catch (error) {
        return res.status(400).json({'message': error.message})
    }
}

export const listAllCategoriesController = async (req, res) => {
    try {
        const categories = await listAllCategoriesService()

        return res.json(categories)

    } catch (error) {
        return res.status(400).json({'message': error.message})
    }
}

export const listRetrieveCategoryController = async (req, res) => {

    const {id} = req.params

    try {
        const category = await listRetrieveCategoryService(id)

        return res.json(category)

    } catch (error) {
        return res.status(400).json({'message': error.message})
    }
}

export const updateCategoryController = async (req, res) => {

    const {id} = req.params
    const {name} = req.body

    try {
        const categoryUpdated = await updateCategoryService(name, id)

        return res.json(categoryUpdated)
        
    } catch (error) {
        return res.status(400).json({'message': error.message})
    }
}

export const deleteCategoryController = async (req, res) => {

    const {id} = req.params
    
    try {
        await deleteCategoryService(id)

        return res.status(204).send();

    } catch (error) {
        return res.status(400).json({'message': error.message})
    }
}