import React,{useState} from 'react'
import {SafeAreaView,View,Text,TouchableOpacity,StyleSheet,Image,} from 'react-native'
import colors from '../constants/colors'
import {LinearGradient} from 'expo-linear-gradient'
import { useSelector } from 'react-redux'

import LogOutModalComponent from '../components/LogOutModalComponent'


const DrawerNavigator = ({navigation}) => {

const [showDialog, setShowDialog] = useState(false)

const userName = useSelector(state => state.Auth)

return(

    <SafeAreaView style = {styles.container}>

        <View style = {styles.content}>

            <LinearGradient colors={['#24f8ff','#36899e', '#47b9bf',]} start = {{x : 0,y : 1}} end = {{x:1,y:1}} style = {styles.profileContainer}> 

                <Image style = {{width:80,height:80,borderRadius:70}} source = {require('../../assets/tor.jpg')}/>

                <Text style = {styles.profileTxt}>{userName}</Text>

            </LinearGradient>

            <TouchableOpacity style = {styles.imgAndTxtContainer} onPress = {() => {navigation.navigate('HomeScreen')}}>
        
                <Image style = {{width:30, height:30}} source = {require('../../assets/Icons/home.png')}/>

                <Text style = {styles.screenTxt}>Home</Text>

            </TouchableOpacity>

            
            <TouchableOpacity style = {styles.imgAndTxtContainer} onPress = {() => {navigation.navigate('WishListScreen')}}>
        
                <Image style = {{width:30, height:30}} source = {require('../../assets/Icons/wishlist.png')}/>

                <Text style = {styles.screenTxt}>WishList</Text>

            </TouchableOpacity>

            
            <TouchableOpacity style = {styles.imgAndTxtContainer} onPress = {() => {navigation.navigate('ReviewListScreen')}}>
        
                <Image style = {{width:30, height:30}} source = {require('../../assets/Icons/review.png')}/>

                <Text style = {styles.screenTxt}>Reviews</Text>

            </TouchableOpacity>

            
            <TouchableOpacity style = {styles.imgAndTxtContainer} onPress = {() => {navigation.navigate('ProfileScreen')}}>
        
                <Image style = {{width:30, height:30}} source = {require('../../assets/Icons/profile.png')}/>

                <Text style = {styles.screenTxt}>Profile</Text>

            </TouchableOpacity>

            <View style = {{width:'80%', height:2, backgroundColor:colors.primary,marginLeft:20}}/>

            <TouchableOpacity style = {styles.imgAndTxtContainer} onPress = {() => {navigation.navigate('ContactUsScreen')}}>
        
                <Image style = {{width:30, height:30}} source = {require('../../assets/Icons/contact.png')}/>

                <Text style = {styles.screenTxt}>Contact Us</Text>

            </TouchableOpacity>

            <TouchableOpacity style = {styles.imgAndTxtContainer} onPress = {() => {navigation.navigate('Home')}}>
        
                <Image style = {{width:30, height:30}} source = {require('../../assets/Icons/about.png')}/>

                <Text style = {styles.screenTxt}>About Us</Text>

            </TouchableOpacity>

            <View style = {{width:'80%', height:2, backgroundColor:colors.primary,marginLeft:20}}/>

            
            <TouchableOpacity style = {styles.imgAndTxtContainer} onPress = {() => setShowDialog(true)}>
        
                <Image style = {{width:30, height:30}} source = {require('../../assets/Icons/logout.png')}/>

                <Text style = {styles.screenTxt}>Log out</Text>

            </TouchableOpacity>




        </View>

        <LogOutModalComponent navigation={navigation} visible = {showDialog} outHandler = {() => setShowDialog(false)} />


    </SafeAreaView>


)

}
export default DrawerNavigator;

const styles = StyleSheet.create({
    
    container : {flex:1},

    content   : {flex:1,backgroundColor:'#000'},

    imgAndTxtContainer : {flexDirection:'row',alignItems:'center',margin:20},

    profileContainer : {padding:20,justifyContent:'center',alignItems:'center',height:200},

    profileTxt : {color:'#00f2ff',fontSize:16,fontWeight:'bold'},

    screenTxt : {color:'#00f2ff',fontSize:15,fontWeight:'bold',marginLeft:20}


})