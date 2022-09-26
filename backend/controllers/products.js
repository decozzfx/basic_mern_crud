import Products from "../models/productModel.js"

export const getAllProducts = async (req, res) => {
    try {                                           // try catch -> untuk menghandle error
        const products = await Products.findAll()
        res.json(products)        
    } catch (error) {
        res.json({ msg : error.message })
    }
}

export const getProductById = async (req, res) => {
    try {
        const product = await Products.findAll({
            where : {
                id : req.params.id
            }
        })
        res.json(product[0])  // [0] karena hanya memanggil 1/single product
    } catch (error) {
        
    }
}

export const createProduct = async (req, res) => {
    try {
        await Products.create(req.body)
        res.json({
            'message' : 'Product created'
        })
    } catch (error) {
        res.json({ msg : error.message })
    }
}

export const updateProduct = async (req, res) => {
    try {
        await Products.update(req.body , {
            where : {
                id : req.params.id
            }
        })
        res.json({
            'message' : 'product updated'
        })
    } catch (error) {
        res.json({ message : error.message })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        await Products.destroy({
            where : {
                id : req.params.id
            }
        })
        res.json({ 'message' : 'Product deleted'})
    } catch (error) {
        res.json({ message : error.message})
    }
}