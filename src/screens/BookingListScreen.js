import React,{useEffect} from 'react'
import {SafeAreaView,View,Text,TouchableOpacity,Image,FlatList,StyleSheet,Dimensions} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import HeaderComponent from '../components/HeaderComponent'
import colors from '../constants/colors'
import bookingListAction from '../store/actions/bookingList'
import { useDispatch,useSelector } from 'react-redux'


const screenWidth = Dimensions.get('screen').width

const BookingListScreen = ({navigation,route}) => {

    const dispatch = useDispatch()

    const hotel = useSelector(state => state.BookingList)

    useEffect(() => {

        const getBookingData = async() => {

        const bookingDataFromAsync = await AsyncStorage.getItem('bookingList')
        const bookingData = JSON.parse(bookingDataFromAsync)

        if(bookingData == null){

            AsyncStorage.setItem('bookingList', JSON.stringify([]))
            dispatch(bookingListAction.addToBookingList([]))


        }else{

            AsyncStorage.setItem('bookingList', JSON.stringify(bookingData))
            dispatch(bookingListAction.addToBookingList(bookingData))

        }

        }

        getBookingData()
    
    },[route])

    return(
        <SafeAreaView style = {styles.container}>
            <HeaderComponent navigation={navigation} title = 'Booking List' icon = 'menu'/>
            <View style = {styles.content}>
                
                
             <FlatList
            
            data={hotel}
            renderItem = {({item,index}) => {
                
            return(

                <TouchableOpacity style = {styles.cardContainer}>

                <View style = {{height:screenWidth/2-5}}>
                    <Image style = {{width:'100%',height:'100%',borderTopLeftRadius:10,borderTopRightRadius:10}} source = {item.img}/>
                </View>
                
      
                <Text style = {styles.hotelName}>{item.name}</Text>

            

                    <View style = {{marginTop:10,marginLeft:20}}>

                        <View style = {styles.commonContainer}>
                            <Text style = {styles.rAndGTxt}>Room(s)  -</Text>
                            <Text style ={[styles.rAndGTxt,{paddingLeft:10}]}>{item.roomCount}</Text>
                        </View>


                        <View style = {styles.commonContainer}>
                            <Text style = {styles.rAndGTxt}>Guest(s)  -</Text>
                            <Text style = {[styles.rAndGTxt, {paddingLeft:10}]}>{item.guestCount}</Text>
                        </View>
                        

                        <View style = {styles.commonContainer}>
                            <Text style = {styles.rAndGTxt}>Child(ren) -</Text>

                            { item.childCount > 0 ?

                            <Text style = {[styles.rAndGTxt,{paddingLeft:5}]}>{item.childCount}</Text>

                            :

                            <Text style = {styles.NoChilTxt}>No children on your booking List!</Text>

                            }
                        </View>

                    </View>

                 
                 

                    <View style = {styles.checkInAndOutContainer}>
                        
                        <View style = {[styles.commonContainer,{justifyContent:'space-between'}]}>

                            <Text style = {styles.checkInAndOutTxt}>Check-in Date -</Text>
                            <Text>{item.checkinDateShow}</Text>

                        </View>
                            
                        <View style = {styles.commonContainer}>

                            <Text style = {styles.checkInAndOutTxt}>Check-out Date -</Text>
                            <Text>{item.checkoutDateShow}</Text>

                        </View>
                        

                    </View>



                
                    <View style = {styles.firstAndLastName}>

                        {item.gender == 'Mr' ?
                        
                            <Text>Welcome Mr...</Text>

                        :


                            <Text>Welcom Ms...</Text>
                        }

                        <Text style = {styles.firstAndLastTxt}>{item.firstName} {item.lastName}</Text>
                        

                    </View>
                    
                    <View style = {styles.confirmView}>

                    <Text style = {{fontSize:16,fontWeight:'bold',color:'#05fc8d'}}>Confirmed Your Booking!!!</Text>
                    <Image style = {{width:25,height:25,marginLeft:5}} source = {require('../../assets/check-mark.png')}/>

                    </View>

                </TouchableOpacity>

            )

            }}
                keyExtractor = {(item,index) => index.toString()}
            /> 



            </View>
        </SafeAreaView>
    )
}
export default BookingListScreen;

const styles = StyleSheet.create({

    container : {flex:1},

    content : {flex:1},

    cardContainer : {backgroundColor:colors.white,borderRadius:10,margin:7,height:350},

    imgContainer : {borderTopRightRadius:10,borderTopLeftRadius:10},

    TxtContainer : {marginLeft:20,marginTop:10},

    hotelName : {fontSize:19,fontWeight:'bold',color:colors.primary,marginLeft:20,top:5},

    rAndGTxt : {fontSize:15,fontWeight:'bold'},

    NoChilTxt : {fontSize:12,fontWeight:'bold',marginLeft:5,color:'grey'},

    commonContainer : {flexDirection:'row',alignItems:'center'},

    checkInAndOutContainer : {position:'absolute',right:10,top:'60%'},

    checkInAndOutTxt : {fontSize:14,fontWeight:'bold',color:colors.orange},

    firstAndLastName : {flexDirection:'row',alignItems:'center',marginLeft:20,marginTop:10},

    firstAndLastTxt : {fontSize:16,fontWeight:'bold',color:colors.primary},

    confirmView : {flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:5},





})