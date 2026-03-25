
import { Search ,SlidersHorizontal} from "lucide-react"
const SearchBar = () => {
  return (
    <section className="pt-4">
      <div className="grid grid-cols-12">
        {/* Search Button */}
        <div className="col-span-10">
             <div className="relative">
              <input
                className="pl-10 text-black w-full font-bold py-2 border-2 border-gray-200 rounded-lg shadow-lg"
                type="text"
                placeholder="Search..."
                required
              />
              <div
                className="absolute inset-y-0 pl-3
                    flex items-center 
                    pointer-events-none"
              >
                <Search className="" size={20}/>
              </div>
            </div>
        </div>
        {/* Filters icon */}
        <div className="col-span-2">
          <button className="pl-7 pt-1">
            <SlidersHorizontal className=" bg-red-500 text-white rounded-lg" size={35}/>
          </button>
        </div>
      </div>
    </section>
  )
}

export default SearchBar