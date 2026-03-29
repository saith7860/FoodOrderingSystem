import { ShoppingCartIcon } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import { Link } from "react-router";
type NavBarProps = {
  resturantName: string;
};
const NavBar = ({ resturantName }: NavBarProps) => {
  const { cart } = useContext(CartContext)!;
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  // console.log(cart.length);

  return (
    <nav>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold font-serif">{resturantName}</h2>
          <h6 className="text-gray-500 font-[poppins]">
            Order Your Favourite Food
          </h6>
        </div>
        <Link to='/cart'>
        <div className="relative">
          {/* Cart Icon */}
          <ShoppingCartIcon
            size={35}
            className={`${totalItems > 0 ? "text-red-500" : "text-black"}`}
          />

          {/* Badge */}
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full animate-bounce">
              {totalItems}
            </span>
          )}
        </div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
