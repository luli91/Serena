//App es el padre de todos los componentes
//App tiene como hijo a ItemListContainer que le pasa una greeting (un texto de saludo)
// import CounterComponent from "./components/CounterComponent"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import Cart from "./components/Cart" 
import CartProvider from "./context/CartContext"




const App = () => {


    return (
        <div>
            <BrowserRouter>
                <CartProvider>
                    <NavBar/>
                    <Routes>
                        <Route path='/' element={<ItemListContainer greeting="New season is coming"/>}/>
                        <Route path="/categoria/:categoriaId" element={<ItemListContainer greeting="New season is coming" />}/>
                        <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
                        <Route path='/cart' element={<Cart />}/>
                    </Routes>
                </CartProvider>
            </BrowserRouter>
        </div>
    )
}

export default App