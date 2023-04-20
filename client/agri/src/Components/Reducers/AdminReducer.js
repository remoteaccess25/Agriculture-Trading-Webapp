const AdminReducer=(state,action)=>{
    switch(action.type){

case "SET_ADMIN":
    const{name,token}=action.payload

    const setAdminToLoaclStorage=()=>{
        const loaclAdmin=localStorage.setItem("token",token)
    }
    setAdminToLoaclStorage()

    return{
        ...state,
        name:name,
        token:token,
        auth:true 
    }

    case "REMOVE_ADMIN":

       const removeAdminFromLocalStorage=()=>{
        const loaclAdmin=localStorage.removeItem("token")
       }

       removeAdminFromLocalStorage()
        return{
            ...state,
            name:"",
            token:"",
            auth:false
            
        }

        default:
            return state
    }
}


export {AdminReducer}