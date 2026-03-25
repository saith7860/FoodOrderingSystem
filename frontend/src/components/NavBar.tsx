import { ShoppingCartIcon } from "lucide-react";
const NavBar = () => {
  return (
    <nav>
      <div className="flex justify-between">
        <div className="flex flex-col">
            <h2 className="text-2xl font-semibold font-serif">Dhaka Biryani</h2>
            <h6 className="text-gray-500 font-[poppins]">Order Your Favourite Food</h6>
        </div>
        <div>
           <ShoppingCartIcon size={35}/>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
// width: 129;
// height: 61;
// angle: 0 deg;
// opacity: 1;
// top: 28px;
// left: 19px;
// font-family: Lobster;
// font-weight: 400;
// font-style: Regular;
// font-size: 45px;
// leading-trim: NONE;
// line-height: 135%;
// letter-spacing: 0%;
