import React from 'react'
import {SafeAreaView,View,Text,TouchableOpacity,Image,FlatList,StyleSheet} from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import AccommodationScreen from '../screens/AccommodationScreen'
import HelpScreen from '../screens/HelpScreen'
import colors from '../constants/colors'

const tab = createMaterialTopTabNavigator()

const TopTabComponent = ({navigation,route}) => {

    return(
        <SafeAreaView style = {styles.container}>
            <View style = {styles.content}>

            <tab.Navigator>

                
                <tab.Screen name = 'Accommodation' component={AccommodationScreen}/>
                <tab.Screen name = 'Help'          component={HelpScreen}/>

               

            </tab.Navigator>

            </View>
        </SafeAreaView>
    )
}
export default TopTabComponent;

const styles = StyleSheet.create({

    container : {flex:1},

    content : {flex:1,marginTop:20}
})