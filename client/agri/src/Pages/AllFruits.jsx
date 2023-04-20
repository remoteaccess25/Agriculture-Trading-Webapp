import React, { useContext } from 'react'
import {FruitContext} from "../Components/context/fruitscontext/FruitsContext"
import Cards from '../Components/Cards/Cards'


export default function AllFruits() {


const { allFruitsPresent,allFruits,isLoading}=useContext(FruitContext)

// console.log("allf",isLoading)
const showAllFruits=()=>{

  if(isLoading===false ){

    if(allFruitsPresent===true ){

      return(
        allFruits.product.map((item)=>{
          return(

            <div key={item._id}>
          <Cards data={item}></Cards>

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
    <div>AllFruits


     { showAllFruits()}

    </div>
    
    </>
  )
}
