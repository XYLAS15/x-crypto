import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Components/Header";
import Home from "./Components/Home";
import Coins from "./Components/Coins";
import coinDetails from "./Components/coinDetails";
import Exchanges from "./Components/Exchanges";
import Footer from "./Components/Footer";
function App() {
  return(
<Router>
  <Header />
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Coins" element={<Coins/>} />
    <Route path="/coinDetails" element={<coinDetails/>} />
    <Route path="/Exchanges" element={<Exchanges/>} />
  </Routes>

  <Footer />
</Router>
  )
}

export default App;
