import { createContext,useState,type ReactNode } from "react";
import { useContext } from "react";
import type { JSX } from "react";
interface CartItem{
    id:number
    imagesrc:string
    description:string 
    title:string
    price:number
    quantity:number
}
interface CartContextType {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}
// export const CartContext=createContext({} as CartContextType|undefined|null);
export const CartContext=createContext<CartContextType|null>(null);

export const CartProvider=({children}:{children:ReactNode}):JSX.Element=>{
    const [cart,setCart]=useState<CartItem[]>([]);
    return (
        
        <CartContext.Provider value={{cart,setCart}}>
           {children}
        </CartContext.Provider>
       
    )
}
