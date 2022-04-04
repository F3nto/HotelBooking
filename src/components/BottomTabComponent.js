import React from 'react'
import {SafeAreaView,View,Text,TouchableOpacity,StyleSheet,Image,Dimensions} from 'react-native'
import colors from '../constants/colors'


const screenWidth = Dimensions.get('screen').width

const BottomTabComponent = ({navigation,screenName}) => {
return(

    <View style = {styles.container}>

        <TouchableOpacity style = {styles.innerView}>

            <Image style = {[styles.imgStyle, {tintColor : screenName == 'Home' ? colors.primary : colors.grey}]} source = {require('../../assets/Icons/bthome.png')}/>

            <Text style = {{color: screenName == 'Home' ? colors.primary : colors.grey}}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity onPress = {() => {navigation.navigate('WishListScreen')}} style = {styles.innerView}>

            <Image style = {[styles.imgStyle, {tintColor : screenName == 'WishList' ? colors.primary : colors.grey}]} source = {require('../../assets/Icons/btwishlist.png')} />

            <Text style = {{color: screenName == 'WishList' ? colors.primary : colors.grey}}>WishList</Text>

        </TouchableOpacity>


        <TouchableOpacity onPress={() => {navigation.navigate('ProfileScreen')}} style = {styles.innerView}>

            <Image style = {[styles.imgStyle, {tintColor : screenName == 'Profile' ? colors.primary : colors.grey}]} source = {require('../../assets/Icons/btuser.png')} />

            <Text style = {{color: screenName == 'Profile' ? colors.primary : colors.grey}}>Profile</Text>

        </TouchableOpacity>

        <TouchableOpacity style = {styles.innerView}>

            <Image style = {[styles.imgStyle, {tintColor : screenName == 'BookingList' ? colors.primary : colors.grey}]} source = {require('../../assets/Icons/btbooking.png')}/>

            <Text style = {{color: screenName == 'BookingList' ? colors.primary : colors.grey}}>Booking List</Text>

        </TouchableOpacity>

    </View>

)
}

export default BottomTabComponent;

const styles = StyleSheet.create({
    
    container : {flexDirection:'row', alignItems:'center', backgroundColor:colors.white,height:60},

    innerView : {width:screenWidth/4,justifyContent:'center', alignItems:'center'},

    imgStyle : {width:25,height:25}


})