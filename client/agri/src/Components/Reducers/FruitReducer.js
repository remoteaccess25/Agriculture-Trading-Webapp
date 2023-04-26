 const fruitReducer=(state,action)=>{
switch(action.type){

    case "SET_ALL_FRUITS":

    // const allFruits=action.payload.filter((item)=>{
    //         return item.productType==="fruit"
    // })

        return{
            ...state,
            allFruits:action.payload,
            isLoading:false,
            allFruitsPresent:true,
            FruitPresent:true
        }

    case "SET_RECOMENDED_FRUITS":

    // const recomendedFruits=action.payload.filter((item)=>{
    //     return item.recomended===true && item.productType==="fruit"

    // })
        
    return{
        ...state,
        recomendedFruits:action.payload,
        isLoading:false,
        FruitPresent:true
    }


    case "SET_SINGLE_FRUIT_INFO":
    
       
        return{
            ...state,
            isLoading:false,
            FruitPresent:true,
            singleFruitData:action.payload
        }

    default:
     return state
}


}



export {fruitReducer}