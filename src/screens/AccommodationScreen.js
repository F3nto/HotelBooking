import React from 'react'
import {SafeAreaView,View,Text,TouchableOpacity,Image,FlatList,StyleSheet} from 'react-native'


const AccommodationScreen = ({navigation,route}) => {

    return(
        <SafeAreaView style = {styles.container}>
            <View style = {styles.content}>

            <Text>Accommodation</Text>


            </View>
        </SafeAreaView>
    )
}
export default AccommodationScreen;

const styles = StyleSheet.create({

    container : {flex:1},

    content : {flex:1,justifyContent:'center',alignItems:'center'}



})