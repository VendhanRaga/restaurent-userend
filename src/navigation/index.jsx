import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Menu from "../pages/Menu"
import Cart from "../pages/cart"
import PaymentSuccess from "../pages/PaymentSuccess"
import { Header } from '../components/element/Header'
import { useSelector } from 'react-redux'
import { cartProducts } from '../stores/cart/cartslice'


const Navigation = () => {
    const productsInCart = useSelector(cartProducts);

    return (

        <BrowserRouter>
            
            <Header cartCount={productsInCart ? productsInCart.length : 0}/>

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/payment-success" element={<PaymentSuccess />} />
            </Routes>
            {/* <Footer/> */}
        </BrowserRouter>
    )
}

export default Navigation;