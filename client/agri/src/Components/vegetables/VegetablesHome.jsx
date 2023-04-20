import React, { useContext } from 'react'
import {Link, useParams} from "react-router-dom"
import {Vegicontext} from "../context/vegetablecontext/VegitableContext"


export default function VegetablesHome() {

const { allVegetables,  recomendedVegetables}=useContext(Vegicontext)


const {id}=useParams()
  return (
    <>
    
    <div>Vegetables</div>
    {/* <div className="vegitable-div">
      <ul>
        <Link  to={`/vegetables/${id}`}>Tomato</Link>
        <Link  to={`/vegetables/${id}`}>Potato</Link>
        <Link  to={`/vegetables/${id}`}>Capsicum</Link>
        <Link  to={`/vegetables/${id}`}>Brinjal</Link>
        
      </ul> */}

      {recomendedVegetables.map((item,index)=>{
        return (
          <div key={index}>
<<<<<<< HEAD
        <Link to={`/product/vegetables/${id}`}>  <h3>{item.productName}</h3></Link>
=======
        <Link to={`/vegetables/${id}`}>  <h3>{item.productName}</h3></Link>
>>>>>>> d336e31e8cdb090c8ad90cc3f62323727e92c0f5
                <p>{item.marketName}</p>
          </div>
        )
      })}
    {/* </div> */}
    </>
  )
}
