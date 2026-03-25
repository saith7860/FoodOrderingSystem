import MenuBar from "../components/MenuBar"
import NavBar from "../components/NavBar"
import SearchBar from "../components/SearchBar"
const Home = () => {
  return (
    <div className="pt-6 p-3">
    <NavBar resturantName="Dhaka Biryani"/>
    <SearchBar/>
    <MenuBar/>
    </div>
  )
}

export default Home