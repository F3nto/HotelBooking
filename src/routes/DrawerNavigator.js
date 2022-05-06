import React,{useState} from 'react'
import {SafeAreaView,View,Text,TouchableOpacity,StyleSheet,Image,} from 'react-native'
import colors from '../constants/colors'

import LogOutModalComponent from '../components/LogOutModalComponent'


const DrawerNavigator = ({navigation}) => {

const [showDialog, setShowDialog] = useState(false)

return(

    <SafeAreaView style = {styles.container}>

        <View style = {styles.content}>

            <View style = {styles.profileContainer}>

                <Image style = {{width:70,height:70}} source = {require('../../assets/Icons/user.png')}/>

                <Text style = {styles.profileTxt}>Fento</Text>

            </View>

            <TouchableOpacity style = {styles.imgAndTxtContainer} onPress = {() => {navigation.navigate('HomeScreen')}}>
        
                <Image style = {{width:25, height:25,}} source = {require('../../assets/Icons/home.png')}/>

                <Text style = {styles.screenTxt}>Home</Text>

            </TouchableOpacity>

            
            <TouchableOpacity style = {styles.imgAndTxtContainer} onPress = {() => {navigation.navigate('WishListScreen')}}>
        
                <Image style = {{width:25, height:25}} source = {require('../../assets/Icons/wishlist.png')}/>

                <Text style = {styles.screenTxt}>WishList</Text>

            </TouchableOpacity>

            
            <TouchableOpacity style = {styles.imgAndTxtContainer} onPress = {() => {navigation.navigate('Home')}}>
        
                <Image style = {{width:25, height:25}} source = {require('../../assets/Icons/review.png')}/>

                <Text style = {styles.screenTxt}>Reviews</Text>

            </TouchableOpacity>

            
            <TouchableOpacity style = {styles.imgAndTxtContainer} onPress = {() => {navigation.navigate('Home')}}>
        
                <Image style = {{width:25, height:25}} source = {require('../../assets/Icons/profile.png')}/>

                <Text style = {styles.screenTxt}>Profile</Text>

            </TouchableOpacity>

            <View style = {{width:'80%', height:2, backgroundColor:colors.primary,marginLeft:20}}/>

            <TouchableOpacity style = {styles.imgAndTxtContainer} onPress = {() => {navigation.navigate('Home')}}>
        
                <Image style = {{width:25, height:25}} source = {require('../../assets/Icons/contact.png')}/>

                <Text style = {styles.screenTxt}>Contact Us</Text>

            </TouchableOpacity>

            <TouchableOpacity style = {styles.imgAndTxtContainer} onPress = {() => {navigation.navigate('Home')}}>
        
                <Image style = {{width:25, height:25}} source = {require('../../assets/Icons/info.png')}/>

                <Text style = {styles.screenTxt}>About Us</Text>

            </TouchableOpacity>

            <View style = {{width:'80%', height:2, backgroundColor:colors.primary,marginLeft:20}}/>

            
            <TouchableOpacity style = {styles.imgAndTxtContainer} onPress = {() => setShowDialog(true)}>
        
                <Image style = {{width:25, height:25}} source = {require('../../assets/Icons/logout.png')}/>

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

    content   : {flex:1,},

    imgAndTxtContainer : {flexDirection:'row',alignItems:'center',margin:20},

    profileContainer : {backgroundColor:colors.primary,padding:20,justifyContent:'center',alignItems:'center',height:200},

    profileTxt : {color:colors.white,fontSize:16,fontWeight:'bold'},

    screenTxt : {color:colors.primary,fontSize:15,fontWeight:'bold',marginLeft:10}


})