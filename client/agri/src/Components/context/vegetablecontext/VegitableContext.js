import { createContext, useEffect, useReducer } from "react";
import {vegetableReducer} from "../../Reducers/VegetablesReducer"
import axios from "axios";


export const Vegicontext=createContext(null)


export function VegitableContextProvider({children}){
  
  
    const initialVegetables={
    allVegetables:[],
    allVegetablesPresent:false,
    recomendedVegetables:[],
    isLoadingVegi:true,
    VegetablePresent:false,
    singleVegiData:[]

   }

   const [state,dispatch]=useReducer(vegetableReducer,initialVegetables)

const getallRecomendedVegi=async()=>{


    try {
        const res=await axios.get("http://localhost:8000/products/recomended/vegetables")
    const allvegi=res.data
    
    // console.log("rec vegetables",allvegi)
    
    dispatch({type:"SET_RECOMENDED_VEGETABLES",payload:allvegi})
        
    } catch (error) {
        console.log(error)
    }

   
}


const getallvegi=async()=>{


    try {
        const res=await axios.get("http://localhost:8000/products/vegetables")
    const allvegi=res.data
    
   

    dispatch({type:"SET_ALL_VEGIS",payload:allvegi})
    
        
    } catch (error) {
        console.log(error)
    }

   
}




 

   useEffect(()=>{
    getallRecomendedVegi()
    getallvegi()

   },[])


  

    return(
            < Vegicontext.Provider  value={{...state,dispatch}}>
                {children}
            </Vegicontext.Provider>
    )
}

