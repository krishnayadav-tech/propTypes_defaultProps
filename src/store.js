const initial = {
    counter : 0
}

const reducer = (state=initial,action)=>{
    if(action.type === "add"){
        return {
            counter : state.counter + 1
        }
    }
    return state;
}


export default reducer;