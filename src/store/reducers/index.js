import WishList from './wishList'
import BookingList from './bookingList'
import BookingQty from './bookingQty'
import WishListQty from './wishListQty'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({WishList,BookingList,BookingQty,WishListQty})

export default rootReducer;