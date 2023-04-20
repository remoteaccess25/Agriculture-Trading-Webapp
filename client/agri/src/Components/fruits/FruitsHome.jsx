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
               
<<<<<<< HEAD
                 <Link to={`/product/fruits/${id}`}>  <h3>{item.productName}</h3></Link>
=======
                 <Link to={`/fruits/${id}`}>  <h3>{item.productName}</h3></Link>
>>>>>>> d336e31e8cdb090c8ad90cc3f62323727e92c0f5
                <p>{item.marketName}</p>
                
              </div>
            )
          })
        }
      
    </div>
    </>
  )
}
