import { createContext, useEffect, useReducer } from "react";
import {AdminReducer} from "../../Reducers/AdminReducer"


export const AdminContext=createContext(null)

export function AdminContextProvider({children}){


        const initialAdminData={
            name:"",
            token:"",
            auth:true
        }


        const[state,dispatch]=useReducer(AdminReducer,initialAdminData)


        // useEffect(()=>{
        //     dispatch({type:"SET_ADMIN",payload:{name,token,auth}})
        // },[])

    return(
        <AdminContext.Provider value={{...state,dispatch}}>
            {children}
        </AdminContext.Provider>
    )
}


