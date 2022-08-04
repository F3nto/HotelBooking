import { SafeAreaView,StyleSheet, Text, View, Image ,TouchableOpacity,ToastAndroid} from 'react-native'
import React,{useState,useEffect} from 'react'
import HeaderComponent from '../../components/HeaderComponent'
import AsyncStorage from '@react-native-async-storage/async-storage'
import authAction from '../../store/actions/auth'
import wishListAction from '../../store/actions/wishList'
import bookingListAction from '../../store/actions/bookingList'
import bookingQtyAction from '../../store/actions/bookingQty'
import wishListQtyAction from '../../store/actions/wishListQty'
import countSignAction from '../../store/actions/countSign'
import reviewListAction from '../../store/actions/reviewList'
import emailAction from '../../store/actions/email'
import {Input} from 'react-native-elements'
import colors from '../../constants/colors'
import {LinearGradient} from 'expo-linear-gradient'
import { auth } from './firebase/firebase'
import {useDispatch,useSelector} from 'react-redux'



const SignUpScreen = ({navigation,route}) => {

    const [name,   setName]     = useState('')
    const [email,  setEmail]    = useState('')
    const [pass,   setPass]     = useState('')
    const [rePass, setRePass]   = useState('')

    const [isSecurePassword, setIsSecurePassword] = useState(true)
    const [isSecureRePassword, setIsSecureRePassword] = useState(true)

    const [emailValid, setEmailValid]   = useState('')
    const [passValid, setPassValid]     = useState('')
    const [rePassValid, setRePassValid] = useState('')

    const dispatch = useDispatch()


    const successRegister = () => {

      ToastAndroid.showWithGravityAndOffset(

        
        "Sign up SuccessFul!",

        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,

        25,
        50

      )
    
    }


    

    const unsuccessRegister = () => {

    

      ToastAndroid.showWithGravityAndOffset(

      
        "Sorry, Register Unsuccessful!!",

        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        
        25,
        50

      )

    

    


    }

    

    const handleSignUp = () => {

      AsyncStorage.removeItem('userInfo')
      dispatch(authAction.addToAuth([]))

      AsyncStorage.removeItem('email')
      dispatch(emailAction.saveToEmail([]))

      AsyncStorage.removeItem('wishList')
      dispatch(wishListAction.addToWishList([]))

      AsyncStorage.removeItem('wishListQty')
      dispatch(wishListQtyAction.addToWishListQty(0))

      AsyncStorage.removeItem('bookingList')
      dispatch(bookingListAction.addToBookingList([]))

      AsyncStorage.removeItem('bookingQty')
      dispatch(bookingQtyAction.addToBookingQty(0))

      AsyncStorage.removeItem('reviewList')
      dispatch(reviewListAction.addToReviewList([]))

      let signNum = 0;

      AsyncStorage.getItem('countSign').then((res) => {

        let countSignData = JSON.parse(res)


        signNum += 1

        countSignData = signNum

        console.log('Counting start....', countSignData)

        AsyncStorage.setItem('countSign', JSON.stringify(countSignData))
        dispatch(countSignAction.addToCountSign(countSignData))
          
        
        })
        .catch((error) => {

          console.log('error....', error)


        })
    

        if(name != '' && emailValid == '' && passValid == '' && rePassValid == ''){

          AsyncStorage.getItem('userInfo').then((res) => {

          const responseData = JSON.parse(res)
  
          let userInfoArr = []
  
          if(responseData == null){
  
            userInfoArr.push(name)
  
  
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfoArr))
            dispatch(authAction.addToAuth(userInfoArr))
    
          }else{
  
            responseData.push(name)
  
            AsyncStorage.setItem('userInfo', JSON.stringify(responseData))
            dispatch(authAction.addToAuth(responseData))
  
  
          }
          })
          .catch((error) => {console.log(error)})

          AsyncStorage.getItem('email').then((res) => {

          const emailData = JSON.parse(res)

          let emailArr = []

          if(emailData == null){

            emailArr.push(email)

            AsyncStorage.setItem('email', JSON.stringify(emailArr))
            dispatch(emailAction.saveToEmail(emailArr))
            
          }else{

            emailData.push(email)

            
            AsyncStorage.setItem('email', JSON.stringify(emailData))
            dispatch(emailAction.saveToEmail(emailData))


          }

        })
        .catch((error) => console.log(error))
  

   
      auth.createUserWithEmailAndPassword(email,pass)
      .then(credentials => {

        
        const user = credentials.user
        
        console.log('Sign up with.....' , user.email)

      
        
        successRegister()

        navigation.navigate('Drawer')

        setName('')
        setEmail('')
        setPass('')
        setRePass('')

      })

      .catch((error) => alert(error.massage))

    }else {

      
      unsuccessRegister()


    }

    }


    const emailValidation = (value) => {

      let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

      if(emailPattern.test(value) === false){

        setEmailValid('Please Enter Valid Email Address!')

      }else{
 
        setEmailValid('')


      }

    }

    const passwordValidation = (value) => {

      if(value.length < 6){

        setPassValid('Please Enter at least 6 characters')


      }else{

        setPassValid('')


      }

    }

    const rePassValidation = (value) => {

      if(value == pass){

        setRePassValid('')


      }else{

        setRePassValid('Please Enter the same password')


      }
    }



  return (

    <SafeAreaView style = {styles.container}>

    <View style = {styles.content}>
    
      <View style = {styles.titleContainer}>

        <Text style = {styles.titleTxt}>Create an account</Text>

        <Image style = {{width:'100%', height :'100%'}} source = {require('../../../assets/croprecep.png')} />

      </View>

      <LinearGradient colors={['#bf80ff','#e8d1ff', '#cf9eff',]} start = {{x : 0,y : 0}} end = {{x:0,y:1}} style = {styles.gradientContainer}>


      <Input

        inputContainerStyle = {styles.inputStyle}

        
        placeholder = 'Full Name'

        value = {name}

        onChangeText = {text => setName(text)}

        rightIcon = {<Image style = {{width:25,height:25}} source = {require('../../../assets/Icons/loginname.png')}/>}
      
      />

       <Input

        inputContainerStyle = {styles.inputStyle}

        placeholder = 'Email'

        keyboardType='email-address'

        errorMessage={<Text style = {styles.errorMessage}>{emailValid}</Text>}

        value = {email}

        onChangeText = {(text) => {emailValidation(text) ,setEmail(text)}}

        rightIcon = {<Image style = {{width:25,height:25}} source = {require('../../../assets/mail.png')}/>}
      
      />

       <Input

        inputContainerStyle = {styles.inputStyle}

        placeholder = 'Password'

        value = {pass}

        secureTextEntry = {isSecurePassword}

        errorMessage = {<Text style = {styles.errorMessage}>{passValid}</Text>}

        onChangeText = {text => {passwordValidation(text), setPass(text)}}

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
      
      />

       <Input

        inputContainerStyle = {styles.inputStyle}

        placeholder = 'Repeat Password'

        value = {rePass}

        secureTextEntry = {isSecureRePassword}

        errorMessage = {<Text style = {styles.errorMessage}>{rePassValid}</Text>}

        onChangeText = {text => {rePassValidation(text), setRePass(text)}}

        rightIcon = {

          isSecureRePassword ?

          <TouchableOpacity onPress={() => setIsSecureRePassword(false)}>
          
              <Image style = {{width:25,height:25}} source = {require('../../../assets/Icons/hidden.png')} />

          </TouchableOpacity>
  
          :

          <TouchableOpacity onPress={() => setIsSecureRePassword(true)}>

              <Image style = {{width:25,height:25}} source = {require('../../../assets/Icons/eye.png')}/>

          </TouchableOpacity>
          
      }
      
      
      />

      <TouchableOpacity onPress={() => handleSignUp()} style = {styles.signupBtnContainer}>


        <Text style = {styles.signupTxt}>Sign Up</Text>


      </TouchableOpacity>

    </LinearGradient>

    </View>
    </SafeAreaView>
  )
}

export default SignUpScreen;

const styles = StyleSheet.create({

    container : {flex:1},

    content : {flex:1,backgroundColor:colors.white},

    titleContainer : {flex:0.5,marginTop:40,alignItems:'center'},

    titleTxt : {fontSize:20,fontWeight:'bold',color:'#bf80ff',textShadowColor:'#ff00dd',textShadowRadius:3},

    inputStyle : {borderWidth:1,borderColor:'#ff00dd',borderRadius:10,marginLeft:20,marginRight:20,paddingLeft:15,paddingRight:15,marginTop:10,backgroundColor:colors.white,shadowColor:'#ff00dd',elevation:10,shadowRadius:30},

    gradientContainer : {flex:1,borderTopLeftRadius:30,borderTopRightRadius:30,justifyContent:'center'},

    signupBtnContainer : {borderWidth:1,padding:10,backgroundColor:'#600487',borderRadius:10,marginLeft:30,marginRight:30,marginTop:10,justifyContent:'center',alignItems:'center'},

    signupTxt : {fontWeight:'bold',fontSize:18,color:colors.white},

    errorMessage : {marginLeft:50}
})