import MenuBar from "../components/MenuBar"
import MenuCards from "../components/MenuCards"
import NavBar from "../components/NavBar"
import SearchBar from "../components/SearchBar"
import menuItems from "../Data/menubarItems"
import menuCards from "../Data/menuCards"

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
   <div className="grid grid-cols-2 gap-4 p-3 pt-4">
  {menuCards.map((item) => (
    <MenuCards
      key={item.id}
      id={item.id}
      title={item.title}
      description={item.Description}
      imgsrc={item.imageSrc}
      price={item.price}
    />
  ))}
</div>
    </div>
  )
}

export default Home