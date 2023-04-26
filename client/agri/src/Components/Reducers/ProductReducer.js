const ProductReducer=(state,action)=>{
    switch(action.type){

        case "PRODUCTNAME":
            
            return{
                ...state,
                productName:action.payload
            }

        case "PRODUCTYPE":
                return{
                    ...state,
                    productType:action.payload
                }
        case "MARKETNAME":
                    return{
                        ...state,
                        marketName:action.payload
                    }
        case "CITY":
                        return{
                            ...state,
                            city:action.payload
                        }

        case "MINPRICE":
                            return{
                                ...state,
                                minPrice:action.payload
                            }
        case "MAXPRICE":
                            return{
                                ...state,
                                maxPrice:action.payload
                            }
        case "MANAGERNAME":
                            return{
                                ...state,
                                managerName:action.payload
                                }
        case "MARKETCONTACT":
                            return{
                                    ...state,
                                    marketContact:action.payload
                                    }
        
        case "IMAGE":
            return{
                ...state,
                productImage:action.payload
            }

        default:
            return{
                ...state
            }

    }



}



export {ProductReducer}