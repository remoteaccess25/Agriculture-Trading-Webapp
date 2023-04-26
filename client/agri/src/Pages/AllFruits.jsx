import React, { useContext } from 'react'
import {FruitContext} from "../Components/context/fruitscontext/FruitsContext"
import Cards from '../Components/Cards/Cards'
import "./AllFruits.css"
export default function AllFruits() {


const { allFruitsPresent,allFruits,isLoading}=useContext(FruitContext)

// console.log("allf",isLoading)
const showAllFruits=()=>{

  if(isLoading===false ){

    if(allFruitsPresent===true ){

      return(
        allFruits.products.map((item)=>{
          return(

            <div key={item._id} className='All_fruits_div'>
              <Cards name={"fruits"} data={item}></Cards>
         

        </div>
            )
      })
      )
    }

    else{
      return(
        <div>No Data Found</div>
        )
      }
    }


  else{
    return(
      <div>...Loading</div>
    )
  }
}

  return (
    <>
    <div className='All_Fruit_main_div'>AllFruits


     { showAllFruits()}

    </div>
    
    </>
  )
}
