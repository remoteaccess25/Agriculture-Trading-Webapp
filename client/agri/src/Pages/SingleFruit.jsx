import React, { useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {FruitContext}  from "../Components/context/fruitscontext/FruitsContext"
import "./SingleFruit.css"
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


  
  
  const  showSingleFruit=()=>{
    if(isLoading===false){
      
      if(FruitPresent===true){
        return(
          <div className='SV_alldata'>
         
          <div className="SV_info">
          <p> Name :{singleFruitData.product.productName}</p>
          <p> Type :{singleFruitData.product.productType}</p>
          <p>Size :{singleFruitData.product.productSize}</p>
          <p>Market :{singleFruitData.product.marketName}</p>
          <p>City : {singleFruitData.product.city}</p>
          <p>Min Price :{singleFruitData.product.minPrice}</p>
          <p>Max Price :{singleFruitData.product.maxPrice}</p>
          <p>Manager :{singleFruitData.product.managerName}</p>
         <p>Market Contact :{singleFruitData.product.marketContact}</p>
         </div>
         <div className="SV_image">
         <img className='image1' src="" alt="image1" />
           </div>
     
         </div>
        
          )
        }
        else{
          return(
            <div>...No data found</div>
            )
          }
        
      }
      else{
        return(
          <div>...Loading</div>
          )
        }
      }
      
      
      useEffect(()=>{
        console.log("hello")
        
      },[singleFruitData])
    
      
      return (

    <>




<div className="Single_Vegetable_main_div">
      
      <div className="SV_div1">
        <div className="SV_image_div">
          <img className='image1' src="" alt="image1" />
  
        </div>
        <div className="SV_content_div">
          <div className="SV1_inner_contetnt">
          <p>For more such products </p>
          <p>Stay Updated</p>
          </div>
        </div>
      </div>
    
              <div className="SV_div2">
              {
        showSingleFruit()
       } 
              </div>
  
  
  
  
              <div className="map_div">
                
                <div className="inner_map_div">
                      map
                </div>
              </div>
      
  
  
      </div>






    </>
  )
}

