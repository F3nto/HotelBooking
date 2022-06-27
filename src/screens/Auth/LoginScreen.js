import React,{useState,useEffect} from 'react'
import {ScrollView,SafeAreaView,View,Text,TouchableOpacity,Image,StyleSheet,Dimensions,TextInput,StatusBar,ToastAndroid} from 'react-native'
import colors from '../../constants/colors'
import {LinearGradient} from 'expo-linear-gradient'
import {Input} from 'react-native-elements'
import { auth } from './firebase/firebase'



const screenWidth = Dimensions.get('screen').width
const screenHeight = Dimensions.get('screen').height

const LoginScreen = ({navigation, route}) => {



    const [email, setEmail] = useState('')
    const [pass,  setPass] = useState('')

    const [isSecurePassword, setIsSecurePassword] = useState(true)

 
    const handleSignIn = () => {

        auth.
        signInWithEmailAndPassword(email,pass) 
        .then(credentials => {


            const user = credentials.user

            console.log('Sign in with....', user.email)

            successSignIn()

            navigation.navigate('Drawer')

        })

        .catch((error) => console.log('Sign in error....', error))

    }

    const successSignIn = () => {

        ToastAndroid.showWithGravityAndOffset(

            "Sign in Successful!!!",

            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,  
            25,
            50


        )
    }


       
    // const unSuccessSignIn = () => {

    //     ToastAndroid.showWithGravityAndOffset(

    //         "Sign in Successful!!!",

    //         ToastAndroid.LONG,
    //         ToastAndroid.BOTTOM,
    //         25,
    //         50


    //     )
    // }
  

 
    return(
    
        <SafeAreaView style = {styles.container}>

            <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'}/>

            <View style = {styles.content}>


            <LinearGradient colors={['#037a87','#a3e3ff', '#00d9e0',]} start = {{x : 0,y : 0}} end = {{x:0,y:1}} style = {styles.inputOuterContainer}>

          

            <Input

            inputContainerStyle = {styles.inputStyle}

            placeholder='Email'

            keyboardType='email-address'

            rightIcon = {<Image style = {{width:25,height:25}} source = {require('../../../assets/logemail.png')}/>}
            
            value={email}
            
            onChangeText = {text => setEmail(text)}
            
            />

          

          
            <Input 
            
            inputContainerStyle = {styles.inputStyle}

            placeholder='Password'

            secureTextEntry = {isSecurePassword}

            rightIcon = {

                isSecurePassword ?

                <TouchableOpacity onPress={() => setIsSecurePassword(false)}>
                
                    <Image style = {{width:25,height:25}} source = {require('../../../assets/Icons/hidden.png')} />

                </TouchableOpacity>
        
                :

                <TouchableOpacity onPress={() => setIsSecurePassword(true)}>

                    <Image style = {{width:25,height:25}} source = {require('../../../assets/Icons/eye.png')}/>

                </TouchableOpacity>
                
            }
            
            value={pass}
            
            onChangeText = {text => setPass(text)}
            
            />

            <TouchableOpacity onPress={() => handleSignIn()} style = {styles.loginContainer}>

                <Text style = {styles.loginTxt}>Sign in</Text>

            </TouchableOpacity>


            <View style = {styles.signUpAndBottomTxtContainer}>

                <Text style = {styles.bottomTxt}>Don't you have an acount?</Text>
                

                <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>

                    <Text style = {styles.singUpTxt}>Sign Up here!</Text>

                </TouchableOpacity>
            
            
            
            </View>

            </LinearGradient>

        
            </View>

        </SafeAreaView>


    )
}

export default LoginScreen;

const styles = StyleSheet.create({

    container : {flex:1},

    content : {flex:1,backgroundColor:colors.white},

    inputOuterContainer : {flex:1,borderWidth:1,borderColor:'#00ffea',justifyContent:'center', alignItems:'center'},

    inputStyle : {borderWidth:1,borderColor:'#128a8c',borderRadius:10,marginLeft:20,marginRight:20,paddingLeft:10,paddingRight:10,backgroundColor:colors.white,shadowColor:'#ff00dd',elevation:10,shadowRadius:30},

    loginContainer : {justifyContent:'center',alignItems:'center',padding:10,backgroundColor:'#026e70',width:screenWidth/1.2,borderRadius:10},

    loginTxt : {fontSize:16,fontWeight:'bold',color:colors.white},

    bottomTxt : {fontWeight:'bold',color:colors.txt,marginLeft:-10},

    signUpAndBottomTxtContainer : {flexDirection:'row', alignItems:'center',marginTop:30,marginLeft:20},

    singUpTxt : {marginLeft:5, fontSize:15,fontWeight:'bold', color:'#128a8c',textShadowColor:'#00ffea',elevation:5,textShadowRadius:10}



})