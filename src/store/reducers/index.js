import WishList from './wishList'
import BookingList from './bookingList'
import BookingQty from './bookingQty'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({WishList,BookingList,BookingQty})

export default rootReducer;