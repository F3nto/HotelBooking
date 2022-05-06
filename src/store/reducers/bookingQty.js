const bookingQtyReducer = (state = 0, action) => {

    switch(action.type){

        case 'ADD_TO_BOOKING_QTY':
        return action.bookingQty

        default:
        return state
    }

}
export default bookingQtyReducer;