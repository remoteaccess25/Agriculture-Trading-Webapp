import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function AllMarkets() {

    const {id}=useParams()
   
const [allMarketdata,setAllMarketdata]=useState([])

    const getallmarket=async()=>{

        try {
            const res=await axios.post(`http://localhost:3004/data?id=${id}`)

            console.log("resoponse",res.data)
            setAllMarketdata(res.data)
            

        } catch (error) {
            console.log(error)
        }


    }

    useEffect(()=>{
        getallmarket()
        },[])
 
  return (
      <>
      <div>AllMarkets

      </div>

     {/* {
        allMarketdata.map((item,index)=>{
            return(
                <div key={index}>
                    <p>{item.marketName},{item.productName}</p>
                </div>
            )
        })
     } */}
    
    
    </>
  )
}
