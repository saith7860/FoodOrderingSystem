import { useParams,Link } from "react-router";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { CartContext } from "../CartContext";
import { useState } from "react";
import menuCards from "../Data/menuCards";
import toast from "react-hot-toast";
const ProductPage = () => {
  const { id } = useParams();
   const navigate=useNavigate();
  // Convert id to numberss
  const productId = Number(id);
  //  Find product
  const product = menuCards.find(item => item.id === productId);
//set quantity
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <h2>Product not found</h2>;
  }
  const {cart,setCart}=useContext(CartContext)!;
// handleClick funtions
const handleClick=(productId:number)=>{
  console.log(productId);
  setCart(prevCart => {
  const existing = prevCart.find(item => item.id === productId);

  if (existing) {
    return prevCart.map(item =>
      item.id === productId
        ? { ...item, quantity: item.quantity + quantity }
        : item
    );
  } else {
    return [
      ...prevCart,
      {
        id: product.id,
        title: product.title,
        price: product.price,
        imagesrc: product.imagesrc,
        description: product.description,
        quantity: quantity
      }
    ];
  }
});
  // if (existingProduct) {
  //   console.log(existingProduct);
  //   const updatedProduct={...existingProduct,quantity:existingProduct.quantity+quantity};
  //   setCart(updatedProduct);
  // }
  // else{
  // setCart([...cart,{
  //    id: product.id,
  //     title: product.title,
  //     price: product.price,
  //     imagesrc: product.imagesrc,
  //     description: product.description,
  //     quantity: quantity
  // }])
  // }
toast.success("Product added to cart ✅", {
  duration: 1000
});

setTimeout(() => {
  navigate("/");
}, 1000);
}
console.log(cart);
  return (
    <div className="p-4">
      
      {/* Image */}
      <div className="flex justify-center">
        <img src={product.imagesrc} className="h-100  object-contain " />
      </div>

      {/* Title */}
      <h2 className="text-3xl font-semibold mt-4">{product.title}</h2>

      {/* Description */}
      <p className="text-gray-500 text-sm mt-3">
        {product.description}
      </p>

      {/* Quantity Section */}
      <div className="flex justify-between items-center mt-6">
        
        <h3 className="font-medium text-2xl">Quantity</h3>

        <div className="flex items-center gap-3">
          
          <button
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            className="bg-red-500 text-white w-8 h-8 rounded-lg"
          >
            -
          </button>

          <span className="font-semibold">{quantity}</span>

          <button
            onClick={() => setQuantity(quantity + 1)}
            className="bg-red-500 text-white w-8 h-8 rounded-lg"
          >
            +
          </button>

        </div>
      </div>

      {/* Bottom */}
      <div className="flex justify-between mt-8">
        <button className="bg-red-500 text-white px-6 py-3 rounded-xl">
          Rs.{product.price}
        </button>

        <button onClick={()=>handleClick(productId)} className="bg-gray-800 text-white px-10 py-3 rounded-xl">
          ADD TO CART
        </button>
      </div>
      <div className="mt-8 flex justify-center underline text-2xl ">
        <Link to='/'>
        Go To Home Screen
        </Link>
      </div>
    </div>
  );
};

export default ProductPage;