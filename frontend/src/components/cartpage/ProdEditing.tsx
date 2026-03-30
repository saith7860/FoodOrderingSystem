import { useState } from "react";
import { Trash2  } from "lucide-react";
const ProdEditing = () => {
    const [quantity,setQuantity]=useState(1);
  return (
    <div className="col-span-3"
    >
     <div className="flex flex-col">
      <button className="text-red-400">EDIT</button>
       <div className="flex items-center gap-3">
          
         {quantity>1?(
         <button
            onClick={() => setQuantity(quantity - 1)}
            className="bg-white shadow-lg"
          >
            -
          </button>
         ):(<button
           
            className="g-white shadow-lg"
          >
         <Trash2 size={12}/>
          </button>
          )} 

          <span className="font-semibold">{quantity}</span>

          <button
            onClick={() => setQuantity(quantity + 1)}
            className="bg-white shadow-lg"
          >
            +
          </button>

        </div>
     </div>
    </div>
  )
}

export default ProdEditing