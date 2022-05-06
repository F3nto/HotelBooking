import React from 'react'
import {SafeAreaView,View,Text,TouchableOpacity,Image,FlatList,StyleSheet,Dimensions,ScrollView} from 'react-native'
import HeaderComponent from '../components/HeaderComponent'
import colors from '../constants/colors'

const screenWidth = Dimensions.get('screen').width

const ExtraFacilitiesScreen = ({navigation,route}) => {

    return(
        <SafeAreaView style = {styles.container}>
            <HeaderComponent navigation={navigation} title = 'Extra Facilities' icon = 'back' parentScreenName={'CustomerServiceScreen'}/>
            <View style = {styles.content}>
            
            <View style = {styles.commonView}>

                <Text style = {styles.commonTxt}>How do I know if there is parking at the property and how can I reserve it?</Text>

                <Text style = {styles.commonDesc}>You can see wherether or not the property has parking under "facilities" before you make a booking. If the property requires you to reserve a space, please contact them directly with the contact details provided in your booking confirmation.</Text>

            </View>

             
            <View style = {styles.commonView}>

                <Text style = {styles.commonTxt}>How do I find out if a property has a certain facilitiy (e.g. a lift)</Text>

                <Text style = {styles.commonDesc}>Under 'Facilities' on the property page, you can see a list of all the property's facilities, activities and services.</Text>

            </View>

             
            <View style = {styles.commonView}>

                <Text style = {styles.commonTxt}>Can the property store my luggage before check-in or after check-out?</Text>

                <Text style = {styles.commonDesc}>If the property has luggage storage, you'll see it displayed on the property page under "Facilities". For more information about lugguage storage, please reach out to the property directly using the contact details provided in your booking confiramtion.</Text>

            </View>


        </View>
        </SafeAreaView>
    )
}
export default ExtraFacilitiesScreen;

const styles = StyleSheet.create({

    container : {flex:1},

    content : {flex:1},

    commonView : {backgroundColor:colors.white,padding:10,borderRadius:10,shadowColor:'#000',elevation:5,margin:10},

    commonTxt : {fontSize:18,fontWeight:'bold',width:screenWidth/1.2},

    commonDesc : {fontSize:15,marginTop:10},

})