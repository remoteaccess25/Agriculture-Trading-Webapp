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

    default:
     return state
}


}



export {fruitReducer}