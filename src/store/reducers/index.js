import WishList from './wishList'
import BookingList from './bookingList'
import BookingQty from './bookingQty'
import WishListQty from './wishListQty'
import ReviewList from './reviewList'
import Auth from './auth'
import Email from './email'
import CreateUser from './createUser'


import { combineReducers } from 'redux'

const rootReducer = combineReducers({WishList,BookingList,BookingQty,WishListQty,ReviewList,Auth,Email,CreateUser})

export default rootReducer;