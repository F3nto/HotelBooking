import React from 'react'
import {SafeAreaView,View,Text,TouchableOpacity,StyleSheet,Image,Dimensions,ScrollView} from 'react-native'
import HeaderComponent from '../components/HeaderComponent'
import colors from '../constants/colors'

const screenWidth = Dimensions.get('screen').width

const ProfileScreen = ({navigation,route}) => {

    return(

        <SafeAreaView style = {styles.container}>
        <HeaderComponent navigation={navigation} title = 'ProfileScreen' icon = 'back'/>

        <ScrollView>
        <View style = {styles.content}>

            <View style = {styles.proileOuterView}>

                <Image style = {{width:80,height:80,borderRadius:70}} source= {require('../../assets/tor.jpg')}/>
            
                <Text style = {styles.pfName}>Pyae Sone Tun</Text>
                <Text style = {styles.pfEmail}>pyaesonetun1141999@gmail.com</Text>
            
            
            </View>

            <View style = {styles.flotView}>




            </View>

            <TouchableOpacity style = {styles.iconContainer}>
                
                <Image style = {{width:25,height:25,tintColor:'#0290a6'}} source = {require('../../assets/Icons/acc.png')}/>

                <Text style = {styles.pfTxt}>Manage Your Account</Text>
            
            </TouchableOpacity>

            <TouchableOpacity style = {[styles.iconContainer, {marginTop:15}]}>
                
                <Image style = {{width:25,height:25,tintColor:'#0290a6'}} source = {require('../../assets/Icons/restar.png')}/>

                <Text style = {styles.pfTxt}>Your Reviews</Text>
            
            </TouchableOpacity>

            <TouchableOpacity style = {[styles.iconContainer, {marginTop:15}]}>

                <Image style = {{width:25,height:25,tintColor:'#0290a6'}} source = {require('../../assets/Icons/currency.png')}/>

                <Text style = {styles.pfTxt}>Currency</Text>

            </TouchableOpacity>

            <TouchableOpacity style = {[styles.iconContainer, {marginTop:15}]}>

                <Image style = {{width:25,height:25,tintColor:'#0290a6'}} source = {require('../../assets/Icons/nation.png')}/>

                <Text style = {styles.pfTxt}>Nationality</Text>

            </TouchableOpacity>

            <TouchableOpacity style = {[styles.iconContainer, {marginTop:15}]}>

                <Image style = {{width:25,height:25,tintColor:'#0290a6'}} source = {require('../../assets/Icons/languages.png')}/>

                <Text style = {styles.pfTxt}>Language</Text>

            </TouchableOpacity>

            <View style = {{width:screenWidth/1.2,marginLeft:20,marginTop:15,height:1,backgroundColor:'#0290a6'}}/>

            <TouchableOpacity style = {[styles.iconContainer, {marginTop:15}]}>

                <Image style = {{width:25,height:25,tintColor:'#0290a6'}} source = {require('../../assets/Icons/pfwishlist.png')}/>

                <Text style = {styles.pfTxt}>Your WishList</Text>

            </TouchableOpacity>

            <TouchableOpacity style = {[styles.iconContainer, {marginTop:15}]}>

                <Image style = {{width:25,height:25,tintColor:'#0290a6'}} source = {require('../../assets/Icons/bookinglist.png')}/>

                <Text style = {styles.pfTxt}>Booking List</Text>

            </TouchableOpacity>

            <View style = {{width:screenWidth/1.2,marginLeft:20,marginTop:15,height:1,backgroundColor:'#0290a6'}}/>

            <Text style = {styles.helpAndSupView}>Help and Support</Text>

            <TouchableOpacity style = {[styles.iconContainer, {marginTop:15}]}>

                <Image style = {{width:25,height:25,tintColor:'#0290a6'}} source = {require('../../assets/Icons/help.png')}/>

                <Text style = {styles.pfTxt}>Customer Service</Text>

            </TouchableOpacity>

            <TouchableOpacity style = {[styles.iconContainer, {marginTop:15}]}>

                <Image style = {{width:25,height:25,tintColor:'#0290a6'}} source = {require('../../assets/Icons/safe.png')}/>

                <Text style = {styles.pfTxt}>Safety Resource Centre</Text>

            </TouchableOpacity>

            <TouchableOpacity style = {[styles.iconContainer, {marginTop:15}]}>

                <Image style = {{width:25,height:25,tintColor:'#0290a6'}} source = {require('../../assets/Icons/contact-us.png')}/>

                <Text style = {styles.pfTxt}>Contact Us</Text>

            </TouchableOpacity>

            <View style = {{width:screenWidth/1.2,marginLeft:20,marginTop:15,height:1,backgroundColor:'#0290a6'}}/>
            
            <TouchableOpacity style = {[styles.iconContainer, {marginTop:15,marginBottom:15}]}>

                <Image style = {{width:25,height:25,tintColor:'#e61902'}} source = {require('../../assets/Icons/log-out.png')}/>

                <Text style = {[styles.pfTxt,{color:'#e61902'}]}>Log Out</Text>

            </TouchableOpacity>

        </View>
        </ScrollView>
        </SafeAreaView>

    )

}

export default ProfileScreen;

const styles = StyleSheet.create({

    container : {flex:1},

    content : {flex:1,},

    proileOuterView : {backgroundColor:'#0290a6',height:250,justifyContent:'center',alignItems:'center'},

    pfName : {fontSize:20,fontWeight:'bold',color:colors.white},

    pfEmail : {fontSize:14,color:colors.grey},

    flotView : {backgroundColor:colors.white,
                height:100,width:screenWidth/1.5,top:-30,
                marginLeft:60,borderRadius:15,
                shadowColor:'#08deff',elevation:5},

    iconContainer : {flexDirection:'row', alignItems:'center',marginLeft:20},

    pfTxt : {marginLeft:10, fontSize:14},

    helpAndSupView : {fontSize:16,fontWeight:'bold',marginTop:15,marginLeft:20}




})