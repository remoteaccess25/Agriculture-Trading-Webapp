import React, { useEffect, useState } from 'react'
import "./Cards.css"
import {AdminContext}from "../context/Admin/Admin"
import { useContext } from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'
import { Link } from 'react-router-dom'



export default function Cards(props) {


  const {dispatch,isLogedIn,token}=useContext(AdminContext)


  const [data,setData]=useState({
    productName:"",
    productType:"",
    marketName:"",
    city:"",
    minPrice:Number,
    maxPrice:Number,
    managerName:"",
    marketContact:Number,
    recomended:true

  })


  const handelInputs=(e)=>{
    
    const name=e.target.name;
    const value=e.target.value;
    setData({...data,[name]:value})

  }

 
// console.log("token",token)
const checkLogin=()=>{
  const mycookies=Cookies.get("admin")
  const localToken=localStorage.getItem("token")


  if(mycookies!==undefined){
    dispatch({type:"LOGIN"})
    dispatch({type:"TOKEN",payload:localToken})
  }else{
    dispatch({type:"LOGOUT"})
  }
}


useEffect(()=>{
checkLogin()
},[])


const deleteProduct=async()=>{
  const id=props.data._id
  try {
    // console.log("going")
    const result=await axios.delete(`http://localhost:8000/admin/delete/${id}`,{
      headers: { authorization: `Bearer ${token}` }
    }
    )
    

    console.log("delete result",result)
    
  } catch (error) {
    console.log(error)
  }
        
}

//  /admin/delete/:id 
// console.log(props.data._id)




//update product
const [showUpdate,setShowUpdate]=useState(false)


const handelUpdate=(e)=>{
  e.preventDefault()

  setShowUpdate(true)
}







const Update=async(e)=>{
e.preventDefault()

const token=Cookies.get("admin")
    
      alert(token)

  try {
    const id=props.data._id
   

    

    

    const result=await axios.patch(`http://localhost:8000/admin/update/${id}`,data,
    {
      headers: { authorization: `Bearer ${token}`}
    }

    )
    


    setShowUpdate(false)
  } catch (error) {
    console.log(error)
  }

}
  return (
    <>
    
     {/* {alert(props.name)} */}
     <div className="dummycards_div">
    <Link to={`/product/${props.name}/${props.data._id}`}>
      
      <div className="cards_upper_div">

        <div className="image_div">
          
          {/* {console.log("images",props.image.contentType)} */}
        <img className='cards_image' src={props.image} alt="" />
        </div>

        <div className="cards_info">
          
          <p>{props.data.productName}</p>
          <p className="min_price">Min Price: {props.data.minPrice}</p>
          <p className="max_price">Max Price: {props.data.maxPrice}</p>
          <p className="size">Size: {props.data.productSize}</p>
          <p className="market">Market: {props.data.marketName}</p>


          
          
        </div>

      </div>


      <div className="cards_lower_div">
            <p>View all</p>
      </div>
     
     </Link>
    

     {isLogedIn && 
      <div className='admin_option'>
        <button  onClick={handelUpdate}>update</button>
        <button onClick={()=>deleteProduct()}>delete</button>
        </div>
      }

</div>
      {
        showUpdate && <>
        
        <form className='duumy' onSubmit={Update}>

<input type="text" value={data.productName} name='productName'  placeholder='ProductName' onChange={handelInputs}/>


<input type="text" value={data.productType} name='productType'  placeholder='ProductType' onChange={handelInputs}/>


<input type="text" value={data.marketName} name='marketName'  placeholder='marketName' onChange={handelInputs}/>


<input type="text" value={data.city} name='city'  placeholder='city' onChange={handelInputs}/>


<input type='number' value={data.minPrice} name='minPrice'  placeholder='minPrice' onChange={handelInputs}/>


<input type="number" value={data.maxPrice} name='maxPrice'  placeholder='maxPrice' onChange={handelInputs}/>


<input type="text" value={data.managerName} name='managerName'  placeholder='managerName' onChange={handelInputs}/>


<input type="number" value={data.marketContact} name='marketContact'  placeholder='marketContact' onChange={handelInputs}/>




<label htmlFor="recomended">
<input type="checkbox" name="recomended" value={data.recomended}  onChange={handelInputs}   />

</label>
<button type='submit'>Submmit</button>
</form>
        
        </>
      }

    
    </>
   
  )
}