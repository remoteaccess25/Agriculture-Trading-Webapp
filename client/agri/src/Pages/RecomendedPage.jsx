import React, { useContext } from 'react'
import { FruitContext } from '../Components/context/fruitscontext/FruitsContext'
import Cards from '../Components/Cards/Cards'
import {Vegicontext} from "../Components/context/vegetablecontext/VegitableContext"
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import "./Recomended.css"

export default function RecomendedPage() {

  //getting which card is clicekd
  const {name}=useParams()
  // console.log("params",name)

  const { isLoadingVegi,VegetablePresent,recomendedVegetables}=useContext(Vegicontext)


  const {FruitPresent,isLoading,recomendedFruits}=useContext(FruitContext)
  
  console.log("rec fruits",recomendedFruits.products)

const showData=()=>{
  if(isLoading===false || isLoadingVegi===false ){
    // console.log(recomendedFruits.result)

    if(FruitPresent===true && name==="fruits"){

      return(
        
        
        recomendedFruits.products.map((item)=>{
          return(
            <div key={item._id} >
             
              {/* <Link to={`/product/fruits/${item._id}`}> */}
                <Cards name={"fruits"} data= {item}/>
                  {/* </Cards></Link> */}
              
             
            </div>
          )
        })
        
        )
      }
  
  
  if( VegetablePresent===true && name==="vegetables"){
    
    return(
       
      recomendedVegetables.products.map((item)=>{
            return(
                <div key={item._id} >
                  <Link  to={`/product/vegetables/${item._id}`}><Cards name={"vegetables"} data= {item}></Cards></Link>
                  
          
                </div>
              )
            })
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
    <div className="recomended_heading">
      <h1>Our Recomended</h1>
    </div>
    <div className="recomended_main_div">
<div className="recomended_grid_div">

{

showData()


}

</div>
   

    </div>



    </>
      
   
    
  )
}
