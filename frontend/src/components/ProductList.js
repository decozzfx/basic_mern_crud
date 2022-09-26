import {useState, useEffect} from 'react'
import axios from 'axios'   // untuk berinteraksi dengan api luar server
import { Link } from 'react-router-dom'

const ProductList = () => {
    const [products , setProduct] = useState([]) // empty array karena data berbentuk json

    useEffect(() => {   // pembaharuan data setiap refresh/reload page
        getProducts()
    }, [])

    const getProducts = async () => { // method fetching data
        const response = await axios.get('http://localhost:5000/products')
        setProduct(response?.data)
    }

    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:5000/products/${id}`)
        getProducts()
    }

    return (
        <div>
            <Link to='/add' className='button is-primary mt-2'>Add New</Link>
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { products.map((product, index) => (
                        <tr key={ product.id }>
                            <th>{ index +1 }</th>
                            <th>{ product.title }</th>
                            <th>{ product.price }</th>
                            <th>
                                <Link to={`/edit/${product.id}`} className="button is-small is-info">Edit</Link>
                                <button onClick={ () => deleteProduct(product.id)} className="button is-small is-danger">Hapus</button>
                            </th>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductList
