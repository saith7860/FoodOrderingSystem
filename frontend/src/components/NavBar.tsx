import { ShoppingCartIcon } from "lucide-react";
type NavBarProps={
  resturantName:string
}
const NavBar = ({resturantName}:NavBarProps) => {
  return (
    <nav>
      <div className="flex justify-between">
        <div className="flex flex-col">
            <h2 className="text-2xl font-semibold font-serif">{resturantName}</h2>
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


