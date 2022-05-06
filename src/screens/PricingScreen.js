import React from 'react'
import {SafeAreaView,View,Text,TouchableOpacity,Image,FlatList,StyleSheet,Dimensions,ScrollView} from 'react-native'
import HeaderComponent from '../components/HeaderComponent'
import colors from '../constants/colors'

const screenWidth = Dimensions.get('screen').width

const PricingScreen = ({navigation,route}) => {

    return(
        <SafeAreaView style = {styles.container}>

            <HeaderComponent navigation={navigation} title='Pricing Details Information' icon= 'back' parentScreenName={'CustomerServiceScreen'}/>  
            <ScrollView>
            <View style = {styles.content}>

            <View style = {styles.commonView}>

                <Text style = {styles.commonTxt}>Is breakfast included in the price?</Text>

                <Text style = {styles.commonDesc}>Each room or accommodation that you can book has its own policy. If breakfast is included, you will see it listed on the property page when you compare different options to book. If breakfast isn't included, you can see if the property provides it by checking the available facilities.</Text>

            </View>

            <View style = {styles.commonView}>

                <Text style = {styles.commonTxt}>Where does the price include?</Text>

                <Text style = {styles.commonDesc}>All the facilities listed under the room or accommodation type are included in the price. You can also see if other things like breakfast, taxes or service charges are included when you compare different options to book. After you book, this information can also be found in your confirmation email, and you can see it when you review your bookings in your account.</Text>

            </View>

            <View style = {styles.commonView}>

                <Text style = {styles.commonTxt}>Are taxes included in the price?</Text>

                <Text style = {styles.commonDesc}>This depends on the property and accommodation type, but it's easy to see what's included when you compare different options to book. Tax requirements change from country to country so it's always good to check. After you book, this information can also be found in your confirmation email, and you can see it when you view your bookings in your account.</Text>

            </View>

            <View style = {styles.commonView}>

                <Text style = {styles.commonTxt}>Do I pay a reservation fee to Booking.com?</Text>

                <Text style = {styles.commonDesc}>No, we do not charge any fees at all.</Text>

            </View>

            


            </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default PricingScreen;

const styles = StyleSheet.create({

    container : {flex:1},

    content : {flex:1},

    commonView : {backgroundColor:colors.white,padding:10,borderRadius:10,shadowColor:'#000',elevation:5,margin:10},

    commonTxt : {fontSize:18,fontWeight:'bold',width:screenWidth/1.2},

    commonDesc : {fontSize:15,marginTop:10},



})