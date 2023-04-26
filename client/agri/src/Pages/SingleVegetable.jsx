import React, { useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {Vegicontext}  from "../Components/context/vegetablecontext/VegitableContext"
import "./SingleVegetable.css"


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
        
       <div className='SV_alldata'>
        <div className="SV_image">

        </div>
        <div className="SV_info">
        <p> Name :{singleVegiData.product.productName}</p>
        <p> Type :{singleVegiData.product.productType}</p>
        <p>Size :{singleVegiData.product.productSize}</p>
        <p>Market :{singleVegiData.product.marketName}</p>
        <p>City : {singleVegiData.product.city}</p>
        <p>Min Price :{singleVegiData.product.minPrice}</p>
        <p>Max Price :{singleVegiData.product.maxPrice}</p>
        <p>Manager :{singleVegiData.product.managerName}</p>
       <p>Market Contact :{singleVegiData.product.marketContact}</p>
       </div>
        
        
       
        
        
        
        
       
        
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
    <div className="Single_Vegetable_main_div">
    <div className="SV_div1">
      <div className="SV_image_div">

      </div>
      <div className="SV_content_div">
        <p>For more such products </p>
        <p>Stay Updated</p>
       
      </div>
    </div>
  
            <div className="SV_div2">
            {
      showSinglefruit()
     } 
            </div>




            <div className="map_div">
              map
            </div>
    


    </div>
  


 
      

      


    


    
    </>
  )
}
