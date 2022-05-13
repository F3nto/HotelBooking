import React,{useEffect} from 'react'
import {SafeAreaView,View,Text,TouchableOpacity,Image,FlatList,StyleSheet,Dimensions,} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import HeaderComponent from '../components/HeaderComponent'
import colors from '../constants/colors'
import BottomTabComponent from '../components/BottomTabComponent'
import bookingListAction from '../store/actions/bookingList'
import bookingQtyAction from '../store/actions/bookingQty'
import { useDispatch,useSelector } from 'react-redux'



const screenWidth = Dimensions.get('screen').width

const BookingListScreen = ({navigation,route}) => {

    const dispatch = useDispatch()

    const hotel = useSelector(state => state.BookingList)

    const bookingQty = useSelector(state => state.BookingQty)

    useEffect(() => {

        const getBookingListData = async() => {

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

        const getBookingQty = async() => {

        const bookingQtyFromAsync = await AsyncStorage.getItem('bookingQty')
        const bookingQty = JSON.parse(bookingQtyFromAsync)

        if(bookingQty == null){

            AsyncStorage.setItem('bookingQty',JSON.stringify(0))
            dispatch(bookingQtyAction.addToBookingQty(0))
        
        }else{

            AsyncStorage.setItem('bookingQty', JSON.stringify(bookingQty))
            dispatch(bookingQtyAction.addToBookingQty(bookingQty))


        }

        }

        getBookingListData()
        getBookingQty()
    
    },[route])



    const removeEachHotel = (removeHotel) => {

    console.log('Remove this Item....', removeHotel)

    AsyncStorage.getItem('bookingList').then(res => {

    const bookingListData = JSON.parse(res)

    let leftBookingListData = []

        if(bookingListData != null){

           
            leftBookingListData = bookingListData.filter(prod => prod.filNum != removeHotel.filNum)    

            
            
        }

        AsyncStorage.setItem('bookingList', JSON.stringify(leftBookingListData))
        dispatch(bookingListAction.addToBookingList(leftBookingListData))

        AsyncStorage.setItem('bookingQty', JSON.stringify(bookingQty - 1))
        dispatch(bookingQtyAction.addToBookingQty(bookingQty - 1))

    })

    .catch((e) => {

        console.log('error...', e)

    })

    }

    return(
        <SafeAreaView style = {styles.container}>
            <HeaderComponent navigation={navigation} title = 'Booking List' icon = 'menu'/>
            <View style = {styles.content}>
                
            {hotel ?. length > 0 ?

            <FlatList
            
            data={hotel}
            renderItem = {({item,index}) => {
                
            return(

                <View style = {styles.cardContainer}>

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
 


                    <TouchableOpacity onPress={() => removeEachHotel(item)} style = {{position:'absolute',top:10,right:10}}>

                        <Image style = {{width:30,height:30}} source = {require('../../assets/trash.png')}/>

                    </TouchableOpacity>

                </View>

                

            )

            }}
                keyExtractor = {(item,index) => index.toString()}
   
                ListFooterComponent = {

                    <TouchableOpacity onPress={() => {
                    
                    AsyncStorage.removeItem('bookingList')
                    dispatch(bookingListAction.addToBookingList([]))
                    
                    AsyncStorage.removeItem('bookingQty')
                    dispatch(bookingQtyAction.addToBookingQty(0))
                    
                     
                   }} style = {styles.footer}>

                        <Text style = {{fontSize:16,fontWeight:'bold',color:'#fff'}}>Remove All</Text>

                    </TouchableOpacity>
                }
            /> 

            :
            
            <View style = {{flex:1,justifyContent:'center', alignItems:'center'}}>

                <Text>There is no Data in your booking list!!!</Text>


            </View>
            
            
            
            }

           

            </View>
            <BottomTabComponent navigation={navigation} screenName = 'BookingList'/>
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

    footer : {padding:10,backgroundColor:colors.orange,justifyContent:'center',alignItems:'center'}





})