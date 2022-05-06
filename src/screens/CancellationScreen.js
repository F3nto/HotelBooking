import React from 'react'
import {SafeAreaView,View,Text,TouchableOpacity,Image,FlatList,StyleSheet} from 'react-native'
import HeaderComponent from '../components/HeaderComponent'
import colors from '../constants/colors'


const CancellationScreen = ({navigation,route}) => {

    return(
        <SafeAreaView style = {styles.container}>
            <HeaderComponent navigation={navigation} title = 'Cancellations' icon= 'back' parentScreenName={'CustomerServiceScreen'}/>
            <View style = {styles.content}>
            
            <View style = {styles.overViewContainer}>
                <Text style = {styles.overViewTxt}>OverView</Text>
            </View>

            <View style = {styles.descContainer}>
                
                <View style = {styles.DescView}>

                    <Image style = {{width:25,height:25,marginTop:10}} source={require('../../assets/square.png')}/>
                    <Text style = {styles.DescTxt}>Not all cancellation policies are created equal, and it’s important to keep this in mind when booking, in case you need to cancel your hotel reservation in the future. Here are some tips for what to look for in a hotel cancellation policy when booking your reservation.</Text>  

                </View>
                
                <View style = {styles.DescView}>

                    <Image style = {{width:25,height:25,marginTop:10}} source={require('../../assets/square.png')}/>
                    <Text style = {styles.DescTxt}>Always search for and read the hotel room cancellation policy for your specific reservation prior to booking. Cancellation policies vary greatly between hotels and booking agencies.</Text>

                </View>

                <View style = {styles.DescView}>

                    <Image style = {{width:25,height:25,marginTop:10}} source={require('../../assets/square.png')}/>
                    <Text style = {styles.DescTxt}>Check to see whether the hotel booking policy for your specific reservation is set by the hotel itself or by the booking agency. This way, you can avoid confusing yourself by looking for the cancellation policy in the wrong place.</Text>

                </View>

                <View style = {styles.DescView}>

                    <Image style = {{width:25,height:25,marginTop:10}} source={require('../../assets/square.png')}/>
                    <Text style = {styles.DescTxt}>Call the hotel or booking agency directly if you have any difficulty understanding the hotel room cancellation policy. In this way, you can ensure that you don’t miss any important information.</Text>
                
                </View>

                <View style = {styles.DescView}>

                    <Image style = {{width:25,height:25,marginTop:10}} source={require('../../assets/square.png')}/>
                    <Text style = {styles.DescTxt}>If cancelling your hotel room is free of charge for cancellations up until a certain date, make a note of this date in your calendar so you’ll know to cancel the reservation beforehand.</Text>
                
                </View>
                
                <View style = {styles.DescView}>

                    <Image style = {{width:25,height:25,marginTop:10}} source= {require('../../assets/square.png')}/>
                    <Text style = {styles.DescTxt}>If you need to cancel a hotel reservation, preparedness is key. Many cancellation policies change within a certain number of days before the reservation itself, so be sure to know as much as you can in order to receive the largest possible refund on your hotel reservation.</Text>
                
                </View>
            </View>

            </View>
        </SafeAreaView>
    )
}
export default CancellationScreen;

const styles = StyleSheet.create({

    container : {flex:1},

    content : {flex:1},

    overViewContainer : {justifyContent:'center', alignItems:'center'},

    overViewTxt : {fontSize:20,fontWeight:'bold',color:colors.primary},

    descContainer : {padding:10,margin:10,borderRadius:10,shadowColor:'#000',elevation:5,backgroundColor:colors.white},

    DescView : {flexDirection:'row'},

    DescTxt : {marginLeft:10,marginTop:10,paddingRight:15}





})