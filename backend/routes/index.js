import express from 'express'
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from '../controllers/products.js'

const router = express.Router()

// route endpoint
router.get('/', getAllProducts)        // method mengambil data
router.get('/:id', getProductById)     // method mengambil data by id
router.post('/', createProduct)        // method mengepost data baru
router.patch('/:id', updateProduct)    // method memperbarui data lama
router.delete('/:id', deleteProduct)   // method menghapus data

export default router