import { createContext, useEffect, useReducer } from "react";
import {vegetableReducer} from "../../Reducers/VegetablesReducer"
import axios from "axios";


export const Vegicontext=createContext(null)


export function VegitableContextProvider({children}){
  
  
    const initialVegetables={
    allVegetables:[],
    recomendedVegetables:[]

   }

   const [state,dispatch]=useReducer(vegetableReducer,initialVegetables)

const getallvegi=async()=>{


    try {
        const res=await axios.get("http://localhost:3004/data")
    const allvegi=res.data
    

    dispatch({type:"SET_ALL_VEGIS",payload:allvegi})
    dispatch({type:"SET_RECOMENDED_VEGETABLES",payload:allvegi})
        
    } catch (error) {
        console.log(error)
    }

   
}
 

   useEffect(()=>{
    getallvegi()

   },[])


  

    return(
            < Vegicontext.Provider  value={{...state}}>
                {children}
            </Vegicontext.Provider>
    )
}

