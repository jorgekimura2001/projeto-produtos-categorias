import createCategoryService from "../services/categories/createCategory.service"
import listAllCategoriesService from "../services/categories/listAllCategories.service"

export const createCategoryController = async (req, res) => {
    const {name} = req.body
    try {
        const newCategory = await createCategoryService(name)
        
        return res.status(201).json(newCategory)

    } catch (error) {
        return res.status(400).json(error.message)
    }
}

export const listAllCategoriesController = async (req, res) => {
    try {
        const categories = await listAllCategoriesService()

        return res.json(categories)

    } catch (error) {
        return res.status(400).json(error.message)
    }
}