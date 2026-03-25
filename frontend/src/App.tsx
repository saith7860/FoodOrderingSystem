import Home from "./pages/Home"
import { Routes,Route } from "react-router"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<Home />} />
      </Routes>
      
    </div>
  )
}

export default App