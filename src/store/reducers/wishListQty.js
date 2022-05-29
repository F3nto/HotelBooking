const wishListQtyReducer = (state = 0, action) => {

    switch(action.type){

        case 'ADD_TO_WISHLIST_QTY':
        return action.wishListQty

        default :
        return state



    }
}

export default wishListQtyReducer;