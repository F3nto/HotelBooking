import WishList from './wishList'
import BookingList from './bookingList'
import BookingQty from './bookingQty'
import WishListQty from './wishListQty'
import ReviewList from './reviewList'
import Auth from './auth'
import CountSign from './countSign'
import Email from './email'


import { combineReducers } from 'redux'

const rootReducer = combineReducers({WishList,BookingList,BookingQty,WishListQty,ReviewList,Auth,CountSign,Email})

export default rootReducer;