import { createContext,useState,type ReactNode } from "react";
import type { JSX } from "react";
interface CartItem{
    id:number
    imageSrc:string
    Description:string 
    title:string
    price:number
}
interface CartContextType {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}
export const CartContext=createContext<CartContextType|null>(null);
export const CartProvider=({children}:{children:ReactNode}):JSX.Element=>{
    const [cart,setCart]=useState<CartItem[]>([]);
    return (
        <>
        <CartContext.Provider value={{cart,setCart}}>
           {children}
        </CartContext.Provider>
        </>
    )
}
