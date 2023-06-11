import React, { useContext, useEffect, useState } from 'react'
import "./CreatePage.css"
import axios from "axios"
import { ProductContext } from '../Components/context/Admin/Product'
import Cookies from 'js-cookie'
import { AdminContext } from "../Components/context/Admin/Admin";


export default function CreatePage() {

const {dispatch,productName,productType,marketName,
  city,minPrice,maxPrice,managerName,marketContact,productImage
  
  }=useContext(ProductContext)

  const {  email } = useContext(AdminContext);
// const [token,setToken]=useState("")

// const localToken=localStorage.getItem("token")
useEffect(()=>{
  console.log(email)
})

//set temp recomended 
const [recomended,setRecomended]=useState(false)




  //image handeling
  // const [image,setImage]=useState("")
  const handelImage=(e)=>{
      // console.log(e.target.value)
      const image=e.target.files[0]
      dispatch({type:"IMAGE",payload:image})
      // setImage(e.target.files[0])
      // console.log(image)
  }



// recomended
const handelRecomended=(e)=>{
console.log(e)
if(e.target.checked===true  ){
  setRecomended(true)
}
else{
  setRecomended(false)
}
}



  const handelSubmit=async(e)=>{
    e.preventDefault();
    // setToken(localToken)
    // const token=Cookies.get("admin")
    const token=localStorage.getItem("token")
    
    try {
      //seting recomended to reducer
      
      alert(token)

     

      // const sendingData={
      //   productName,productType,marketName,
      //   city,minPrice,maxPrice,managerName,
      //   marketContact,recomended
      // }


      //form data for image
      const formData=new FormData();
      formData.append("productName",productName)
      formData.append("productType",productType)
      formData.append("marketName",marketName)
      formData.append("city",city)
      formData.append("minPrice",minPrice)
      formData.append("maxPrice",maxPrice)
      formData.append("managerName",managerName)
      formData.append("marketContact",marketContact)
      formData.append("recomended",recomended)
    

      
      formData.append("image",productImage)
      console.log("frontend image",productImage)

      
      console.log("form data presenting",[...formData])
    
    
    
    
      const result=await axios.post("http://localhost:8000/admin/create",(formData),{
        headers: { authorization: `Bearer ${token}`
              
              },
        
  
      })
     
      
      


      // console.log("create page response",result)
      // console.log("all data",productName,productType,marketName,
      // city,minPrice,maxPrice,managerName,marketContact)
      // console.log("recomended",recomended)

    } catch (error) {
      console.log(error)
    }
  }



 
  return (
    <>
     
        <div className="create_form_div">
          <form className='create_form' onSubmit={handelSubmit}>

          <input className='inputs' type="text" value={productName} name='productName' required placeholder='ProductName' onChange={(e)=>{dispatch({type:"PRODUCTNAME",payload:e.target.value})}}/>


          <input className='inputs'  type="text" value={productType} name='productType' required placeholder='ProductType' onChange={(e)=>{dispatch({type:"PRODUCTYPE",payload:e.target.value})}}/>


          <input className='inputs'  type="text" value={marketName} name='marketName' required placeholder='marketName' onChange={(e)=>{dispatch({type:"MARKETNAME",payload:e.target.value})}}/>


          <input className='inputs'  type="text" value={city} name='city' required placeholder='city' onChange={(e)=>{dispatch({type:"CITY",payload:e.target.value})}}/>


          <input className='inputs'  type='number' value={minPrice} name='minPrice' required placeholder='minPrice' onChange={(e)=>{dispatch({type:"MINPRICE",payload:e.target.value})}}/>


          <input className='inputs'  type="number" value={maxPrice} name='maxPrice' required placeholder='maxPrice' onChange={(e)=>{dispatch({type:"MAXPRICE",payload:e.target.value})}}/>


          <input className='inputs'  type="text" value={managerName} name='managerName' required placeholder='managerName' onChange={(e)=>{dispatch({type:"MANAGERNAME",payload:e.target.value})}}/>


          <input className='inputs'  type="number" value={marketContact} name='marketContact' maxLength={10} required placeholder='marketContact' onChange={(e)=>{dispatch({type:"MARKETCONTACT",payload:e.target.value})}}/>

         


         <label className='recomended' htmlFor="recomended">
          <h3>Recomended :</h3> 
          <input className='recomended_checkbox' type="checkbox" name="recomended"  onChange={handelRecomended} />
         </label>


         {/* image uploading */}
         <input className='inputs' type="file" name="file" onChange={handelImage} />
  
          <button className='submit_button' type='submit'>Submit</button>
          </form>
        </div>
    
    </>
   
  )
}
