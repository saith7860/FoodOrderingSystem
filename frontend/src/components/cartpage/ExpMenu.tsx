import {ChevronRight} from 'lucide-react'
import { Link } from 'react-router'
const ExpMenu = () => {
  return (
    <div className="grid grid-cols-12 bg-white shadow-lg p-4 mt-20">
        <div className="col-span-11">
          <div className="flex flex-col">
            <h2 className='text-2xl font-bold'>Explore Menu</h2>
            <p>Add more itmes in your cart</p>
          </div>
        </div>
        <div className="col-span-1">
            <div className='flex justify-center'>
                 <Link to='/'> <ChevronRight size={30}/></Link>
            </div>
          
        </div>
    </div>
  )
}

export default ExpMenu