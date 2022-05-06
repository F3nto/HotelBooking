import React from 'react'
import {SafeAreaView,View,Text,TouchableOpacity,Image,FlatList,StyleSheet,Dimensions,ScrollView} from 'react-native'
import colors from '../constants/colors'
import HeaderComponent from '../components/HeaderComponent'

const screenWidth = Dimensions.get('screen').width

const BookingDetailScreen = ({navigation,route}) => {

    return(
        <SafeAreaView style = {styles.container}>
            <HeaderComponent navigation={navigation} title='Booking Detail' icon='back' parentScreenName={'CustomerServiceScreen'}/>
            <ScrollView>
            <View style = {styles.content}>

            <View style = {styles.commonView}>

                <Text style = {styles.commonTxt}>How do I get more information about the room or property's facilities?</Text>
                <Text style = {styles.commonDesc}>You can find the room and property facilities in your booking confirmation.</Text>

            </View>

            <View style = {styles.commonView}>

                <Text style = {styles.commonTxt}>Is it possible to get an extra bed or cot for a child?</Text>
                <Text style = {styles.commonDesc}>It depends on the property's policy. Additional costs for children, including extra beds/cots, are not included in the reservation price.Please contact the property directly for this information.</Text>

            </View>
            
            <View style = {styles.commonView}>

                <Text style = {styles.commonTxt}>How can I get an invoice?</Text>
                <Text style = {styles.commonDesc}>The property can provide you with an invoice for your stay, so please contact them directly.</Text>

            </View>

            <View style = {styles.commonView}>

                <Text style = {styles.commonTxt}>I can't find my confirmation email. What should I do?</Text>
                <Text style = {styles.commonDesc}>Be sure to check your email inbox, spam and Junk folders.If you still can't find your confirmation, go to booking.com/help and we'll resend it to you.</Text>

            </View>
            
            <View style = {styles.commonView}>

                <Text style = {styles.commonTxt}>Will I pay the full price for my children?</Text>
                <Text style = {styles.commonDesc}>Additional costs for children, if any, are not included in the reservation price.Please check width the property directly to see if and when you'll pay for your children.</Text>

            </View>

            <View style = {styles.commonView}>

                <Text style = {styles.commonTxt}>What's the difference between a Double room and a Twin room?</Text>
                <Text style = {styles.commonDesc}>A Double Room has one double bed and a Twin Room has two sigle beds. If a room is called Double/Twin, it can be set up for either type. The property will do its best to accommodate your needs.</Text>

            </View>

            <View style = {styles.commonView}>

                <Text style = {styles.commonTxt}>I will be arriving outside check-in hours. Can I still check-in.</Text>
                <Text style = {styles.commonDesc}>This depends on the property who will do their best to meet your needs.but cannot guarantee your request. You can do either of the following: Request an early or late check-in/check-out Contact the property.</Text>

            </View>

            </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default BookingDetailScreen;

const styles = StyleSheet.create({

    container : {flex:1},

    content : {flex:1},

    commonView : {backgroundColor:colors.white,padding:10,borderRadius:10,shadowColor:'#000',elevation:5,margin:10},

    commonTxt : {fontSize:18,fontWeight:'bold',width:screenWidth/1.2},

    commonDesc : {fontSize:15,marginTop:10},

})