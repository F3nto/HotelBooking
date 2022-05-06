import React from 'react'
import {SafeAreaView,View,Text,TouchableOpacity,Image,FlatList,StyleSheet,Dimensions,ScrollView} from 'react-native'
import HeaderComponent from '../components/HeaderComponent'
import colors from '../constants/colors'

const screenWidth = Dimensions.get('screen').width

const PropertiesPoliciesScreen = ({navigation,route}) => {

    return(
        <SafeAreaView style = {styles.container}>
            <HeaderComponent navigation={navigation} title= 'Property Policies' icon = 'back' parentScreenName={'CustomerServiceScreen'}/>
            <ScrollView>
            <View style = {styles.content}>

            <View style = {styles.commonView}>

                <Text style = {styles.commonTxt}>I want to check out after the stated check-out time. What should I do?</Text>

                <Text style = {styles.commonDesc}>You can asked the property about arranging a late check-out when you get there. Just be aware that it depends on what's available at the time of your stay.</Text>

            </View>

            <View style = {styles.commonView}>

                <Text style = {styles.commonTxt}>What are check-in and check-out times of a property?</Text>

                <Text style = {styles.commonDesc}>Check-in and check-out times differ for each property. If you've already made a booking, you can see check-in and check-out time in your confirmation email and when you log into your account.</Text>

            </View>

            <View style = {styles.commonView}>

                <Text style = {styles.commonTxt}>How do I find out if a property allows pets?</Text>

                <Text style = {styles.commonDesc}>Pet policies are always displayed on the property's page under "House Rules"</Text>

            </View>

            <View style = {styles.commonView}>

                <Text style = {styles.commonTxt}>I want a smoking room however I can only choose a non-smoking room. How can I request a moking room?</Text>

                <Text style = {styles.commonDesc}>If there are no smoking rooms listed it means that the hotel does not allow smoking in rooms.</Text>


            </View>


            </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default PropertiesPoliciesScreen;

const styles = StyleSheet.create({

    container : {flex:1},

    content : {flex:1},

    commonView : {backgroundColor:colors.white,padding:10,borderRadius:10,shadowColor:'#000',elevation:5,margin:10},

    commonTxt : {fontSize:18,fontWeight:'bold',width:screenWidth/1.2},

    commonDesc : {fontSize:15,marginTop:10},



})