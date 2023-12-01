

const initialState = {
    Token: null,
    User: null
}


const reducers = (state = initialState, action) =>{
    switch (action.type){
        case "loginUser":
            return {...state, Token: action.value}
        case "setUser":
            return {...state, User: action.value}
        default:
            return state

    }
}


export default reducers