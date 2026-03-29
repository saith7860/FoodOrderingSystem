import { CartContext } from "../CartContext";
import { useContext } from "react";
const CartPage = () => {
    const {cart}=useContext(CartContext)!;
    console.log(cart);
    
  return (
    <div>CartPage</div>
  )
}

export default CartPage