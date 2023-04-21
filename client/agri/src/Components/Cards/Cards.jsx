import React from 'react'
import "./Cards.css"

export default function Cards(props) {
  return (
    <>

     <div className="dummycards_div">

      <div className="cards_upper_div">
        <img className='cards_image' src={""} alt="" />
        <div className="cards_info">
          <div className="product_info">
          <h2>{props.data.productName}</h2>
          <div className="min_price">Min Price: {props.data.minPrice}</div>
          <div className="max_price">Max Price: {props.data.maxPrice}</div>
          <div className="size">Size: {props.data.productSize}</div>
          <div className="market">Market: {props.data.marketName}</div>
          </div>
          
        </div>

      </div>


      <div className="cards_lower_div">

      </div>
     </div>


    
    </>
   
  )
}
