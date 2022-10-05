import createProductService from "../services/products/createProduct.service"
import deleteProductService from "../services/products/deleteProduct.service"
import listAllProductsService from "../services/products/listAllProducts.service"
import listProductsByCategoryService from "../services/products/listProductsByCategory.service"
import listRetrieveProductService from "../services/products/listRetrieveProduct.service"
import updateProductService from "../services/products/updateProduct.service"

export const createProductController = async (req, res) => {
    const {name, price, category_id} = req.body
    try {
        const newProduct = await createProductService(name, price, category_id)

        return res.status(201).json(newProduct)

    } catch (error) {
        return res.status(400).json({'message': error.message})
    }
}

export const listAllProductsController = async (req, res) => {
    try {
        const products = await listAllProductsService()

        return res.json(products)

    } catch (error) {
        return res.status(400).json({'message': error.message})
    }
}

export const listRetrieveProductController = async (req, res) => {
    const {id} = req.params

    try {
        const product = await listRetrieveProductService(id)

        return res.json(product)
        
    } catch (error) {
        return res.status(400).json({'message': error.message})
    }
}

export const updateProductController = async (req, res) => {

    const {id} = req.params;
    const product = req.body

    try {
        const productUpdated = await updateProductService(id, product)

        return res.json(productUpdated)

    } catch (error) {
        return res.status(400).json({'message': error.message})
    }
}

export const deleteProductController = async (req, res) => {

    const {id} = req.params

    try {

        await deleteProductService(id)
        
        return res.status(204).send();
        
    } catch (error) {
        return res.status(400).json({'message': error.message})
    }
}

export const listProductsByCategoryController = async (req, res) => {

    const {category_id} = req.params

    try {

        const products = await listProductsByCategoryService(category_id)
        
        return res.json(products);
        
    } catch (error) {
        return res.status(400).json({'message': error.message})
    }
}