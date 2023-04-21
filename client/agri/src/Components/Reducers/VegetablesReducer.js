const vegetableReducer=(state,action)=>{
switch(action.type){

    case "SET_ALL_VEGIS":

    // const allVegetable=action.payload.filter((item)=>{
        
    //         return item.productType==="vegetable"
    //     })

        
        return {
            ...state,
            allVegetables:action.payload,
            isLoadingVegi:false,
            VegetablePresent:true
        }
        
        case "SET_RECOMENDED_VEGETABLES":
            // const recomendedVegetables=action.payload.filter((item)=>{
            //     return item.recomended===true && item.productType==="vegetable"
            // }) 
            // console.log("vegi reducer",action.payload) 
            return{
                ...state,
                recomendedVegetables:action.payload,
                isLoadingVegi:false,
                VegetablePresent:true
            }

            case "SET_SINGLE_VEGI_INFO":

                console.log("single vegi info",action.payload.product.productName)
                return{
                    ...state,
                    isLoadingVegi:false,
                    VegetablePresent:true,
                    singleVegiData:action.payload
                }

    default:
        return state
}


}



export {vegetableReducer}