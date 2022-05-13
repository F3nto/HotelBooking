import React,{useState} from 'react'
import {SafeAreaView,View,Text,TouchableOpacity,StyleSheet,Image,Dimensions} from 'react-native'
import HeaderComponent from '../components/HeaderComponent'
import colors from '../constants/colors'

import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps'

const screenWidth = Dimensions.get('screen').width
const screenHeight = Dimensions.get('screen').height

const MapViewScreen = ({navigation,route}) => {

    // const {hotelMap} = route.params

    return(

        <SafeAreaView style = {styles.container}>
            
            <HeaderComponent navigation={navigation} title = 'MapView' icon = 'back'/>

            <View style = {styles.content}>

            <MapView style = {styles.mapView}
            provider = {PROVIDER_GOOGLE}

            initialRegion={{
            
            latitude: 16.844834132432165, 
            longitude: 96.13773183294371,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }}

            >

           

            </MapView>


            </View>

        </SafeAreaView>
    
    )
}
export default MapViewScreen;

const styles = StyleSheet.create({

    container : {flex:1},

    content   : {flex:1},

    mapView : {width:screenWidth,height:screenHeight}



})