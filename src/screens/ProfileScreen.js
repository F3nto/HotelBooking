import React,{useState,useEffect} from 'react'
import {SafeAreaView,View,Text,TouchableOpacity,StyleSheet,Image,Dimensions,ScrollView,} from 'react-native'
import HeaderComponent from '../components/HeaderComponent'
import AsyncStorage from '@react-native-async-storage/async-storage'
import colors from '../constants/colors'
import {LinearGradient} from 'expo-linear-gradient'
import BottomTabComponent from '../components/BottomTabComponent'
import CurrencyModalComponent from '../components/CurrencyModalComponent'
import NationalityModalComponent from '../components/NationalityModalComponent'
import LanguageModalComponent from '../components/LanguageModalComponent'
import SignOutModalComponent from '../components/SignOutModalComponent'
import { useDispatch,useSelector } from 'react-redux'
import authAction from '../store/actions/auth'
import emailAction from '../store/actions/email'
import {auth} from './Auth/firebase/firebase'

const screenWidth = Dimensions.get('screen').width



const ProfileScreen = ({navigation,route}) => {


    const userName = useSelector(state => state.Auth)           //! user name from redux

    const userEmail = useSelector(state => state.Email)         //! user email from redux

    const dispatch = useDispatch()

    useEffect(() => {

        const getUserInfo = async() => {

        const getUserNameFromAsync = await AsyncStorage.getItem('userInfo')

        const userInfo = JSON.parse(getUserNameFromAsync)


        if(userInfo == null){

            AsyncStorage.setItem('userInfo', JSON.stringify([]))
            dispatch(authAction.addToAuth([]))

        }else{

            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
            dispatch(authAction.addToAuth(userInfo))


        }

        }

        const getUserEmail = async() => {

        const userEmailFromAsync = await AsyncStorage.getItem('email')

        const userEmailData = JSON.parse(userEmailFromAsync)
        
        if(userEmailData == null){

            AsyncStorage.setItem('email', JSON.stringify([]))
            dispatch(emailAction.saveToEmail([]))


        }else{

            AsyncStorage.setItem('email', JSON.stringify(userEmailData))
            dispatch(emailAction.saveToEmail(userEmailData))

        }

        }


        getUserEmail()
        getUserInfo()

    },[])

    
    const [ showCurrencyDialog, setShowCurrencyDialog ] = useState(false)
    const [ curren, setCurren ] = useState('')

    const [showNationDialog, setShowNationDialog] = useState(false)
    const [nation, setNation] = useState('')

    const [showLanDialog, setShowLanDialog] = useState(false)
    const [language, setLanguage] = useState('')

    const [showSignOutDialog, setShowSignOutDialog] = useState(false)


    return(

        <SafeAreaView style = {styles.container}>
        <HeaderComponent navigation={navigation} title = 'ProfileScreen' icon = 'back' parentScreenName={'HomeScreen'}/>

        <ScrollView>
        <View style = {styles.content}>

            <LinearGradient style = {styles.profileView} colors={['#7ae7ff','#82deff', '#e6fffd',]} start = {{x : 1,y : 0}} end = {{x:1,y:1}}>
          
                <Image style = {{width:80,height:80,borderRadius:70}} source= {require('../../assets/tor.jpg')}/>
                
                <Text style = {styles.pfName}>{userName}</Text>
                <Text style = {styles.pfEmail}>{userEmail}</Text>

            </LinearGradient>

            <TouchableOpacity style = {styles.iconContainer}>
                
                <Image style = {{width:25,height:25,tintColor:'#0290a6'}} source = {require('../../assets/Icons/acc.png')}/>

                <Text style = {styles.pfTxt}>Manage Your Account</Text>
            
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('ReviewListScreen')} style = {[styles.iconContainer, {marginTop:15}]}>
                
                <Image style = {{width:25,height:25,tintColor:'#0290a6'}} source = {require('../../assets/Icons/restar.png')}/>

                <Text style = {styles.pfTxt}>Your Reviews</Text>
            
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {setShowCurrencyDialog(true)}} style = {[styles.iconContainer, {marginTop:15}]}>

                <Image style = {{width:25,height:25,tintColor:'#0290a6'}} source = {require('../../assets/Icons/currency.png')}/>

                <Text style = {styles.pfTxt}>Currency</Text>

                <View style = {styles.showCurrencyContainer}>


                    <Image style = {{width:25,height:25}} source= {curren.curImg}/>

                    <Text style = {{marginLeft:5}}>{curren.curExchange}</Text>


                </View>

            </TouchableOpacity>

            <TouchableOpacity onPress={() => {setShowNationDialog(true)}} style = {[styles.iconContainer, {marginTop:15}]}>

                <Image style = {{width:25,height:25,tintColor:'#0290a6'}} source = {require('../../assets/Icons/nation.png')}/>

                <Text style = {styles.pfTxt}>Nationality</Text>

                <View style = {styles.showNationalContainer}>

                    <Image style = {{width:25,height:25}} source = {nation.flag}/>

                    <Text style = {{marginLeft:5}}>{nation.nat}</Text>


                </View>



            </TouchableOpacity>

            <TouchableOpacity onPress={() => {setShowLanDialog(true)}} style = {[styles.iconContainer, {marginTop:15}]}>

                <Image style = {{width:25,height:25,tintColor:'#0290a6'}} source = {require('../../assets/Icons/languages.png')}/>

                <Text style = {styles.pfTxt}>Language</Text>

                
                <View style = {styles.showLanguageContainer}>

                    <Image style = {{width:25,height:25}} source = {language.flag}/>

                    <Text style = {{marginLeft:5}}>{language.lan}</Text>


                </View>
            </TouchableOpacity>

            

            <View style = {{width:screenWidth/1.2,marginLeft:20,marginTop:15,height:1,backgroundColor:'#0290a6'}}/>

            <Text style = {styles.helpAndSupView}>Help and Support</Text>

            <TouchableOpacity onPress={() => {navigation.navigate('CustomerServiceScreen')}} style = {[styles.iconContainer, {marginTop:15}]}>

                <Image style = {{width:25,height:25,tintColor:'#0290a6'}} source = {require('../../assets/Icons/help.png')}/>

                <Text style = {styles.pfTxt}>Customer Service</Text>

            </TouchableOpacity>

          

            <View style = {{width:screenWidth/1.2,marginLeft:20,marginTop:15,height:1,backgroundColor:'#0290a6'}}/>
            
            <TouchableOpacity onPress={() => setShowSignOutDialog(true)} style = {[styles.iconContainer, {marginTop:15,marginBottom:15}]}>

                <Image style = {{width:25,height:25,tintColor:'#e61902'}} source = {require('../../assets/Icons/log-out.png')}/>

                <Text style = {[styles.pfTxt,{color:'#e61902'}]}>Sign Out</Text>

            </TouchableOpacity>

            <CurrencyModalComponent navigation={navigation} visible= {showCurrencyDialog} 
            outCurHandler = {() => {setShowCurrencyDialog(false)}}
            onPressFun = {(data) => {setCurren(data)}}/>
          

            <NationalityModalComponent navigation={navigation} visible= {showNationDialog}
            outNatHandler = {() => {setShowNationDialog(false)}}
            onPressFun = {(data) => {setNation(data)}}/>

            <LanguageModalComponent navigation={navigation} visible= {showLanDialog}
            outLanHandler = {() => {setShowLanDialog(false)}}
            onPressFun = {(data) => {setLanguage(data)}}/>

            <SignOutModalComponent navigation={navigation} visible = {showSignOutDialog} outHandler = {() => setShowSignOutDialog(false)}/>
            
        </View>
        </ScrollView>

        <BottomTabComponent navigation={navigation} screenName = 'Profile'/>

        </SafeAreaView>

    )

}

export default ProfileScreen;

const styles = StyleSheet.create({

    container : {flex:1},

    content : {flex:1,},

    profileView : {height:250,justifyContent:'center',alignItems:'center',},


    pfName : {fontSize:20,fontWeight:'bold',color:colors.txt},

    pfEmail : {fontSize:14,color:colors.txt},

   

    iconContainer : {flexDirection:'row', alignItems:'center',marginLeft:20,marginTop:20},

    pfTxt : {marginLeft:10, fontSize:14},

    helpAndSupView : {fontSize:16,fontWeight:'bold',marginTop:15,marginLeft:20},

    showCurrencyContainer : {flexDirection:'row',alignItems:'center',marginLeft:30},

    showNationalContainer : {flexDirection:'row', alignItems:'center',marginLeft:20},

    showLanguageContainer : {flexDirection:'row',alignItems:'center',marginLeft:25}




})