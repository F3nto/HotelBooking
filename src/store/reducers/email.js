const emailReducer = (state = null, action) => {

    switch(action.type) {

        case 'SAVE_TO_EMAIL':
        return action.email

        default : 
        return state


    }
}
export default emailReducer;