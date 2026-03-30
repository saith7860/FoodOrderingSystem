import { CartContext } from "../CartContext";
import { useContext } from "react";


import Image from "../components/cartpage/Image";
import ProductDes from "../components/cartpage/ProductDes";
import ProdEditing from "../components/cartpage/ProdEditing";
import { Link } from "react-router";
import ExpMenu from "../components/cartpage/ExpMenu";
import ReviewPayment from "../components/cartpage/ReviewPayment";
const CartPage = () => {
    const {cart}=useContext(CartContext)!;
    // cart empty condition
    if (cart.length==0) {
  return(  <>
    <p className="text-center text-3xl mt-10">Your cart is empty!</p>
    <Link  className="mt-10 flex justify-center text-red-400" to="/">Go To Menu Page</Link>
    </>  
  )
}
  return (
    <>
    {/* CART ITEMS */}
     <div className="space-y-4 mt-4">
   {cart.map((product)=>(

   <div className="grid grid-cols-12 pt-4 bg-white shadow-lg pb-3 " key={product.id}>
    {/* IMAGE COMPONENT */}
    <Image title={product.title} imagesrc={product.imagesrc}/>
    {/* PRODUCT DESCIRPTION */}
    <ProductDes title={product.title} price={product.price} quantity={product.quantity}/>
    {/* Product EDIT DELETE INCRASE QUANTITY */}
    <ProdEditing/>
    </div>
 ))}
    
   </div>
   {/* EXPLORE MENU */}
<ExpMenu/>
{/* REVIEW PAYEMENT */}
<ReviewPayment/>
</>
 
  )
}


export default CartPage;
