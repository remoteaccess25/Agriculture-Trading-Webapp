import { createContext } from "react";
import { ProductReducer } from "../../Reducers/ProductReducer";
import { useReducer } from "react";


const ProductContext=createContext(null)


export default function ProductContextProvider({children}){

//initial product content

const initialProduct={

    productName:"",
    productType:"",
    marketName:"",
    city:"",
    minPrice:Number,
    maxPrice:Number,
    managerName:"",
    marketContact:Number,
    recomended:false,
    productImage:"",
    productSize:""
    


}



const[state,dispatch]=useReducer(ProductReducer,initialProduct)



    return(
        <ProductContext.Provider value={{...state,dispatch}}>
            {children}
        </ProductContext.Provider>
    )
}


export {ProductContext}