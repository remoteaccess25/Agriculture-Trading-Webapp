 const fruitReducer=(state,action)=>{
switch(action.type){

    case "SET_ALL_FRUITS":

    const allFruits=action.payload.filter((item)=>{
            return item.productType==="fruit"
    })

        return{
            ...state,
            allFruits:allFruits
        }

    case "SET_RECOMENDED_FRUITS":

    const recomendedFruits=action.payload.filter((item)=>{
        return item.recomended===true && item.productType==="fruit"

    })

    return{
        ...state,
        recomendedFruits:recomendedFruits
    }

    default:
     return state
}


}



export {fruitReducer}