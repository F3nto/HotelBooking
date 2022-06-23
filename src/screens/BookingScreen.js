import React,{useState,useEffect,useRef} from 'react';
import {SafeAreaView,View,Text,TextInput,TouchableOpacity,StyleSheet,Dimensions,Image,Modal,Platform,StatusBar,ImageBackground,ScrollView,ToastAndroid} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DatePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import bookingListAction from '../store/actions/bookingList';
import bookingQtyAction from '../store/actions/bookingQty';

import PhoneInput from 'react-native-phone-number-input'

import { useDispatch } from 'react-redux';
import HeaderComponent from '../components/HeaderComponent';
import colors from '../constants/colors'
import { LinearGradient } from 'expo-linear-gradient';



const screenWidth = Dimensions.get('screen').width
const screenHeight = Dimensions.get('screen').height

let genderArr = [

  'Mr',
  'Ms'
]

const BookingScreen = ({navigation,route}) => {

    let {hotel} = route.params

    const dispatch = useDispatch()                  //! redux


    const [roomCount, setRoomCount]   = useState(1)         
    const [guestCount, setGuestCount] = useState(1)
    const [childCount, setChildCount] = useState(0)

    const [isFocusedFirstName, setIsFocusedFirstName] = useState(false)         //! for changing colors in textfield
    const [isFocusedLastName, setIsFocusedLastName] = useState(false)           //! for changing colors in textfield

    const [isFocusedCheckInDate, setIsFocusedCheckInDate] = useState(false)     //! for changing colors in textfield
    const [isFocusedCheckOutDate, setIsFocusedCheckOutDate] = useState(false)   //! for changing colors in textfield

    const [isFocusedEmail, setIsFocusedEmail] = useState(false)                 //! for changing colors in textfield
    const [isFocusedPhone, setIsFocusedPhone] = useState(false)                 //! for changing colors in textfield

  
    
    const [checkinDateShow, setCheckinDateShow] = useState('')
    const [checkoutDateShow, setCheckoutDateShow] = useState('')

    const [checkInDate, setCheckInDate] = useState(new Date())                 //! related with check in date Picker
    const [checkInShow, setCheckInShow] = useState(false)                   //! related with check in date Picker
    const [checkInMode, setCheckInMode] = useState('date')                  //! related with check in date Picker

    const [checkOutDate, setCheckOutDate] = useState(new Date())               //! related with check out date Picker
    const [checkOutShow, setCheckOutShow] = useState(false)                   //! related with check out date Picker
    const [checkOutMode, setCheckOutMode] = useState('date')                  //! related with check out date Picker


    

    const [gender, setGender] = useState('Mr')          //! init of Gender Modal Picker

   const [email, setEmail] = useState('')                       
   const [emailValidError, setEmailValidError] = useState('')   
   const [showCheckValidAndInvalid , setShowCheckValidAndInvalid] = useState(false)

   const [firstName, setFirstName] = useState('')       //! for TextInput State
   const [lastName, setLastName] = useState('')         //! for TextInput State
   const [phNumber, setPhNumber] = useState('')         //! Phone TextInput States
 
  
    const onChangeCheckIn = (event, selectedDate) => {

        setCheckInShow(false)

        if(selectedDate) {

            const currentDate = selectedDate || checkInDate;  
            setCheckInShow(Platform.OS === 'ios');
            setCheckInDate(currentDate)

            const tempDate = new Date(currentDate)
            const fullCheckInDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
            setCheckinDateShow(fullCheckInDate)

        }else{

        

            setCheckinDateShow('')

            setIsFocusedCheckInDate(false)


        }
        
    }

    
   const onChangeCheckOut = (event, selectedDate) => {

    setCheckOutShow(false)

    if(selectedDate) {

        const currentDate = selectedDate || checkOutDate;
        setCheckOutShow(Platform.OS === 'ios');
        setCheckOutDate(currentDate)

        const tempDate = new Date(currentDate)
        const fullCheckOutDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        setCheckoutDateShow(fullCheckOutDate)

    }else {

        setCheckoutDateShow('')

        setIsFocusedCheckOutDate(false)



    }
    
}


   const showCheckInMode = (currentMode) => {

        setCheckInShow(true)
        setCheckInMode(currentMode)
    }

    const showCheckOutMode = (currentMode) => {

        setCheckOutShow(true)
        setCheckOutMode(currentMode)
    }




   const showCheckInDatePicker = () => {

        showCheckInMode('date')
    }

    
   const showCheckOutDatePicker = () => {

    showCheckOutMode('date')
}

    const plusRoom = () => {setRoomCount(roomCount + 1)}

    const minusRoom = () => {

        if(roomCount > 1){

            setRoomCount(roomCount - 1)

        }


    }


    const plusGuest = () => {setGuestCount(guestCount + 1)}

    const minusGuest = () => {

        if(guestCount > 1){

            setGuestCount(guestCount - 1)

        }
    }

    const plusChild = () => {setChildCount(childCount + 1)}
    
    

    const minusChild = () => {

        if(childCount >= 1) {

            setChildCount(childCount - 1)

        }



    }


    const addToBookingList = (hotel) => {

        let filNum = 1;

        let qty = 1;

        
        hotel.roomCount = roomCount
        hotel.guestCount = guestCount
        hotel.childCount = childCount

        hotel.checkinDateShow = checkinDateShow
        hotel.checkoutDateShow = checkoutDateShow

        hotel.firstName = firstName
        hotel.lastName = lastName

        hotel.gender = gender

        hotel.filNum = filNum
        
       

        hotel.qty = qty                             //! add booking qty
        let bookingQty = hotel.qty                  //! add booking qty

        AsyncStorage.getItem('bookingList').then((res) => {

        const bookingData = JSON.parse(res)

        let bookingArr = []

        if(bookingData == null){


            bookingArr.unshift(hotel)

            AsyncStorage.setItem('bookingList', JSON.stringify(bookingArr))
            dispatch(bookingListAction.addToBookingList(bookingArr))

            AsyncStorage.setItem('bookingQty', JSON.stringify(bookingQty))
            dispatch(bookingQtyAction.addToBookingQty(bookingQty))

        }else{

        
            for(let i = 0; i < bookingData.length ; i++){

                bookingQty += bookingData[i].qty

            }

                bookingData.unshift(hotel)

                for(let i = 0; i < bookingData.length; i++){

                hotel.filNum += bookingData[i].filNum


                console.log('Adding Filter Number....', hotel.filNum)

            }

            AsyncStorage.setItem('bookingList', JSON.stringify(bookingData))
            dispatch(bookingListAction.addToBookingList(bookingData))

            AsyncStorage.setItem('bookingQty', JSON.stringify(bookingQty))
            dispatch(bookingQtyAction.addToBookingQty(bookingQty))

        }
    })

    setRoomCount(1);
    setGuestCount(1);
    setChildCount(0);

    setCheckinDateShow('');         //! wanna be init textfield blur 
    setCheckoutDateShow('');         //! wanna be init textfield blur

    setCheckInDate(new Date())
    setCheckOutDate(new Date())
    
    setFirstName('');               //! wanna be init textfield blur
    setLastName('');                 //! wanna be init textfield blur
    setEmail('');                     //! wanna be init textfield blur
    setPhNumber('');                   //! wanna be init textfield blur
    


    setIsFocusedEmail(false);               //! textField color init red
    setIsFocusedPhone(false);                //! textField color init red
    setIsFocusedFirstName(false);             //! textField color init red
    setIsFocusedLastName(false);               //! textField color init red   
    setIsFocusedCheckInDate(false);             //! textField color init red
    setIsFocusedCheckOutDate(false);             //! textField color init red

    setShowCheckValidAndInvalid(false);          //! Email init invalid

    }

    const showSuccessToast = () => {

       ToastAndroid.showWithGravityAndOffset(

        "Your Booking is Confirmed!",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,

      
    )
        
    }


    const showUnSuccessToast = () => {

        ToastAndroid.showWithGravityAndOffset(
 
        "You have to fill required fields about your booking!",
         ToastAndroid.LONG,
         ToastAndroid.BOTTOM,
         25,
         50,
 
       
     )
         
     }


     const  checkOutHandlerToast = () => {

        ToastAndroid.showWithGravityAndOffset(
 
            "Please fill check in date first!!!",
             ToastAndroid.LONG,
             ToastAndroid.BOTTOM,
             25,
             50,
     
           
         )





     }

  
    
    const onPressEventHandler = () => {

     
        if(firstName != '' && lastName != '' && checkinDateShow != '' && checkoutDateShow != '' && emailValidError == '') {

            navigation.navigate('BookingListScreen')

            addToBookingList(hotel)

            showSuccessToast()


        }else{

            

            showUnSuccessToast()

         

        }

    }


    const EmailValidation = (value) => {

        let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

        if(value.length == 0){

            setEmailValidError('Enter Email Address!');

            
            setIsFocusedEmail(false)

            setShowCheckValidAndInvalid(false)

          

        }else if(emailPattern.test(value) == false){


            setEmailValidError('Please Enter Valid Email Address!');
            

            setIsFocusedEmail(false)

            setShowCheckValidAndInvalid(false)

        }

       

        else{

            setEmailValidError('');

            setIsFocusedEmail(true);

            setShowCheckValidAndInvalid(true);

        }


      
    }

    const checkoutHandler = () => {

        if(checkinDateShow != ''){

            showCheckOutDatePicker()            
            setIsFocusedCheckOutDate(true)

        }else{

            setIsFocusedCheckOutDate(false)

            checkOutHandlerToast()


        }

    
    }
   

return(



        <SafeAreaView style = {styles.container}>

            <StatusBar translucent backgroundColor = 'rgba(0,0,0,0)'/>

            <View style = {{flex:0.001}}>
                <ImageBackground style = {{width:screenWidth,height:screenHeight,opacity:0.5,}} source = {hotel.backgroundImg}/>
            </View>

            <HeaderComponent navigation = {navigation} title = 'Booking' icon = 'menu'/>

            <ScrollView>
            <View style = {styles.content}>

            <View style = {styles.outerView}>
                
                <Text style = {styles.iamBookingTxt}>I am booking for</Text>

                <View style = {styles.textInputOuterView}>
                    
                    {isFocusedEmail ?

                    <Image style = {{width:25,height:25}} source = {require('../../assets/email.png')}/>
                    
                    :

                    <Image style = {{width:25,height:25}} source = {require('../../assets/redemail.png')}/>

                    }

                    <TextInput
                    
                    style = {[styles.emailtextInput, {borderColor: isFocusedEmail ? '#73c7ff' :  '#ffa3a3', shadowColor:isFocusedEmail ? '#0ac0fc' : '#fc6868', elevation:15,shadowOpacity:0.5,shadowRadius:5}]}
                    placeholder='Email address(*required)'
                    autoComplete = {false}
                    keyboardType = 'email-address'

                    value={email}
                    onChangeText = {(text) => {EmailValidation(text) , setEmail(text)}}


                    onBlur = {() => {setIsFocusedEmail(false)
                    
                    {emailValidError == '' && setIsFocusedEmail(true) }}
                    
                    }


                    />

                    {showCheckValidAndInvalid ? 


                        <Image style = {{width:25,height:25}} source = {require('../../assets/check.png')}/>



                    : emailValidError == 'Please Enter Valid Email Address!' ?



                    <TouchableOpacity onPress={() => {setEmail('')}}>

                        <Image style = {{width:30,height:30}} source = {require('../../assets/wrong.png')}/>
                    
                    </TouchableOpacity>

                    :

                    null

                    }

                  
                   

                </View>

                <Text style = {styles.errorEmailMes}>{emailValidError}</Text>



              
              
                <Picker
                style = {styles.genderPicker}
                selectedValue = {gender}
                onValueChange = {(itemValue) => setGender(itemValue)}
                
                >
                    {
                        genderArr.map((i,index) => {
                            return(

                            <Picker.Item key = {index} label = {i} value = {i}/>

                            )
                        })



                    }
                </Picker>
              

                <View style = {styles.firstAndLastName}>

                    <TextInput
                    style = {[styles.firstTextInput, {borderColor: isFocusedFirstName ? '#73c7ff' : '#ffa3a3'}]}

                    placeholder='First Name(*required)'
                  
                    value={firstName}
                    onChangeText = {(text) => {setFirstName(text)}}
                    
                    onFocus = {() => {setIsFocusedFirstName(true)}}

                    onBlur = {() => {setIsFocusedFirstName(false)

                        {firstName != '' && setIsFocusedFirstName(true)}

                    }}

                

                    
                    />


                   
                    
                    <TextInput
                    style = {[styles.lastTextInput, {borderColor : isFocusedLastName ? '#73c7ff' :  '#ffa3a3'}]}

                    placeholder='Last Name(*required)'
                    value={lastName}
                    onChangeText = {(text) => {setLastName(text)}}

                    onFocus = {() => {setIsFocusedLastName(true)}}

                    onBlur = {() => {setIsFocusedLastName(false)

                    {lastName != '' && setIsFocusedLastName(true)}

                    }}
                    
                    />

                </View>

                <Text style = {styles.phoneTxt}>Phone</Text>
                
                <View style = {styles.phoneOuterContainer}>

                <PhoneInput 
                
                
                defaultCode = 'IN'
                layout='first'
                withDarkTheme
                withShadow

            
                
                />


                <TextInput
                style = {[styles.phTextInput, {borderColor:isFocusedPhone ? '#73c7ff' :  '#ffa3a3', shadowColor:isFocusedPhone ? '#03afff' :  '#ff0303',elevation:15}]}
                placeholder='Phone.No (*required)'
                keyboardType='number-pad'

                value = {phNumber}
                onChangeText = {text => setPhNumber(text)}

                onFocus = {() => setIsFocusedPhone(true)}

                onBlur = {() => {setIsFocusedPhone(false)
                
                {phNumber != '' && setIsFocusedPhone(true)}

                }}
                />
                 
                </View>
                
               
               


            <Text style = {styles.dateTxt}>Select Check-in and Check-out Date</Text>
            
            <View style = {styles.dateContainer}>

                <TextInput
                style = {[styles.dateTxtInput, {borderColor:isFocusedCheckInDate ? '#73c7ff' : '#ffa3a3',shadowColor:isFocusedCheckInDate ? '#03afff' :  '#ff0303',elevation:15}]}
                
                placeholder = 'Check-in date(*required)'
                value={checkinDateShow}
                onChangeText = {text => setCheckinDateShow(text)}

                editable = {false}
                selectTextOnFocus = {false}

                />

                <TouchableOpacity onPress={() => {showCheckInDatePicker() , setIsFocusedCheckInDate(true)}}>
                    
                    <Image style = {{width:35,height:35,marginLeft:20,marginTop:10}} source = {require('../../assets/Icons/calendar.png')} />
                    
                </TouchableOpacity>

               

            </View> 

              
            <View style = {styles.dateContainer}>

                <TextInput
                style = {[styles.dateTxtInput, {borderColor: isFocusedCheckOutDate ? '#73c7ff' : '#ffa3a3'}]}
                
                placeholder = 'Check-out date(*required)'
                value={checkoutDateShow}
                onChangeText = {(text) => setCheckoutDateShow(text) }

                editable = {false}
                selectTextOnFocus = {false}

                />

                <TouchableOpacity onPress={() => checkoutHandler()}>
                    
                    <Image style = {{width:35,height:35,marginLeft:20,marginTop:10}} source = {require('../../assets/Icons/calendar.png')} />
                    
                </TouchableOpacity>


            </View>   
  

            {checkInShow && <DatePicker

                    
                      testID='datePicker'
                      value={checkInDate}
                      mode = {checkInMode}
                      display = 'default'
                      onChange={onChangeCheckIn}
                      minimumDate={new Date()}
                      
            />
            }

            {checkOutShow && <DatePicker
                      
                    
                      testID='datePicker'
                      value={checkOutDate}
                      mode = {checkOutMode}
                      display = 'default'
                      onChange={onChangeCheckOut}
                      minimumDate={checkInDate}
                      

            
            />
            }

            <Text style = {styles.roomAndGuestTxt}>Select Rooms and guests</Text>
            
            <View style = {{marginLeft:50,marginTop:20}}>

            <View style = {styles.roomAndGuestContainer}>

                <Text style = {styles.rAndGtxt}>Rooms</Text>

                <View style = {styles.minusAndPlusContainer}>

                    <TouchableOpacity onPress={() => {minusRoom()}}>

                        <Image style = {{width:35,height:35,tintColor:'#7ae7ff'}} source = {require('../../assets/Icons/minus.png')}/>

                    </TouchableOpacity>

                    <Text style = {{paddingHorizontal:10,fontSize:20,fontWeight:'bold',color:colors.txt}}>{roomCount}</Text>

                    <TouchableOpacity onPress={() => {plusRoom()}}>

                        <Image style = {{width:35,height:35,tintColor:'#7ae7ff'}} source = {require('../../assets/Icons/plus.png')}/>

                    </TouchableOpacity>

                </View>

            </View>

            <View style = {{width:screenWidth/1.8,marginTop:10,height:1,backgroundColor:'#0290a6'}}/>

            <View style = {styles.roomAndGuestContainer}>

                <Text style = {styles.rAndGtxt}>Guests</Text>

                <View style = {styles.minusAndPlusContainer}>

                    <TouchableOpacity onPress={() => {minusGuest()}}>

                        <Image style = {{width:35,height:35,tintColor:'#7ae7ff'}} source = {require('../../assets/Icons/minus.png')}/>

                    </TouchableOpacity>

                    <Text style = {{paddingHorizontal:10,fontSize:20,fontWeight:'bold',color:colors.txt}}>{guestCount}</Text>

                    <TouchableOpacity onPress={() => {plusGuest()}}>

                        <Image style = {{width:35,height:35,tintColor:'#7ae7ff'}} source = {require('../../assets/Icons/plus.png')}/>

                    </TouchableOpacity>

                </View>

            </View>

            <View style = {{width:screenWidth/1.8,marginTop:10,height:1,backgroundColor:'#0290a6'}}/>

            <View style = {styles.roomAndGuestContainer}>

                <Text style = {styles.rAndGtxt}>Child(ren)</Text>

                <View style = {[styles.minusAndPlusContainer, {marginLeft:48}]}>

                    <TouchableOpacity onPress = {() => {minusChild()}}>

                        <Image style = {{width:35,height:35,tintColor:'#7ae7ff'}} source = {require('../../assets/Icons/minus.png')}/>

                    </TouchableOpacity>

                    <Text style = {{paddingHorizontal:10,fontSize:20,fontWeight:'bold',color:colors.txt}}>{childCount}</Text>

                    <TouchableOpacity onPress={() => {plusChild()}}>

                        <Image style = {{width:35,height:35,tintColor:'#7ae7ff'}} source = {require('../../assets/Icons/plus.png')}/>

                    </TouchableOpacity>

                </View>

            </View>

            <View style = {{width:screenWidth/1.8,marginTop:10,height:1,backgroundColor:'#0290a6'}}/>

            </View>

              
        </View>

        <LinearGradient colors={['#7ae7ff','#a3e3ff', '#e6fffd',]} start = {{x : 0,y : 0}} end = {{x:0,y:1}} style = {styles.confirmBookingContainer}>
        <TouchableOpacity onPress={() => onPressEventHandler()} >

            <Text style = {styles.confirmBookingTxt}>Confirm Booking</Text>

        </TouchableOpacity>

        </LinearGradient>

        </View>
        </ScrollView>
                
            
    </SafeAreaView>
    

)
}

