import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Modal, Dimensions  } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import React from 'react'
import colors from '../constants/colors'
import {auth} from '../screens/Auth/firebase/firebase'
import AsyncStorage from '@react-native-async-storage/async-storage'
import countSignAction from '../store/actions/countSign'
import { useDispatch } from 'react-redux'



const screenWidth = Dimensions.get('screen').width


const SignOutModalComponent = ({navigation, route, visible, outHandler}) => {


    const dispatch = useDispatch()


    const signOutHandler = () => {

       

        auth
        .signOut()
        .then(() => {

            AsyncStorage.removeItem('countSign')
            dispatch(countSignAction.addToCountSign(0))
    
            
           
            navigation.replace("LoginScreen")


    
        })
        
        .catch(error => alert(error.massage))
    
    }


    return (

    <Modal animationType='fade' transparent = {true} visible = {visible}>

        <View style = {styles.container}>

            <View style = {styles.content}>

            <Text style = {styles.titleTxt}>Do you want to Exit your account?</Text>

            <View style = {styles.bottomOuterContainer}>

            <TouchableOpacity onPress={() => signOutHandler()}>

            <LinearGradient colors={['#18c1c9','#3df5ff', '#c9fbff',]} start = {{x : 0,y : 0}} end = {{x:1,y:1}} style = {styles.bottomInnerContainer}>

                <Text style = {styles.bottomTxt}>Ok</Text>

            </LinearGradient>

            </TouchableOpacity>

          
            <TouchableOpacity onPress={() => outHandler()}>

                <LinearGradient colors={['#18c1c9','#3df5ff', '#c9fbff',]} start = {{x : 0,y : 0}} end = {{x:1,y:1}} style = {styles.bottomInnerContainer}>

                    <Text style = {styles.bottomTxt}>Cancel</Text>

                </LinearGradient>


            </TouchableOpacity>

            </View>


            </View>

        </View>


    </Modal>


   
  )
}

export default SignOutModalComponent

const styles = StyleSheet.create({

    container : {flex:1, backgroundColor:'rgba(0,0,0,0.8)',alignItems:'center',justifyContent:'center'},

    content : {width:screenWidth/1.4,backgroundColor:colors.white,padding:15,borderRadius:10,borderWidth:1,borderColor:'#3df5ff'},

    titleTxt : {fontSize:18, fontWeight:'bold', color:colors.txt,textAlign:'center'},

    bottomInnerContainer : {width:100,padding:10,borderRadius:10,justifyContent:'center',alignItems:'center'},

    bottomTxt : {fontSize:16,fontWeight:'bold', color:colors.txt},

    bottomOuterContainer : {flexDirection:'row', alignItems:'center',justifyContent:'space-between',marginTop:15},




})