import React, { useContext } from 'react'
import {Vegicontext} from "../Components/context/vegetablecontext/VegitableContext"
import Cards from '../Components/Cards/Cards'


export default function AllVegetables() {


const { allVegetables,allVegetablesPresent,isLoadingVegi}=useContext(Vegicontext)

// console.log("allf",isLoading)
const showAllVegetables=()=>{

  if(isLoadingVegi===false ){

    if(allVegetablesPresent===true ){

      return(
        allVegetables.product.map((item)=>{
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


     { showAllVegetables()}

    </div>
    
    </>
  )
}
