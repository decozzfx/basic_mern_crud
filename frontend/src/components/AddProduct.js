import axios from 'axios'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const navigate = useNavigate()

    const saveProduct = async (e) => {
        try {
            e.preventDefault()
            await axios.post('http://localhost:5000/products', {
                title : title,
                price : price
            })
            navigate('/productlist')            
        } catch (error) {
            console.info(error)
        }
    }

    return (
        <div  className='container'>
            <form onSubmit={saveProduct}>
                <div className="field">
                    <label className='label'>Title</label>
                    <input type="text" className='input' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="field">
                    <label className='label'>Price</label>
                    <input type="text" className='input' placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value) } />
                </div>
                <div className="field">
                    <button className='button is-primary is-small'>Save</button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct
