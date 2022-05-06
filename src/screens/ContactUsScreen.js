import React from 'react'
import {SafeAreaView,View,Text,TouchableOpacity,Image,FlatList,StyleSheet,Dimensions} from 'react-native'
import HeaderComponent from '../components/HeaderComponent'
import colors from '../constants/colors'

const screenWidth = Dimensions.get('screen').width


const ContactUsScreen = ({navigation,route}) => {

    return(
        <SafeAreaView style = {styles.container}>
            <HeaderComponent navigation={navigation} title = 'Contact Us' parentScreenName={'CustomerServiceScreen'}/>
            <View style = {styles.content}>

            <View style = {styles.FirsView}>

                <Text style = {styles.FirsTitle}>Anytime you need to Help</Text>

                <View style = {styles.TitleView}>

                    <Image style = {{width:25,height:25}} source = {require('../../assets/facebook.png')}/>

                    <Text style = {styles.TitleTxt}>www.facebook.com/booking.com</Text>

                </View>

                <View style = {[styles.TitleView, {marginRight:140}]}>

                    <Image style = {{width:25,height:25,}} source = {require('../../assets/phone.png')}/>

                    <Text style = {styles.TitleTxt}>09-754199668</Text>

                </View>

                <View style = {[styles.TitleView, {marginRight:20}]}>

                    <Image style = {{width:25,height:25,}} source = {require('../../assets/twitter.png')}/>

                    <Text style = {styles.TitleTxt}>http://twitter.com/booking.com</Text>

                </View>

                <View style = {[styles.TitleView, {marginRight:60}]}>

                    <Image style = {{width:25,height:25}} source = {require('../../assets/gmail.png')}/>

                    <Text style = {styles.TitleTxt}>booking9999@gmail.com</Text>

                </View>

            </View>

            <View style = {styles.FirsView}>

                <Text style = {styles.addressTxt}>Address</Text>

                <View style = {{flexDirection:'row', alignItems:'center',marginTop:10}}>

                    <Image style = {{width:25,height:25,marginRight:10}} source = {require('../../assets/location.png')}/>

                    <Text>No.3, Diamond Tower, Third floor, Yankin Township, Yangon</Text>

                </View>

            </View>

            <View style = {styles.FirsView}>

                <View style = {{flexDirection:'row',}}>

                    <Image style = {{width:25,height:25,marginLeft:10}} source = {require('../../assets/info.png')}/>

                    <Text style = {{marginLeft:10,width:screenWidth/1.2}}>We are Southeast Asia's largest and fastest growing, technology-driven hotel management and booking platform.</Text>
                
                </View>

                 <View style = {{flexDirection:'row',marginTop:10}}>

                    <Image style = {{width:25,height:25,marginLeft:10}} source = {require('../../assets/info.png')}/>

                    <Text style = {{marginLeft:10,width:screenWidth/1.2}}>Customers who book in Booking.com can expect to enjoy a great experience across all our properties at the best affordable prices in the market.</Text>
                
                </View>

                 <View style = {{flexDirection:'row',marginTop:10,}}>

                    <Image style = {{width:25,height:25,marginLeft:10}} source = {require('../../assets/info.png')}/>

                    <Text style = {{marginLeft:10,width:screenWidth/1.2}}>As a part of the Booking.com brand network, hotel owners are able to grow their business and increase revenues while streamling thier operations.</Text>
                
                </View>
            </View>



            </View>
        </SafeAreaView>
    )
}
export default ContactUsScreen;

const styles = StyleSheet.create({

    container : {flex:1},

    content : {flex:1},

    FirsView : {backgroundColor:colors.white,margin:10,padding:20,borderRadius:10,shadowColor:'#08deff',elevation:5,justifyContent:'center',alignItems:'center'},

    FirsTitle : {fontSize:18, fontWeight:'bold', color:colors.primary},

    TitleView : {flexDirection:'row', alignItems:'center',marginTop:15},

    TitleTxt : {fontSize:16,marginLeft:10},

    addressTxt : {fontSize:16,fontWeight:'bold',color:colors.primary,}


})