import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

import Navbar from "./Components/Navbar/Navbar";
import VegetablesHome from "./Components/vegetables/VegetablesHome";
import FruitsHome from "./Components/fruits/FruitsHome"
import Market from "./Components/market/Market"
import { VegitableContextProvider } from "./Components/context/vegetablecontext/VegitableContext";
import {FruitsContextProvider} from "./Components/context/fruitscontext/FruitsContext"
import SinglePage from "./Pages/SinglePage";
import Footer from "./Components/Footer/Footer";
import AllMarkets from "./Pages/AllMarkets";
function App() {
  return (
    <>
    <VegitableContextProvider>
    <FruitsContextProvider>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
       
        <Route path="/recomended/vegetables" element={<VegetablesHome/>}></Route>
        <Route path="/recomended/fruits" element={<FruitsHome />}></Route>
        <Route path="/market" element={<Market/>}></Route>
        <Route path="/fruits/:id" element={<AllMarkets/>}></Route>
        {/* <Route path="/fruits/:productName" element={<AllMarkets/>}></Route> */}
        <Route path="/vegetables/:id" element={<AllMarkets/>}></Route>
        
      </Routes>
      <Footer></Footer>
    
      </FruitsContextProvider>
      </VegitableContextProvider>
    </>
  );
}

export default App;
