import React,{useState} from 'react'
import {SafeAreaView,View,Text,TouchableOpacity,StyleSheet,Image,Dimensions,FlatList,Platform} from 'react-native'
import HeaderComponent from '../components/HeaderComponent'
import colors from '../constants/colors'

import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps'


const screenWidth = Dimensions.get('screen').width
const screenHeight = Dimensions.get('screen').height



const MapViewScreen = ({navigation,route}) => {

    const {lat, long, } = route.params

    return(

        <SafeAreaView style = {styles.container}>
            
            <HeaderComponent navigation={navigation} title = 'MapView' icon = 'back' parentScreenName={'DetailScreen'}/>

            <View style = {styles.content}>

            
            <MapView style = {styles.mapView}
            
                provider = {PROVIDER_GOOGLE}
                

                region = {{
                    
                    latitude : lat,
                    longitude : long,
                    latitudeDelta : 0.0922,
                    longitudeDelta :  0.0421,

                }}
                    
            >

                <Marker
                
                coordinate={{latitude : lat, longitude: long}}
                
                image = {require('../../assets/Icons/maploc.png')}
               
                >


                </Marker>

              
            </MapView>
    
               
        
            </View>

        </SafeAreaView>
    
    )
}
export default MapViewScreen;

const styles = StyleSheet.create({

    container : {flex:1},

    content   : {flex:1},

    mapView : {width:screenWidth, height:screenHeight},

    calloutView : {padding:10,backgroundColor:colors.white,justifyContent:'center', alignItems:'center'}



})