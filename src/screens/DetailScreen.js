import React, {useState,useEffect} from "react";
import {useIsFocused} from '@react-navigation/native'
import {SafeAreaView,View,Text,TouchableOpacity,FlatList,StyleSheet,Image,Dimensions} from 'react-native'
import HeaderComponent from "../components/HeaderComponent";
import colors from '../constants/colors'
import {LinearGradient} from 'expo-linear-gradient'

import wishListAction from '../store/actions/wishList'
import {useDispatch} from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'


const screenWidth = Dimensions.get('screen').width

const facilitiesArr = [

    {

        FacilityImg : require('../../assets/Icons/parking.png'),
        FacilityTxt : 'Car Parking',


    },

    {

        FacilityImg : require('../../assets/Icons/wifi.png'),
        FacilityTxt : 'Free Wifi',


    },

    {

        FacilityImg : require('../../assets/Icons/padlock.png'),
        FacilityTxt : 'Security',


    },

    {

        FacilityImg : require('../../assets/Icons/kitchen.png'),
        FacilityTxt : 'Kitchen',


    },

    {

        FacilityImg : require('../../assets/Icons/refrigerator.png'),
        FacilityTxt : 'Refrigerator',


    },

    {

        FacilityImg : require('../../assets/Icons/air-conditioner.png'),
        FacilityTxt : 'Air-con',


    },

]

const DetailScreen = ({navigation,route}) => {
    
    const [isInWishList, setIsInWishList] = useState(false)


    const dispatch = useDispatch()          
   
    let {hotel,parentScreen} = route.params

  

    
    useEffect(() => {

        AsyncStorage.getItem('wishList').then((res) => {

            const wishListData = JSON.parse(res)

            console.log('async wishlist .....', wishListData)

            if(wishListData == null){


                setIsInWishList(false)


            }else{

                let isWishList = null

                for(let i = 0; i < wishListData.length; i++){

                    if(wishListData[i]._id == hotel._id){

                        isWishList = hotel._id

                    }

                }

                console.log('is wishlist items...', isWishList)

                if(isWishList != null){

                    setIsInWishList(true)

                }else{

                    setIsInWishList(false)
                }


            }
        })
       
    },[route])


    const addToWishList = (wishListItem) => {

        console.log('wishList item', wishListItem)

    if(isInWishList){
        
        AsyncStorage.getItem('wishList').then((res) => {

            const wishListData = JSON.parse(res)

            let leftData = []

            if(wishListData != null){

                leftData = wishListData.filter(prod => prod._id != wishListItem._id)


            }

            AsyncStorage.setItem('wishList', JSON.stringify(leftData))
            dispatch(wishListAction.addToWishList(leftData))

        })

            setIsInWishList(false)


        } else{


        AsyncStorage.getItem('wishList').then((res) => {

            const wishListData = JSON.parse(res)

            let wishListArr = []

            if(wishListData == null){

                wishListArr.push(wishListItem)

                AsyncStorage.setItem('wishList', JSON.stringify(wishListArr))
                dispatch(wishListAction.addToWishList(wishListArr))

            }else{

                let isWishList = null

                for(let i = 0; i < wishListData.length; i++){

                    if(wishListData[i]._id ==  wishListItem._id){

                        isWishList = wishListItem._id


                    }
                }

                if(isWishList == null){


                    wishListData.push(wishListItem)

                }

                AsyncStorage.setItem('wishList', JSON.stringify(wishListData))
                dispatch(wishListAction.addToWishList(wishListData))


            }

            setIsInWishList(true)


        })

        .catch((error) => {


            console.log('error....', error)

        })

    }
    
}


const FacilitiesIcons = () => {

    return(
        
        <View style = {styles.FacilitiesIconsView}>

            {facilitiesArr.map((item,index) => {

            return(

                <View key = {index} style = {{alignItems:'center'}}>

                    <Image style = {{width:30,height:30}} source = {item.FacilityImg}/>

                    <Text style = {{fontSize:12,marginTop:3,color:'#137a01'}}>{item.FacilityTxt}</Text>

                </View>
            )
            })
        }

        </View>
    )
}



    return(

        <SafeAreaView style = {styles.container}>

            <HeaderComponent navigation={navigation} title= 'Detail' icon = 'back' parentScreenName={parentScreen}/>

            <View style = {styles.content}> 


            {hotel.detailImg.map((item,index) => {
                return(

                <TouchableOpacity key = {index} style = {{height:screenWidth/1.5}}>
                    <Image style = {{width:'100%', height:'100%'}} source = {item.img2} />
                </TouchableOpacity>

                )

            
            })
            }
            <View style = {styles.nameAndWishListView}>

                <Text style = {styles.hotelName}>{hotel.name}</Text>

                <View style = {styles.loveContainer}>

                    <TouchableOpacity onPress={() => addToWishList(hotel)}>

                    { isInWishList ?
                    
                    <Image style = {{width:25,height:25,marginLeft:12.5}} source = {require('../../assets/Icons/redlove.png')}/> 
                        
                    :

                    <Image style = {{width:25, height:25,marginLeft:12.5}} source = {require('../../assets/Icons/love.png')}/>
                   
                    }
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style = {styles.locationDetailView}>

                <Image style = {{width:25,height:25}} source = {require('../../assets/Icons/map.png')}/>
                
                <Text style = {styles.locationDetailText}>{hotel.locationDetail}</Text>

            </View>

            <Text style = {styles.seeOnMap}>See on Map</Text>

            <View style = {styles.country}>

                <Image style = {{width:25, height:25}} source = {require('../../assets/Icons/red-flag.png')}/>

                <Text style = {styles.countryText}>{hotel.country}</Text>

                <Text style = {styles.landmark}>See all NearBy Landmarks</Text>

            </View>

            <View style = {{width:'90%', height:2, backgroundColor:colors.primary,marginTop:15, marginLeft:20}}/>

            <Text style = {styles.fandAtext}>Facilities and Amenities</Text>

            <FacilitiesIcons/>

           


            </View>

                <View style = {{backgroundColor:'#fff'}}>

                    <View style = {styles.btnContainer}>

                <View style = {styles.pernightView}>

                    {hotel.discount != 0 && <Text style = {{textDecorationLine:'line-through',color:colors.primary,fontSize:16}}>${hotel.price}/per night</Text> }
                    
                    
                    <Text style = {{color:colors.txt,fontSize:16}}>${hotel.price - hotel.discount}/per night</Text>

                </View>

              

              

                <LinearGradient colors={['#7ae7ff','#a3e3ff', '#e6fffd',]} start = {{x : 0,y : 0}} end = {{x:0,y:1}} style = {styles.BtnView}>

                <TouchableOpacity onPress = {() => navigation.navigate('BookingScreen', {hotel : hotel})}>
                    
                    <Text style = {styles.BtnText}>Book Now</Text>

                </TouchableOpacity>

                </LinearGradient>


               

              
                </View>

                </View>

            
            </SafeAreaView>
    )
}
export default DetailScreen;

