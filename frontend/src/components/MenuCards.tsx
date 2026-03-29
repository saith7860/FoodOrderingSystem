import { Plus } from "lucide-react";
import { useNavigate } from "react-router";
// import { useContext } from "react";
// import { CartContext } from "../CartContext";
// import menuCards from "../Data/menuCards";

//type for menucard props
type MenuCardsProps = {
  title: string;
  description: string;
  imgsrc: string;
  price: number;
  id:number
}
const MenuCards = ({ title, description, imgsrc, price,id }: MenuCardsProps) => {
    const navigate=useNavigate();
  //   const context=useContext(CartContext);
  //    if (!context) {
  //   throw new Error("CartContext not found");
  // }

    // console.log(cart,setCart);
// Handle click on add to cart button 
// const handleCartClick=(cardId:number)=>{
// console.log(cardId);
// //find product from array
// const product=menuCards.find(item=>item.id===cardId);
// if (!product) {
//   return
// }
// //find if product already exist in the cart
// const existing=cart.find(item=>item.id==cardId);
// if (existing) {
//   //incrase quantity
//   const updateProduct=cart.map(item=>
//   (
//     item.id==cardId?{...item,quantity:item.quantity+1}:item
//   ))
//   setCart(updateProduct)
// }
//  else {
//     // add new item
//     setCart([...cart,  {
//       id: product.id,
//       title: product.title,
//       price: product.price,
//       imagesrc: product.imagesrc,
//       description: product.description,
//       quantity: 1
//     }])
//   }
// }

  return (
    <div   className="bg-white rounded-2xl shadow-md p-3">
      
      {/* Image */}
      <div onClick={() => navigate(`/product/${id}`)} className="w-full h-32 flex justify-center items-center">
        <img
          src={imgsrc}
          alt={title}
          className="h-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="mt-2">
        <h3 className="font-semibold text-sm">{title}</h3>
        <p className="text-gray-500 text-xs">{description}</p>

        {/* Bottom Row */}
        <div className="flex justify-between items-center mt-2">
          <span className="text-orange-500 font-semibold text-md">
            Rs.{price}
          </span>

          {/* Plus icon */}
          <button onClick={() => navigate(`/product/${id}`)}className="bg-red-400 text-white shadow-lg  rounded-lg">
            <Plus size={22}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCards;