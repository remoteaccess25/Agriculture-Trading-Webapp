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
            console.log("reducer",action.payload)
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

        

       
        case "LOGIN":
            return{
                ...state,
                isLogedIn:true

            }
        
        case "LOGOUT":
                return{
                    ...state,
                    isLogedIn:false
    
                }
        
        



        default:
            return state
    }
}


export {AdminReducer}