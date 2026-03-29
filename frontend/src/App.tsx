import Home from "./pages/Home"
import ProductPage from "./pages/ProductPage"
import { Routes,Route } from "react-router"
import { CartProvider } from "./CartContext"
import CartPage from "./pages/CartPage"
const App = () => {
  return (
    <div>
      <CartProvider>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage/>} />
      </Routes>
      </CartProvider>
    </div>
  )
}

export default App