import React from 'react'
import {SafeAreaView,View,Text,TouchableOpacity,StyleSheet,Image,Modal,Dimensions,BackHandler} from 'react-native'
import colors from '../constants/colors'
import {LinearGradient} from 'expo-linear-gradient'

const screenWidth = Dimensions.get('screen').width

const LogOutModalComponent = ({navigation,visible,outHandler}) => {
return(
    <Modal animationType='fade' transparent= {true} visible= {visible}>
    <SafeAreaView style = {styles.container}>
        <View style = {styles.content}>

        <Text style = {styles.exitTxt}>Are you sure to exit?</Text>



        <View style = {styles.yesAndNoContainer}>


            <TouchableOpacity onPress={() => {BackHandler.exitApp() ,outHandler()}}>

                  
            <LinearGradient colors={['#18c1c9','#3df5ff', '#47b4fc',]} start = {{x : 0,y : 0}} end = {{x:1,y:1}} style = {styles.yesAndNoInnerContainer}>

                <Text style = {styles.yesAndNoTxt}>Yes</Text>

            </LinearGradient>

            </TouchableOpacity>

            <TouchableOpacity  onPress={() => outHandler()}>

            <LinearGradient colors={['#18c1c9','#3df5ff', '#47b4fc',]} start = {{x : 0,y : 0}} end = {{x:1,y:1}} style = {styles.yesAndNoInnerContainer}>

                <Text style = {styles.yesAndNoTxt}>No</Text>

            </LinearGradient>

            </TouchableOpacity>

        </View>

        </View>
    </SafeAreaView>
    </Modal>
)
}

export default LogOutModalComponent;

const styles = StyleSheet.create({

    container : {flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.5)'},

    content : {backgroundColor:colors.white,padding:10,margin:10,borderRadius:10,width:screenWidth/1.5,borderWidth:1,borderColor:'#009ea3'},

    exitTxt : {fontSize:18,fontWeight:'bold',textAlign:'center',color:colors.txt},

    yesAndNoContainer : {flexDirection:'row',alignItems:'center',justifyContent:'space-around',marginTop:30},

    yesAndNoInnerContainer : {backgroundColor:colors.primary,padding:10,borderRadius:10,width:80},

    yesAndNoTxt : {fontSize:16,color:colors.txt,fontWeight:'bold',textAlign:'center'}



})