const styles = StyleSheet.create({

    container : {flex:1},

    content   : {flex:1, backgroundColor:colors.white},

    nameAndWishListView : {flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:15},

    hotelName : {fontSize:20, fontWeight:'bold', color:colors.primary,marginLeft:15,},

    loveContainer : {backgroundColor:colors.white,width:50,height:50,marginRight:30,justifyContent:'center',borderRadius:100,shadowColor:'#ff383b',elevation:15},

    locationDetailView : {flexDirection:'row', alignItems: 'flex-start',marginTop:10,padding:15},

    locationDetailText : {fontSize:12,marginLeft:10,marginRight:10},

    country : {flexDirection:'row', alignItems:'center',marginLeft:15,},

    countryText : {marginLeft:10,color:'#6b4400'},

    landmark : {fontSize:12, marginLeft:15, color:'red', textDecorationLine:'underline'},

    seeOnMap : {fontSize:12, color:'red',textDecorationLine:'underline',top:-15,left:50},

    fandAtext : {marginLeft:15, marginTop:15, fontSize:16, fontWeight:'bold', color:colors.primary},

    FacilitiesIconsView : {flexDirection:'row', alignItems:'center',justifyContent:'space-around',marginTop:20},

    btnContainer : {backgroundColor:'#f0fffe',width:screenWidth,height:70,
                    padding:10,borderTopRightRadius:50,borderTopLeftRadius:50,
                    borderColor:'#7ae7ff',borderWidth:1,
                
                    },
                  

    BtnView : {backgroundColor:colors.homeBg, 
              width:screenWidth/4+20, height:50,
              position:'absolute',right:40,top:10,
              borderRadius:5,
              justifyContent:'center',alignItems:'center',
              shadowColor:'#00ff99',elevation:5,
              
              
             
            },

    BtnText : {color:colors.txt, fontWeight:'bold',fontSize:18,textShadowColor:'#7ae7ff'},

    pernightView : {alignItems:'center',position:'absolute', left:50,top:10},






})