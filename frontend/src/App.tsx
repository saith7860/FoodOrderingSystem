import Home from "./pages/Home"
import ProductPage from "./pages/ProductPage"
import { Routes,Route } from "react-router"
import { CartProvider } from "./CartContext"
const App = () => {
  return (
    <div>
      <CartProvider>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      </CartProvider>
    </div>
  )
}

export default App