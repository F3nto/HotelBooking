const userAuthReducer = (state = null, action) => {

    switch(action.type){

        case 'ADD_TO_AUTH_INFO':
        return action.userinfo

        default :
        return state


    }
}

export default userAuthReducer;