import React, { useContext } from 'react'
import {Vegicontext} from "../Components/context/vegetablecontext/VegitableContext"
import Cards from '../Components/Cards/Cards'
import { Link } from 'react-router-dom'

export default function AllVegetables() {


const { allVegetables,VegetablePresent,isLoadingVegi}=useContext(Vegicontext)
// console.log("hello")
// console.log("allvegis",allVegetables.products)
const showAllVegetables=()=>{

  if(isLoadingVegi===false ){

    if(VegetablePresent===true ){

      
      return(
        allVegetables.products.map((item)=>{
          return(
            
            <div key={item._id}>
              <Link to={`/product/vegetables/${item._id}`}><Cards data={item}></Cards></Link>
        

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
    <div>AllVegis


     { showAllVegetables()}

    </div>
    
    </>
  )
}
