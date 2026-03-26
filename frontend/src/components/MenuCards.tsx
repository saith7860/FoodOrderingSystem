import { Plus } from "lucide-react";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import menuCards from "../Data/menuCards";
//type for menucard props
type MenuCardsProps = {
  title: string;
  description: string;
  imgsrc: string;
  price: number;
  id:number
  quantity:number
}
const { cart, setCart } = useContext(CartContext)
const handleCartClick=(cardId:number)=>{
console.log(cardId);
//find product from array
const product=menuCards.find(item=>item.id===cardId);
//find if product already exist in the cart
const existing=cart.find((item:MenuCardsProps)=>item.id==cardId);
if (existing) {
  //incrase quantity
  const updateProduct=cart.map((item:MenuCardsProps)=>
  (
    item.id==cardId?{...item,quantity:item.quantity+1}:item
  ))
  setCart(updateProduct)
}
 else {
    // add new item
    setCart([...cart, { ...product, quantity: 1 }])
  }
}
const MenuCards = ({ title, description, imgsrc, price,id }: MenuCardsProps) => {
    const navigate=useNavigate();
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
          <button onClick={()=>handleCartClick(id)} className="bg-red-400 text-white shadow-lg  rounded-lg">
            <Plus size={22}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCards;