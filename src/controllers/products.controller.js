import createProductService from "../services/products/createProduct.service"
import listAllProductsService from "../services/products/listAllProducts.service"

export const createProductController = async (req, res) => {
    const {name, price, category_id} = req.body
    try {
        const newProduct = await createProductService(name, price, category_id)

        return res.status(201).json(newProduct)

    } catch (error) {
        return res.status(400).json(error.message)
    }
}

export const listAllProductsController = async (req, res) => {
    try {
        const products = await listAllProductsService()

        return res.json(products)
        
    } catch (error) {
        return res.status(400).json(error.message)
    }
}