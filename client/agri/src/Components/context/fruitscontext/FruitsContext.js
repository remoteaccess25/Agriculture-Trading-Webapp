import { createContext, useEffect, useReducer} from "react";
import {fruitReducer} from "../../Reducers/FruitReducer"
import axios from "axios"
 

export const FruitContext=createContext(null)


export function FruitsContextProvider({children}){


    const initialFruiits={
       allFruits:[],
        recomendedFruits:[]

    }

    const[state,dispatch]=useReducer(fruitReducer,initialFruiits)


    const getallFruits=async()=>{

        try {
            
            const res=await axios.get("http://localhost:3004/data")
            const  allFruits=res.data
            dispatch({type:"SET_ALL_FRUITS",payload:allFruits})
            dispatch({type:"SET_RECOMENDED_FRUITS",payload:allFruits})
            

        } catch (error) {
            console.log(error)
            
        }

    }

    useEffect(()=>{

        getallFruits()


    },[])
   
    return(
        <FruitContext.Provider value={{...state}}>
            {children}
        </FruitContext.Provider>

    )
}