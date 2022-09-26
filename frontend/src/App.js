import ProductList from "./components/ProductList";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import Login from "./components/Login";

function App() {
  return (
          <BrowserRouter>
            <div className='container'>
              <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                    <Routes>
                      <Route exact path='/' element={<Login/>} />
                      <Route exact path='/productlist' element={<ProductList/>} />
                      <Route path='/add' element={<AddProduct/>} />
                      <Route path='/edit/:id' element={<EditProduct/>} />
                    </Routes>
              </div>
              </div>
            </div>
          </BrowserRouter>
  );
}

export default App;
