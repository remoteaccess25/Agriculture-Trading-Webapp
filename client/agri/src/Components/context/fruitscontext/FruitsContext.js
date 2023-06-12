import { createContext, useEffect, useReducer} from "react";
import {fruitReducer} from "../../Reducers/FruitReducer"
import axios from "axios"
// import dotenv from "dotenv-webpack"
 

export const FruitContext=createContext(null)


export function FruitsContextProvider({children}){


    const initialFruiits={
       allFruits:[],
       allFruitsPresent:false,
        recomendedFruits:[],
        isLoading:true,
        FruitPresent:false,
        singleFruitData:[],
        fullContainer:false

    }

    const[state,dispatch]=useReducer(fruitReducer,initialFruiits)


    const getallRecomendedFruits=async()=>{

        try {

            console.log("url:->",process.env)
            
            const res=await axios.get(`${process.env.REACT_APP_API_KEY}/products/recomended/fruits`)
            const  allFruits=res.data

            // console.log("all fruits",allFruits)
            
            dispatch({type:"SET_RECOMENDED_FRUITS",payload:allFruits})
            

        } catch (error) {
            console.log(error)
            
        }

    }



    const getallFruits=async()=>{

        try {
            
            const res=await axios.get(`${process.env.REACT_APP_API_KEY}/products/fruits`)
            const  allFruits=res.data

            // console.log("getallfruits",allFruits)
            dispatch({type:"SET_ALL_FRUITS",payload:allFruits})
            
            

        } catch (error) {
            console.log(error)
            
        }

    }
    useEffect(()=>{

        getallFruits()
        getallRecomendedFruits()


    },[])






    
   
    return(
        <FruitContext.Provider value={{...state,dispatch}}>
            {children}
        </FruitContext.Provider>

    )
}