import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {FruitContext} from "../context/fruitscontext/FruitsContext"
export default function FruitsHome() {

  const {allFruits,recomendedFruits}=useContext(FruitContext)

  return (
    <>
    <div>Fruits</div>
    
    <div className="fruits-div">
      
       
        {
          recomendedFruits.map((item,id)=>{
            return (
              <div key={id}>
               
                 <Link to={`/fruits/${id}`}>  <h3>{item.productName}</h3></Link>
                <p>{item.marketName}</p>
                
              </div>
            )
          })
        }
      
    </div>
    </>
  )
}
