import React, { useEffect } from 'react'
import {SafeAreaView,View,Text,TouchableOpacity,StyleSheet,Image,Dimensions} from 'react-native'
import colors from '../constants/colors'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch,useSelector } from 'react-redux'
import bookingQtyAction from '../store/actions/bookingQty'



const screenWidth = Dimensions.get('screen').width

const BottomTabComponent = ({navigation,screenName,route}) => {

    const dispatch = useDispatch()

    const bookingQty = useSelector(state => state.BookingQty)
    
    

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


    getBookingQty()
       
    },[route])





return(

    <View style = {styles.container}>

        <TouchableOpacity style = {styles.innerView} onPress = {() => {navigation.navigate('HomeScreen')}}>

            <Image style = {[styles.imgStyle, {tintColor : screenName == 'Home' ? '#039ba1' : colors.grey}]} source = {require('../../assets/Icons/bthome.png')}/>

            <Text style = {{color: screenName == 'Home' ? '#039ba1' : colors.grey}}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity onPress = {() => {navigation.navigate('WishListScreen')}} style = {styles.innerView}>

            <Image style = {[styles.imgStyle, {tintColor : screenName == 'WishList' ? '#039ba1' : colors.grey}]} source = {require('../../assets/Icons/btwishlist.png')} />


            <Text style = {{color: screenName == 'WishList' ? '#039ba1' : colors.grey}}>WishList</Text>

        </TouchableOpacity>


        <TouchableOpacity onPress={() => {navigation.navigate('ProfileScreen')}} style = {styles.innerView}>

            <Image style = {[styles.imgStyle, {tintColor : screenName == 'Profile' ? '#0393a3' : colors.grey}]} source = {require('../../assets/Icons/btuser.png')} />

            <Text style = {{color: screenName == 'Profile' ? '#039ba1' : colors.grey}}>Profile</Text>

        </TouchableOpacity>

        <TouchableOpacity onPress = {() => {navigation.navigate('BookingListScreen')}} style = {styles.innerView}>

            <Image style = {[styles.imgStyle, {tintColor : screenName == 'BookingList' ? '#039ba1' : colors.grey}]} source = {require('../../assets/Icons/btbooking.png')}/>

            {bookingQty != 0 &&

            <View style = {styles.showQtyView}>

                <Text style = {styles.qtyTxt}>{bookingQty}</Text>

            </View>

            } 

            <Text style = {{color: screenName == 'BookingList' ? '#039ba1' : colors.grey}}>Booking List</Text>

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
                   width:22,height:22,
                   justifyContent:'center',alignItems:'center',
                   backgroundColor:'#699c03',
                
                },

    qtyTxt : {fontSize:12,fontWeight:'bold',color:colors.white}


})