import React from 'react'
import {SafeAreaView,View,Text,TouchableOpacity,Image,FlatList,StyleSheet,Dimensions} from 'react-native'

const screenWidth = Dimensions.get('screen').width

const AccommodationScreen = ({navigation,route}) => {

    return(
        <SafeAreaView style = {styles.container}>
            <View style = {styles.content}>

            <TouchableOpacity onPress={() => navigation.navigate('CoronavirusScreen')} style = {styles.commonView}>

                <Text style = {styles.commonTxt}>Coronavirus-related support</Text>

                <Image style = {{width:25,height:25}} source={require('../../assets/Icons/next.png')} />

            </TouchableOpacity>

            <View style = {{width:screenWidth,marginTop:10,height:1,backgroundColor:'#0290a6'}}/>

            
            <TouchableOpacity onPress={() => navigation.navigate('CancellationScreen')} style = {styles.commonView}>

                <Text style = {styles.commonTxt}>Cancellations</Text>

                <Image style = {{width:25,height:25}} source={require('../../assets/Icons/next.png')} />

            </TouchableOpacity>

            <View style = {{width:screenWidth,marginTop:10,height:1,backgroundColor:'#0290a6'}}/>

            <TouchableOpacity onPress={() => navigation.navigate('BookingDetailScreen')} style = {styles.commonView}>

                <Text style = {styles.commonTxt}>Booking Details</Text>

                <Image style = {{width:25,height:25}} source={require('../../assets/Icons/next.png')} />

            </TouchableOpacity>

            <View style = {{width:screenWidth,marginTop:10,height:1,backgroundColor:'#0290a6'}}/>

            
            <TouchableOpacity onPress={() => navigation.navigate('PaymentScreen')} style = {styles.commonView}>

                <Text style = {styles.commonTxt}>Payment</Text>

                <Image style = {{width:25,height:25}} source={require('../../assets/Icons/next.png')} />

            </TouchableOpacity>

            <View style = {{width:screenWidth,marginTop:10,height:1,backgroundColor:'#0290a6'}}/>

            
            <TouchableOpacity onPress={() => navigation.navigate('PricingScreen')} style = {styles.commonView}>

                <Text style = {styles.commonTxt}>Pricing</Text>

                <Image style = {{width:25,height:25}} source={require('../../assets/Icons/next.png')} />

            </TouchableOpacity>

            <View style = {{width:screenWidth,marginTop:10,height:1,backgroundColor:'#0290a6'}}/>

            <TouchableOpacity onPress = {() => navigation.navigate('PropertiesPoliciesScreen')} style = {styles.commonView}>

                <Text style = {styles.commonTxt}>Property policies</Text>

                <Image style = {{width:25,height:25}} source={require('../../assets/Icons/next.png')} />

                </TouchableOpacity>

            <View style = {{width:screenWidth,marginTop:10,height:1,backgroundColor:'#0290a6'}}/>

            <TouchableOpacity onPress={() => navigation.navigate('ExtraFacilitiesScreen')} style = {styles.commonView}>

                <Text style = {styles.commonTxt}>Extra Facilities</Text>

                <Image style = {{width:25,height:25}} source={require('../../assets/Icons/next.png')} />

            </TouchableOpacity>

            <View style = {{width:screenWidth,marginTop:10,height:1,backgroundColor:'#0290a6'}}/>

          
        </View>
        </SafeAreaView>
    )
}
export default AccommodationScreen;

const styles = StyleSheet.create({

    container : {flex:1},

    content : {flex:1,},

    commonView : {flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginRight:15,marginTop:10},

    commonTxt : {marginLeft:15}
    
})