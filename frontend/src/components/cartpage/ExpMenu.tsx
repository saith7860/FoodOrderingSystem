import {ChevronRight} from 'lucide-react'
import { Link } from 'react-router'
const ExpMenu = () => {
  return (
   <>
   <Link to='/'>
    <div className="grid grid-cols-12 bg-white shadow-lg p-4 mt-20">
         
        <div className="col-span-11">
          <div className="flex flex-col">
            <h2 className='text-2xl font-bold'>Explore Menu</h2>
            <p>Add more itmes in your cart</p>
          </div>
        </div>
        <div className="col-span-1">
            <div className='flex justify-center'>
                <ChevronRight size={30}/>
            </div>
          
        </div>
       
    </div>
    </Link>
   </>
  )
}

export default ExpMenu