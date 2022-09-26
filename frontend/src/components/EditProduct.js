import axios from 'axios'
import {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditProduct = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const { id } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        getProductById()
        // eslint-disable-next-line 
    }, [])

    const updateProduct = async (e) => {
        try {
            e.preventDefault()
            await axios.patch(`http://localhost:5000/products/${id}`, {
                title : title,
                price : price
            })
            navigate('/productlist')            
        } catch (error) {
            console.info(error)
        }
    }

    const getProductById = async () => {
        const response = await axios.get(`http://localhost:5000/products/${id}`)
        setTitle(response.data.title)
        setPrice(response.data.price)
    }

    return (
        <div  className='container'>
            <form onSubmit={updateProduct}>
                <div className="field">
                    <label className='label'>Title</label>
                    <input type="text" className='input' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="field">
                    <label className='label'>Price</label>
                    <input type="text" className='input' placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div className="field">
                    <button className='button is-primary is-small'>Update</button>
                </div>
            </form>
        </div>
    )
}

export default EditProduct
