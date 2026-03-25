import { Plus } from "lucide-react";
type MenuCardsProps = {
  title: string;
  description: string;
  imgsrc: string;
  price: number;
};

const MenuCards = ({ title, description, imgsrc, price }: MenuCardsProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-3">
      
      {/* Image */}
      <div className="w-full h-32 flex justify-center items-center">
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

          {/* Heart icon */}
          <button className="bg-red-400 text-white shadow-lg  rounded-lg">
            <Plus size={22}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCards;