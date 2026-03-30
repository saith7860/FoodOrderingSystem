import { Link } from "react-router"
import { ShoppingCartIcon } from "lucide-react";
import {ChevronsRight } from 'lucide-react'
const ReviewPayment = () => {
  return (
    <>
    <Link to='/checkout'>
    <div className="grid grid-cols-12 gap-4 p-2 bg-white shadow-lg fixed bottom-0">
     <div className="col-span-2 ">
     <ShoppingCartIcon className=""/>
     </div>
     <div className="col-span-6">
        <div className="flex flex-col">
            <h2 className="font-bold">PKR 1530</h2>
            <p className="font-poppins font-light">Delivery charges and tax not included yet</p>
        </div>
     </div>
     <div className="col-span-2">
      <h2>REVIEW PAYMENT</h2>
     </div>
      <div className="col-span-2 ">
     <ChevronsRight/>
     </div>
    </div>
    </Link>
    </>
  )
}

export default ReviewPayment