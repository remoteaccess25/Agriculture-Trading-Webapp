import React, { useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {Vegicontext}  from "../Components/context/vegetablecontext/VegitableContext"

export default function SingleVegetable() {

  const{id}=useParams()


  const {dispatch,singleVegiData, isLoadingVegi,VegetablePresent}=useContext(Vegicontext)
 
  
const getSingleVegiInfo=async()=>{
  try {

      const result=await axios.get(`http://localhost:8000/products/vegetables/${id}`)
        
      // console.log("single products",result.data)
        
      
        dispatch({type:"SET_SINGLE_VEGI_INFO",payload:result.data})
  } catch (error) {
      console.log(error)
  }

}

useEffect(()=>{
  getSingleVegiInfo()

},[])
  




const  showSinglefruit=()=>{
  if(isLoadingVegi===false){
    
    if(VegetablePresent===true){
      return(
        
       <div>
        {singleVegiData.product.productName}
        <hr />
        {singleVegiData.product.productType}
        <hr />
        {singleVegiData.product.productSize}
        <hr />
        {singleVegiData.product.marketName}
        <hr />
        {singleVegiData.product.city}
        <hr />
        {singleVegiData.product.minPrice}
        <hr />
        {singleVegiData.product.maxPrice}
        <hr />
        {singleVegiData.product.managerName}
        <hr />
        {singleVegiData.product.marketContact}
       </div>
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
    <div>SingleVegetable</div>
    <h1>{id}</h1>


 
       
     {
      showSinglefruit()
     } 
    

      


    


    
    </>
  )
}
