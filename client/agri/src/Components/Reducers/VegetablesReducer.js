const vegetableReducer=(state,action)=>{
switch(action.type){

    case "SET_ALL_VEGIS":

    const allVegetable=action.payload.filter((item)=>{
        
            return item.productType==="vegetable"
        })

        
        return {
            ...state,
            allVegetables:allVegetable
        }
        
        case "SET_RECOMENDED_VEGETABLES":
            const recomendedVegetables=action.payload.filter((item)=>{
                return item.recomended===true && item.productType==="vegetable"
            })  
            return{
                ...state,
                recomendedVegetables:recomendedVegetables
            }

    default:
        return state
}


}



export {vegetableReducer}