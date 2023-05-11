import React, { useContext, useEffect } from "react";
import { FruitContext } from "../Components/context/fruitscontext/FruitsContext";
import Cards from "../Components/Cards/Cards";
import "./AllFruits.css";

export default function AllFruits() {
  const { allFruitsPresent, allFruits, isLoading } = useContext(FruitContext);

  // console.log("allf",isLoading)
  const showAllFruits = () => {
    if (isLoading === false) {
      if (allFruitsPresent === true) {
        return allFruits.products?.map((item) => {
          return (
            <div key={item._id} className="All_fruits_div">
              <Cards name={"fruits"} data={item}></Cards>
            </div>
          );
        });
      } else {
        return <div>No Data Found</div>;
      }
    } else {
      return <div>...Loading</div>;
    }
  };

  useEffect(()=>{

  },[allFruits])

  return (
    <>
      <div className="All_Fruit_main_div">
        <h1>  Fruits</h1>
        <div className="all_fruits_grid_div">

        {showAllFruits()}
        </div>
        
      
        
      </div>
    </>
  );
}
