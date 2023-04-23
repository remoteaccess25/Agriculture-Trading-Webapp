import React, { useContext, useState } from 'react'
import "./CreatePage.css"
import axios from "axios"
import { ProductContext } from '../Components/context/Admin/Product'
import Cookies from 'js-cookie'

export default function CreatePage() {

const {dispatch,productName,productType,marketName,
  city,minPrice,maxPrice,managerName,marketContact,recomended,productImage
  
  }=useContext(ProductContext)


// const [token,setToken]=useState("")

// const localToken=localStorage.getItem("token")


//set temp recomended 
const [rec,setRec]=useState(false)




  //image handeling
  const [image,setImage]=useState("")
  const handelImage=(e)=>{
      console.log(e.target.value)
      setImage(e.target.files[0])
      console.log(image)
  }


  const handelSubmit=async(e)=>{
    e.preventDefault();
    // setToken(localToken)
    const token=Cookies.get("admin")
    
    try {
      //seting recomended to reducer
      dispatch({type:"RECOMENDED",payload:rec})
      alert(token)

      const sendingData={
        productName,productType,marketName,
        city,minPrice,maxPrice,managerName,
        marketContact,recomended
      }


      //form data for image
      const formdata=new FormData()
      FormData.append({"image":image})
    
      const result=await axios.post("http://localhost:8000/admin/create",sendingData,{
        headers: { authorization: `Bearer ${token}` },
        
  
      })


      console.log("create page response",result)
      console.log("all data",productName,productType,marketName,
      city,minPrice,maxPrice,managerName,marketContact)
      console.log("recomended",recomended)

    } catch (error) {
      console.log(error)
    }
  }



 
  return (
    <>
     <div className="create_div">
        create page </div>
    
        <div className="create_form_div">
          <form className='duumy' onSubmit={handelSubmit}>

          <input type="text" value={productName} name='productName' required placeholder='ProductName' onChange={(e)=>{dispatch({type:"PRODUCTNAME",payload:e.target.value})}}/>


          <input type="text" value={productType} name='productType' required placeholder='ProductType' onChange={(e)=>{dispatch({type:"PRODUCTYPE",payload:e.target.value})}}/>


          <input type="text" value={marketName} name='marketName' required placeholder='marketName' onChange={(e)=>{dispatch({type:"MARKETNAME",payload:e.target.value})}}/>


          <input type="text" value={city} name='city' required placeholder='city' onChange={(e)=>{dispatch({type:"CITY",payload:e.target.value})}}/>


          <input type='number' value={minPrice} name='minPrice' required placeholder='minPrice' onChange={(e)=>{dispatch({type:"MINPRICE",payload:e.target.value})}}/>


          <input type="number" value={maxPrice} name='maxPrice' required placeholder='maxPrice' onChange={(e)=>{dispatch({type:"MAXPRICE",payload:e.target.value})}}/>


          <input type="text" value={managerName} name='managerName' required placeholder='managerName' onChange={(e)=>{dispatch({type:"MANAGERNAME",payload:e.target.value})}}/>


          <input type="number" value={marketContact} name='marketContact' required placeholder='marketContact' onChange={(e)=>{dispatch({type:"MARKETCONTACT",payload:e.target.value})}}/>

         


         <label htmlFor="recomended">
          <input type="checkbox" name="recomended" value={true}  onClick={(e)=>{setRec(e.target.value)}}   />
          <input type="checkbox" name="recomended" value={false}  onClick={(e)=>{setRec(e.target.value)}}   />
         </label>


         {/* image uploading */}
         <input type="file" name="file" onChange={handelImage} />
  
          <button type='submit'>Submit</button>
          </form>
        </div>
    
    </>
   
  )
}
