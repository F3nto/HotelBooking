import React from 'react'
import {SafeAreaView,View,Text,TouchableOpacity,Image,FlatList,StyleSheet,Dimensions,ScrollView} from 'react-native'
import HeaderComponent from '../components/HeaderComponent'
import colors from '../constants/colors'

const screenWidth = Dimensions.get('screen').width

const PaymentScreen = ({navigation,route}) => {

    return(
        <SafeAreaView style = {styles.container}>
            <HeaderComponent navigation={navigation} title = 'Payment Detail Information' icon = 'back' parentScreenName={'CustomerServiceScreen'}/>
            <ScrollView>
            <View style = {styles.content}>

            <View style = {styles.commonView}>

                <Text style = {styles.commonTxt}>What payment methods are accepted?</Text>

                <Text style = {styles.commonDesc}>Credit cards are the most widely-accepted payment method of properties listed on Booking.com and most of them use credit cards to validate your booking.</Text>
                <Text style = {styles.commonDesc}>In some cases alternative payment methods such as Paypal etc.are also accepted. There are some exceptions to this, where it may be possible to book with a debit card.</Text>

            </View>

            
            <View style = {styles.commonView}>

                <Text style = {styles.commonTxt}>Can I pay with a deposit, or perpayment?</Text>

                <Text style = {styles.commonDesc}>Some of our properties require a perpayment, also known as a deposit, before you stay. This prepayment can be up to the total cost of the booking, or just part of it. The rest is then paid when you stay at the property.</Text>
                
            </View>

            
            <View style = {styles.commonView}>

                <Text style = {styles.commonTxt}>Where can I see the payment policy for my booking?</Text>

                <Text style = {styles.commonDesc}>You can find the payment policy in your booking confirmation, in the pricing section. This section also includes a price breakdown, and the accepted payment methods.</Text>
                
            </View>

            
            <View style = {styles.commonView}>

                <Text style = {styles.commonTxt}>Why do I need to provide my card details?</Text>

                <Text style = {styles.commonDesc}>Properties normally request this to gurantee your booking, and the card is often used to pay when you book. If you don't need to make a prepayment, then they may hold an amount on your card to ensure it has sufficient funds. This test payment will be returned to you.</Text>
                
            </View>


            </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default PaymentScreen;

const styles = StyleSheet.create({

    container : {flex:1},

    content : {flex:1},

    commonView : {backgroundColor:colors.white,padding:10,borderRadius:10,shadowColor:'#000',elevation:5,margin:10},

    commonTxt : {fontSize:18,fontWeight:'bold',width:screenWidth/1.2},

    commonDesc : {fontSize:15,marginTop:10},



})