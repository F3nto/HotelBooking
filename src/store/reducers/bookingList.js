const bookingListReducer = (state = null, action) => {

    switch(action.type){
        
        case 'ADD_TO_BOOKING_LIST':
        return action.bookingList

        default: 
        return state


    }

}

export default bookingListReducer;