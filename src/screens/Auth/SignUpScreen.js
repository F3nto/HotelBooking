import { SafeAreaView,StyleSheet, Text, View, Image } from 'react-native'
import React,{useState} from 'react'
import HeaderComponent from '../../components/HeaderComponent'
import {Input} from 'react-native-elements'
import colors from '../../constants/colors'
import {LinearGradient} from 'expo-linear-gradient'

const SignUpScreen = ({navigation,route}) => {

    const [name,   setName]     = useState('')
    const [email,  setEmail]    = useState('')
    const [pass,   setPass]     = useState('')
    const [rePass, setRePass]   = useState('')


  return (

    <SafeAreaView style = {styles.container}>

    <HeaderComponent navigation={navigation} title = 'Sign Up Screen' icon='back' />

    <View style = {styles.content}>
    
      <View style = {styles.titleContainer}>

        <Text style = {styles.titleTxt}>Create an account</Text>

        <Image style = {{width:'100%', height :'100%'}} source = {require('../../../assets/croprecep.png')} />

      </View>

      <LinearGradient colors={['#bf80ff','#e8d1ff', '#cf9eff',]} start = {{x : 0,y : 0}} end = {{x:0,y:1}} style = {styles.gradientContainer}>

      <View style = {styles.inputOuterContainer}>

      <Input

        inputContainerStyle = {styles.inputStyle}

        placeholder = 'Name'

        value = {name}

        onChangeText = {text => setName(text)}
      
      />

       <Input

        inputContainerStyle = {styles.inputStyle}

        placeholder = 'Email'

        value = {email}

        onChangeText = {text => setEmail(text)}
      
      />

       <Input

        inputContainerStyle = {styles.inputStyle}

        placeholder = 'Password'

        value = {pass}

        onChangeText = {text => setPass(text)}
      
      />

       <Input

        inputContainerStyle = {styles.inputStyle}

        placeholder = 'Password Again'

        value = {rePass}

        onChangeText = {text => setRePass(text)}
      
      />

    </View>

    </LinearGradient>

    </View>
    </SafeAreaView>
  )
}

export default SignUpScreen;

const styles = StyleSheet.create({

    container : {flex:1},

    content : {flex:1,backgroundColor:colors.white},

    titleContainer : {flex:0.5,marginTop:20,alignItems:'center'},

    titleTxt : {fontSize:18,fontWeight:'bold',color:'#128a8c',textShadowColor:'#00ffea',elevation:5,textShadowRadius:5},

    inputOuterContainer : {backgroundColor:'rgba(0,0,0,0.1)', padding:10,margin:10,borderRadius:10},

    inputStyle : {borderWidth:1,borderColor:'#128a8c',borderRadius:10,marginLeft:20,marginRight:20,paddingLeft:10,paddingRight:10,backgroundColor:colors.white,shadowColor:'#ff00dd',elevation:10,shadowRadius:30},

    gradientContainer : {flex:1,borderTopLeftRadius:30,borderTopRightRadius:30,justifyContent:'center'}
})