export default BookingScreen;

const styles = StyleSheet.create({
    
    container : {flex:1,},

    content : {flex:1,},

    outerView : {backgroundColor:'rgba(0, 0, 0, 0.1)',
                marginTop:20,
                margin:10,
                padding:10,
                borderRadius:10
                },

    iamBookingTxt : {fontSize:18,fontWeight:'bold',color:colors.txt,marginLeft:12},
    
    emailtextInput : {width:screenWidth/2+50,marginLeft:10,borderBottomWidth:1},

    errorEmailMes : {fontSize:12,color:'red',fontWeight:'bold', marginTop:5,marginLeft:50},

    firstTextInput : {width:screenWidth/3+15,marginLeft:10,height:30,borderBottomWidth:1,},

    lastTextInput  : {width:screenWidth/3+20,marginLeft:20,height:30,borderBottomWidth:1,},

    firstAndLastName: {flexDirection:'row',alignItems:'center',marginLeft:5},

    textInputOuterView: {flexDirection:'row', alignItems:'center',marginLeft:10,marginTop:20},

    genderPicker : {width:screenWidth/4+10,marginLeft:5,marginTop:10},

    phoneTxt : {fontSize:18, marginTop:20,marginLeft:10,fontWeight:'bold',color:colors.txt},

    phTextInput : {backgroundColor:colors.white,paddingLeft:10,marginLeft:80,borderRadius:5,width:screenWidth/2-30,height:50,top:15,borderWidth:1},

    phoneOuterContainer : {flexDirection:'row',},

    countryCodeView : {marginLeft:20,marginTop:20},

    dateTxt : {fontSize:18, marginTop:20,marginLeft:10,fontWeight:'bold',color:colors.txt},

    dateContainer : {flexDirection:'row',  alignItems:'center',marginTop:10},

    dateTxtInput : {backgroundColor:colors.white,width:screenWidth/2+5,marginTop:10,marginLeft:50,padding:10,borderRadius:10,borderColor:colors.primary,borderWidth:1},

    roomAndGuestTxt : {fontSize:18,marginTop:20,marginLeft:10,fontWeight:'bold',color:colors.txt},

    roomAndGuestContainer : {flexDirection:'row', alignItems:'center',marginTop:10},

    minusAndPlusContainer : {flexDirection:'row', alignItems:'center',marginLeft:70},

    rAndGtxt : {fontSize:16,fontWeight:'bold',color:colors.txt},

    confirmBookingContainer : {width:screenWidth/1.5,backgroundColor:colors.white,padding:10,borderRadius:10,shadowColor:colors.primary,elevation:5,justifyContent:'center',alignItems:'center',marginLeft:70,marginBottom:15},

    confirmBookingTxt : {fontSize:18,fontWeight:'bold',color:colors.txt,textShadowColor:'#05f2e2',textShadowRadius:5,},

            

    
})