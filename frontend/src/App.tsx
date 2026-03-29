import Home from "./pages/Home"
import ProductPage from "./pages/ProductPage"
import { Routes,Route } from "react-router"
import { CartProvider } from "./CartContext"
import CartPage from "./pages/CartPage";
// toaster for showing different messages
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <div>
      <CartProvider>
        <Toaster/>
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