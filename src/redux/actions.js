const loginUser = (Token) =>{
    return {
        type: "loginUser",
        value: Token
    }
}

// on déclare une action qui contient la variable à stocker

const setUser = (User)=>{
    return {
        type: "setUser",
        value: User
    }
}

export {
    loginUser,
    setUser
}