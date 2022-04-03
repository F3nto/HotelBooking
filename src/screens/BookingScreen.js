import React,{useState,useRef,} from 'react'
import {SafeAreaView,View,Text,TextInput,TouchableOpacity,StyleSheet,Dimensions,Image,Modal,Platform,StatusBar,ImageBackground} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DatePicker from '@react-native-community/datetimepicker'
import HeaderComponent from '../components/HeaderComponent'
import ModalComponent from '../components/RandGModalComponent'
import PhoneModalComponent from '../components/PhoneModalComponent';
import colors from '../constants/colors'

const screenWidth = Dimensions.get('screen').width
const screenHeight = Dimensions.get('screen').height

let genderArr = [

  'Mr',
  'Ms'
]



const BookingScreen = ({navigation,route}) => {

    const [checkinDateShow, setCheckinDateShow] = useState('')
    const [checkoutDateShow, setCheckoutDateShow] = useState('')

    const [checkInDate, setCheckInDate] = useState(new Date(1598051730000)) //! related with check in date Picker
    const [checkInShow, setCheckInShow] = useState(false)                   //! related with check in date Picker
    const [checkInMode, setCheckInMode] = useState('date')                  //! related with check in date Picker

    const [checkOutDate, setCheckOutDate] = useState(new Date(1598051730000)) //! related with check out date Picker
    const [checkOutShow, setCheckOutShow] = useState(false)                   //! related with check out date Picker
    const [checkOutMode, setCheckOutMode] = useState('date')                  //! related with check out date Picker




    const [rePhone, setRePhone] = useState('+95')       //! init of Phone Modal Picker
    const [gender, setGender] = useState('Mr')          //! init of Gender Modal Picker

    const [phoneshowDialog, setPhoneShowDialog] = useState(false)  //! Phone Modal   
    const [RandGshowDialog, setRandGshowDialog] = useState(false)  //! Rooms and guests Modal
   

   const [email,setEmail] = useState('')                //! for TextInput State
   const [firstName, setFirstName] = useState('')
   const [lastName, setLastName] = useState('')
   const [phNumber, setPhNumber] = useState('')


   const onChangeCheckIn = (event, selectedDate) => {

        const currentDate = selectedDate || checkInDate;
        setCheckInShow(Platform.OS === 'ios');
        setCheckInDate(currentDate)

        const tempDate = new Date(currentDate)
        const fullCheckInDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        setCheckinDateShow(fullCheckInDate)
        
    }

    
   const onChangeCheckOut = (event, selectedDate) => {

    const currentDate = selectedDate || checkOutDate;
    setCheckOutShow(Platform.OS === 'ios');
    setCheckOutDate(currentDate)

    const tempDate = new Date(currentDate)
    const fullCheckOutDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    setCheckoutDateShow(fullCheckOutDate)
    
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


  
  

return(

        <SafeAreaView style = {styles.container}>

            <StatusBar translucent backgroundColor = 'rgba(0,0,0,0)'/>

            <View style = {{flex:0.001}}>
                <ImageBackground style = {{width:screenWidth,height:screenHeight,opacity:0.3}} source = {require('../../assets/bgimg.jpg')}/>
            </View>

            <HeaderComponent navigation = {navigation} title = 'Booking' icon = 'back' parentScreenName={'DetailScreen'}/>

            <View style = {styles.content}>

            <View style = {styles.outerView}>
                
                <Text>I am booking for</Text>

                <View style = {styles.textInputOuterView}>

                    <Image style = {{width:30,height:30}} source = {require('../../assets/Icons/message.png')}/>

                    <TextInput
                    style = {styles.emailtextInput}

                    placeholder='Email address'
                    onChangeText={text => setEmail(text)}
                    value = {email}
                    
                    
                    />

                </View>

              
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
                    style = {styles.firstTextInput}

                    placeholder='First Name'
                    value={firstName}
                    onChangeText = {(text) => {setFirstName(text)}}
                    
                    />

                    
                    <TextInput
                    style = {styles.lastTextInput}

                    placeholder='Last Name'
                    value={lastName}
                    onChangeText = {(text) => {setLastName(text)}}
                    
                    />

                </View>

                <Text style = {styles.phoneTxt}>Phone</Text>

                <View style = {styles.phContainer}>

                    <TouchableOpacity style = {styles.arrowDownAndPhone} onPress={() => {setPhoneShowDialog(true)}}>

                        <Image style = {{width:15,height:15,marginTop:10}} source = {require('../../assets/Icons/arrowdown.png')}/>

                        <Text style = {styles.rePhoneTxt}>{rePhone}</Text>

                    </TouchableOpacity>

                    <TextInput
                    style = {styles.phtextInput}
                    placeholder='Phone Number'
                    value={phNumber}
                    onChangeText = {text => setPhNumber(text)}
                        
                    />

                </View>


            <Text style = {styles.dateTxt}>Select Check-in and Check-out Date</Text>
            
            <View style = {styles.dateContainer}>

                <TextInput
                style = {styles.dateTxtInput}
                
                placeholder = 'Check-in date'
                value={checkinDateShow}
                onChangeText = {text => setCheckinDateShow(text)}
                
                />

                <TouchableOpacity onPress={() => showCheckInDatePicker()}>
                    
                    <Image style = {{width:35,height:35,marginLeft:20,marginTop:10}} source = {require('../../assets/Icons/calendar.png')} />
                    
                </TouchableOpacity>

               

            </View> 

              
            <View style = {styles.dateContainer}>

                <TextInput
                style = {styles.dateTxtInput}
                
                placeholder = 'Check-out date'
                value={checkoutDateShow}
                onChangeText = {text => setCheckoutDateShow(text)}
                
                />

                <TouchableOpacity onPress={() => showCheckOutDatePicker()}>
                    
                    <Image style = {{width:35,height:35,marginLeft:20,marginTop:10}} source = {require('../../assets/Icons/calendar.png')} />
                    
                </TouchableOpacity>

               

            </View>   
  

            {checkInShow && <DatePicker
                      testID='datePicker'
                      value={checkInDate}
                      mode = {checkInMode}
                      display = 'default'
                      onChange={onChangeCheckIn}
            />
            }

            {checkOutShow && <DatePicker
                      testID='datePicker'
                      value={checkOutDate}
                      mode = {checkOutMode}
                      display = 'default'
                      onChange={onChangeCheckOut}
            />
            }

            <TouchableOpacity onPress={() => setRandGshowDialog(true)}>

                <Text style = {styles.roomAndGuestTxt}>Select Rooms and guests</Text>

            </TouchableOpacity>           
        </View>

        </View>
                    
            <ModalComponent visible = {RandGshowDialog} outHandler = {() => {setRandGshowDialog(false)}}/>

            <PhoneModalComponent visible={phoneshowDialog} 
            outHandler = {() => {setPhoneShowDialog(false)}} 
            onPressFun = {(data) => setRePhone(data)}/>
            
        
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

    
    emailtextInput : {width:screenWidth/2+50,marginLeft:10,height:30,borderBottomWidth:1},

    firstTextInput : {width:screenWidth/3,marginLeft:10,height:30,borderBottomWidth:1,},

    lastTextInput  : {width:screenWidth/3+10,marginLeft:20,height:30,borderBottomWidth:1,},

    firstAndLastName: {flexDirection:'row',alignItems:'center',marginLeft:5},

    textInputOuterView: {flexDirection:'row', alignItems:'center',marginLeft:10,marginTop:20},

    genderPicker : {width:screenWidth/4+10,marginLeft:5,marginTop:10},

    phoneTxt : {fontSize:16, marginTop:20,marginLeft:10},

    rePhoneTxt : {fontSize:18, marginTop:10, marginLeft:10},

    phtextInput : {width:screenWidth/2+20,marginLeft:10,height:30,marginTop:10,borderBottomWidth:1},

    phContainer : {flexDirection:'row', alignItems:'center',marginLeft:20},

    arrowDownAndPhone : {flexDirection:'row', alignItems:'center'},

    dateTxt : {fontSize:16, marginTop:20,marginLeft:10},

    dateContainer : {flexDirection:'row',  alignItems:'center',marginTop:10},

    dateTxtInput : {backgroundColor:colors.white,width:screenWidth/2,marginTop:10,marginLeft:50,padding:10,borderRadius:10,borderColor:colors.primary,borderWidth:1},

    roomAndGuestTxt : {fontSize:16,marginTop:20,marginLeft:10,color:'#086c80'}



    

})