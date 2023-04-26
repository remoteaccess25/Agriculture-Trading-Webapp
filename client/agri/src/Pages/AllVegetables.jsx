import React, { useContext, useEffect } from 'react'
import {Vegicontext} from "../Components/context/vegetablecontext/VegitableContext"
import Cards from '../Components/Cards/Cards'
import  "./AllVegetable.css"
export default function AllVegetables() {


const { allVegetables,VegetablePresent,isLoadingVegi}=useContext(Vegicontext)
// console.log("hello")
// console.log("allvegis",allVegetables.products)
console.log("all vegies",allVegetables)
const showAllVegetables=()=>{

  if(isLoadingVegi===false ){

    if(VegetablePresent===true ){

      
      return(
        allVegetables.products.map((item)=>{
          return(
            
            <div key={item._id} className='All_Vegetable_div'>
              <Cards name={"vegetables"} data={item}></Cards>
        

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
    <div className='All_Vegi_main_div'>AllVegis


     { showAllVegetables()}

    </div>
    
    </>
  )
}
