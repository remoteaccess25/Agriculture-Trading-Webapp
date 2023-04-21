import React, { useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {FruitContext}  from "../Components/context/fruitscontext/FruitsContext"

export default function SingleFruit() {

  const{id}=useParams()


  const {dispatch,singleFruitData,isLoading,FruitPresent}=useContext(FruitContext)
 
  
const getSingleFruitInfo=async()=>{
  try {

      const result=await axios.get(`http://localhost:8000/products/fruits/${id}`)
      
      // console.log("single products",result.data)
      
        dispatch({type:"SET_SINGLE_FRUIT_INFO",payload:result.data})
    
  } catch (error) {
      console.log(error)
  }

}

useEffect(()=>{

  getSingleFruitInfo()

},[])


  
  
  const  showSingleVegi=()=>{
    if(isLoading===false){
      
      if(FruitPresent===true){
        return(
          
         <div>
          {singleFruitData.product.productName}
          <hr />
          {singleFruitData.product.productType}
          <hr />
          {singleFruitData.product.productSize}
          <hr />
          {singleFruitData.product.marketName}
          <hr />
          {singleFruitData.product.city}
          <hr />
          {singleFruitData.product.minPrice}
          <hr />
          {singleFruitData.product.maxPrice}
          <hr />
          {singleFruitData.product.managerName}
          <hr />
          {singleFruitData.product.marketContact}
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
    <div>SingleFruits</div>
    <h1>{id}</h1>


 
       
     {
       // singleFruitData.product.productName
      showSingleVegi()
     } 
    

   
   

    


    
    </>
  )
}

