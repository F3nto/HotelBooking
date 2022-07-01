import React, { useEffect } from 'react'
import {SafeAreaView,View,Text,TouchableOpacity,StyleSheet,Image,Dimensions} from 'react-native'
import colors from '../constants/colors'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch,useSelector } from 'react-redux'
import bookingQtyAction from '../store/actions/bookingQty'
import wishListQtyAction from '../store/actions/wishListQty'
import {LinearGradient} from 'expo-linear-gradient'



const screenWidth = Dimensions.get('screen').width

const BottomTabComponent = ({navigation,screenName,route}) => {

    const dispatch = useDispatch()

    const bookingQty = useSelector(state => state.BookingQty)
    
    const wishListQty = useSelector(state => state.WishListQty)

    useEffect(() => {

        const getBookingQty = async() => {

        let bookingFromAsync = await AsyncStorage.getItem('bookingQty')

        let bookingData = JSON.parse(bookingFromAsync)

        if(bookingData == null){

            AsyncStorage.setItem('bookingQty', JSON.stringify(0))
            dispatch(bookingQtyAction.addToBookingQty(0))
        
        }else{

            AsyncStorage.setItem('bookingQty', JSON.stringify(bookingData))
            dispatch(bookingQtyAction.addToBookingQty(bookingData))

        }

        }

        const getWishListQty = async() => {

        let wishListQtyFromAsync = await AsyncStorage.getItem('wishListQty')

        let wishListQtyData = JSON.parse(wishListQtyFromAsync)

        if(wishListQtyData == null){

            AsyncStorage.setItem('wishListQty', JSON.stringify(0))
            dispatch(wishListQtyAction.addToWishListQty(0))


        }else{


            AsyncStorage.setItem('wishListQty', JSON.stringify(wishListQtyData))
            dispatch(wishListQtyAction.addToWishListQty(wishListQtyData))
        }


    }


    getBookingQty()
    getWishListQty()
       
    },[route])





return(

    <View style = {styles.container}>

        <TouchableOpacity style = {styles.innerView} onPress = {() => {navigation.navigate('HomeScreen')}}>

            <Image style = {[styles.imgStyle, {tintColor : screenName == 'Home' ? '#13332c' : colors.grey}]} source = {require('../../assets/Icons/bthome.png')}/>

            <Text style = {{color: screenName == 'Home' ? colors.txt : colors.grey}}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity onPress = {() => {navigation.navigate('WishListScreen')}} style = {styles.innerView}>

            <Image style = {[styles.imgStyle, {tintColor : screenName == 'WishList' ? '#13332c' : colors.grey}]} source = {require('../../assets/Icons/btwishlist.png')} />

            {wishListQty != 0 &&

            <View style = {styles.showQtyView}>

                <Text style = {styles.qtyTxt}>{wishListQty}</Text>

            </View>

            } 

            <Text style = {{color: screenName == 'WishList' ? colors.txt : colors.grey}}>WishList</Text>

        </TouchableOpacity>


        <TouchableOpacity onPress={() => {navigation.navigate('ProfileScreen')}} style = {styles.innerView}>

            <Image style = {[styles.imgStyle, {tintColor : screenName == 'Profile' ? '#13332c' : colors.grey}]} source = {require('../../assets/Icons/btuser.png')} />

            <Text style = {{color: screenName == 'Profile' ? colors.txt : colors.grey}}>Profile</Text>

        </TouchableOpacity>

        <TouchableOpacity onPress = {() => {navigation.navigate('BookingListScreen')}} style = {styles.innerView}>

            <Image style = {[styles.imgStyle, {tintColor : screenName == 'BookingList' ? '#13332c' : colors.grey}]} source = {require('../../assets/Icons/btbooking.png')}/>

            {bookingQty != 0 &&

            <View style = {styles.showQtyView}>

                <Text style = {styles.qtyTxt}>{bookingQty}</Text>

            </View>

            } 

            <Text style = {{color: screenName == 'BookingList' ? colors.txt : colors.grey}}>Booking List</Text>

        </TouchableOpacity>

    </View>

)
}

export default BottomTabComponent;

const styles = StyleSheet.create({
    
    container : {flexDirection:'row', alignItems:'center', backgroundColor:colors.white,height:60},

    innerView : {width:screenWidth/4,justifyContent:'center', alignItems:'center'},

    imgStyle : {width:25,height:25},

    showQtyView : {position:'absolute',top:-5,right:0,
                   borderRadius:11,marginRight:17,
                   width:22,height:22,justifyContent:'center',alignItems:'center',
                   backgroundColor:'#00b3a7',
                
                },

    qtyTxt : {fontSize:14,fontWeight:'bold',color:colors.white}


})