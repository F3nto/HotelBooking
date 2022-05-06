import React from 'react'
import {SafeAreaView,View,Text,TouchableOpacity,Image,FlatList,StyleSheet,Dimensions,ScrollView} from 'react-native'
import HeaderComponent from '../components/HeaderComponent'
import colors from '../constants/colors'

const screenWidth = Dimensions.get('screen').width

const CoronavirusScreen = ({navigation,route}) => {

    return(
        <SafeAreaView style = {styles.container}>
            <HeaderComponent navigation={navigation} title='Coronavirus Support' parentScreenName={'CustomerServiceScreen'}/>
            <ScrollView>
            <View style = {styles.content}>


            <View style = {{justifyContent:'center',alignItems:'center'}}>

                <Text style = {styles.titleTxt}>Coronavirus Related Support</Text>
                <Image style = {{width:50,height:50,marginTop:10}} source={require('../../assets/who.png')}/>

            </View>

            <View style = {styles.commonView}>
            
                <Text style = {styles.commonTxt}>What can staff do to stay safe while working at a hotel or other accommodation establishment?</Text>
            
                <Text style = {styles.everyoneTxt}>Everyone should follow basic precautions:</Text>

                <Text style = {styles.commonDesc}>Wash all parts of your hands frequently (at least 20 seconds if using an alcohol-based hand rub, and at least 40 seconds with soap and water), including after exchanging objects such as money or credit cards with guests.</Text>
                <Text style = {styles.commonDesc}>Cover a cough or sneeze with a bent elbow or tissue and throw away the tissue in a closed bin.</Text>
                <Text style = {styles.commonDesc}>Maintain at least a 1 metre distance from other staff and guests. This includes avoid hugging, kissing, or shaking hands. If you can’t guarantee the distance, wear a fabric mask. Be sure to check local and national guidelines on the use of masks.</Text>

            </View>

            <View style = {styles.commonView}>

                <Text style = {styles.commonTxt}>Should staff wear a mask while working?</Text> 
                <Text style = {styles.commonDesc}>In areas where the virus that causes COVID-19 is circulating, staff aged 60 or over, or who have any underlying health conditions such as heart disease, diabetes or lung cancer, should wear a medical mask because of their higher risk of getting seriously ill from COVID-19.</Text>
                <Text style = {styles.commonDesc}>Staff under the age of 60 and who are in general good health can wear fabric masks when they cannot guarantee at least a 1 metre distance from others. This is particularly important for staff who are in close contact or potential close contact with others. Everyone should follow local policies and regulations.</Text>

            </View>

            <View style = {styles.commonView}>

                <Text style = {styles.commonTxt}>What should staff do if a guest becomes sick at an accommodation establishment?</Text>
                <Text style = {styles.commonDesc}>If a guest at the accommodation develops symptoms of COVID-19, such as fever, dry cough or tiredness, staff at the accommodation establishment should contact the local health authority and follow their instructions. The sick person should be isolated in a room, alone, or at least 1 metre away from others, according to local health authorities’ instructions. No visitors should be permitted to enter the room occupied by the affected guest. Staff should also move people traveling with the sick person to a different room, if possible.</Text>
                <Text style = {styles.commonDesc}>It is usually the relevant public health authority, not the management of the hotel and accommodation establishment, which has the authority to demand sick guests to temporarily remain in their room or to prevent them from receiving visits from other guests. National law will guide the rights of the guests to refuse or not the recommended measures.</Text>
                <Text style = {styles.commonDesc}>Staff entering the room of an ill person should maintain at least a 1 metre distance from the ill person, and request that the ill person put on a medical mask. </Text>
                <Text style = {styles.commonDesc}>If staff need to assist an ill guest within a 1 metre distance, they should clean their hands before putting on appropriate personal protective equipment (medical mask and eye protection, gloves and isolation gown), and clean their hands after providing assistance. Training should be provided on how to avoid contaminating themselves.</Text>

            </View>


            <View style = {styles.commonView}>

                <Text style = {styles.commonTxt}>What should staff do if they have symptoms?</Text>
                <Text style = {styles.commonDesc}>If staff develop COVID-19 symptoms while at work, such as fever, dry cough or tiredness, they should immediately stop working, put on a medical mask and isolate in a suitable room while medical services are notified. Disposable tissues and an appropriate waste bin with a lid should be available in the designated isolation area while waiting for medical assessment or transfer to an assessment facility.</Text>
                <Text style = {styles.commonDesc}>If staff develop symptoms while at home, they should stay at home and seek medical attention, following instructions from a health worker that will include a period of time for self-isolation away from others, including family members, according to local guidance.  The staff member should inform the management accordingly.</Text>

            </View>

            </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default CoronavirusScreen;

const styles = StyleSheet.create({

    container : {flex:1},

    content : {flex:1},

    titleTxt : {fontSize:20,fontWeight:'bold',},

    commonView : {backgroundColor:colors.white,padding:10,borderRadius:10,shadowColor:'#000',elevation:5,margin:10},

    commonTxt : {fontSize:18,fontWeight:'bold',width:screenWidth/1.2},

    commonDesc : {fontSize:15,marginTop:10},

    everyoneTxt : {fontSize:15,marginTop:10,fontWeight:'bold'},

   



})