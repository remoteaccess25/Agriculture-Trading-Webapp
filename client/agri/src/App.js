import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import CreatePage from "./Pages/CreatePage"

import { AdminContextProvider } from "./Components/context/Admin/Admin";

import Navbar from "./Components/Navbar/Navbar";

import { VegitableContextProvider } from "./Components/context/vegetablecontext/VegitableContext";
import {FruitsContextProvider} from "./Components/context/fruitscontext/FruitsContext"
import SingleFruit from "./Pages/SingleFruit";
import SingleVegetable from "./Pages/SingleVegetable";
import Footer from "./Components/Footer/Footer";
import AllFruits from "./Pages/AllFruits";
import AllVegetables from "./Pages/AllVegetables";
import RecomendedPage from "./Pages/RecomendedPage";


function App() {
  return (
    <>
    <AdminContextProvider>
    <VegitableContextProvider>
    <FruitsContextProvider>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
       
        <Route path="/product/recomended/:name" element={<RecomendedPage/>}></Route>
        <Route path="/product/recomended/:name" element={<RecomendedPage/>}></Route>

        <Route path="/product/fruits/:id" element={<SingleFruit/>}></Route>
        <Route path="/product/vegetables/:id" element={<SingleVegetable/>}></Route>

        <Route path="/products/fruits" element={<AllFruits/>}></Route>
        <Route path="/products/vegetables" element={<AllVegetables/>}></Route>


        {/* navigate to create page for admin */}
        <Route path="/admin/create" element={<CreatePage/>}></Route>

      </Routes>
      <Footer></Footer>
    
      </FruitsContextProvider>
      </VegitableContextProvider>
      </AdminContextProvider>
    </>
  );
}

export default App;
