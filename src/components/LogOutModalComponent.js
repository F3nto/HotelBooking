import React from 'react'
import {SafeAreaView,View,Text,TouchableOpacity,StyleSheet,Image,Modal,Dimensions} from 'react-native'
import colors from '../constants/colors'

const screenWidth = Dimensions.get('screen').width

const LogOutModalComponent = ({navigation,visible,outHandler}) => {
return(
    <Modal animationType='fade' transparent= {true} visible= {visible}>
    <SafeAreaView style = {styles.container}>
        <View style = {styles.content}>

        <Text style = {styles.exitTxt}>Are you sure to exit?</Text>



        <View style = {styles.yesAndNoContainer}>


            <TouchableOpacity style = {styles.yesAndNoInnerContainer}>

                <Text style = {styles.yesAndNoTxt}>Yes</Text>

            </TouchableOpacity>

            <TouchableOpacity style = {styles.yesAndNoInnerContainer} onPress={() => outHandler()}>

                <Text style = {styles.yesAndNoTxt}>No</Text>

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

    content : {backgroundColor:colors.white,padding:10,margin:10,borderRadius:10,width:screenWidth/1.5,},

    exitTxt : {fontSize:18,fontWeight:'bold',textAlign:'center'},

    yesAndNoContainer : {flexDirection:'row',alignItems:'center',justifyContent:'space-around',marginTop:30},

    yesAndNoInnerContainer : {backgroundColor:colors.primary,padding:10,borderRadius:10,width:80},

    yesAndNoTxt : {fontSize:15,color:colors.white,fontWeight:'bold',textAlign:'center'}



})