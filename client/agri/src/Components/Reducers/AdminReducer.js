const AdminReducer=(state,action)=>{
    switch(action.type){

        case "NAME":
            return{
                ...state,
                name:action.payload
            }
        case "EMAIL":
            return{
                ...state,
                email:action.payload
            }
        case "PASSWORD":
            return{
                ...state,
                password:action.payload
            }
        
        case "CONTACT_NUM":
            return{
                ...state,
                contactNum:action.payload
            }
        
        case "ACESS_KEY":
                return{
                    ...state,
                    accessKey:action.payload
                }

        case "TOKEN":
                return{
                ...state,
                token:action.payload
            }


        case "ACESS_GRANTED":
            console.log("hello")
            console.log("acedGran",action.payload)
            alert("hitting")
            return{
                ...state,
                acessGranted:action.payload
            }

        case "SEND_REGISTER":
            return{
                ...state,
                name:action.payload.name,
                email:action.payload.email,
                password:action.payload.password,
                contactNum:action.payload.contactNum,
                accessKey:action.payload.acessKey,
                

            }

        case "GET_REGISTER":

            return{
                ...state,
                name:action.payload.name,
                acessGranted:true

            }
        case "SEND_LOGIN":
            return{

            }
        
        

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
        acessGranted:true
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