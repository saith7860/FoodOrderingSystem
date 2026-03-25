import MenuBar from "../components/MenuBar"
import NavBar from "../components/NavBar"
import SearchBar from "../components/SearchBar"
import menuItems from "../Data/menubarItems"
const Home = () => {
  return (
    <div className="pt-6 p-3">
    <NavBar resturantName="Dhaka Biryani"/>
    <SearchBar/>
    <div className="flex pt-6 gap-3 overflow-x-auto whitespace-nowrap">
  {menuItems.map((item, index) => (
    <MenuBar key={index} label={item} />
  ))}
   </div>
    </div>
  )
}

export default Home