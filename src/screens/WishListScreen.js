import React,{useState,useEffect} from 'react'
import {SafeAreaView,View,Text,TouchableOpacity,StyleSheet,FlatList,Image} from 'react-native'
import HeaderComponent from '../components/HeaderComponent'
import colors from '../constants/colors'

import { useDispatch,useSelector } from 'react-redux'
import wishListAction from '../store/actions/wishList'
import AsyncStorage from '@react-native-async-storage/async-storage'


const WishListScreen = ({navigation,route}) => {

    const dispatch = useDispatch()

    const wishListProds = useSelector(state => state.WishList) 
    console.log('wishlist prods.......', wishListProds)

    useEffect(() => {

    const getWishListProducts = async() => {
    
        let wishListDataFromAsync = await AsyncStorage.getItem('wishList')
        let wishListData = JSON.parse(wishListDataFromAsync)

        if(wishListData === null){

            AsyncStorage.setItem('wishList', JSON.stringify([]))
            dispatch(wishListAction.addToWishList([]))

        }else {

            AsyncStorage.setItem('wishList',JSON.stringify(wishListData))
            dispatch(wishListAction.addToWishList(wishListData))


        }

      

    }

    getWishListProducts()



    },[route])


return(

    <SafeAreaView style = {styles.container}>

        <HeaderComponent navigation={navigation} title = 'Wish List' icon = 'back' />


        <View style = {styles.content}>

        {wishListProds ?. length > 0 ?

        <FlatList
        data = {wishListProds}
        
        renderItem = {({item,index}) => {
            return(

            <TouchableOpacity key = {index} onPress={() => {navigation.navigate('DetailScreen')}} style = {styles.cardContainer}>

            <View style = {{width:'40%'}}>

                <Image style = {{width:'100%',height:'100%'}} source= {item.img}/>


            </View>


            <View style = {{width:'60%',paddingLeft:15}}>

                <Text style = {styles.hotelNameTxt}>{item.name}</Text>

                <Text style = {styles.countryTxt}>{item.country}</Text>

            </View>



            </TouchableOpacity> 

            )

        }}

            keyExtractor = {(item,index) => index.toString()}
        />

        :

        <View style = {{flex:1, justifyContent:'center', alignItems:'center'}}>

            <Text>There is no wishListData!!!!</Text>

        </View>
        }

        </View>
    </SafeAreaView>
)
}

export default WishListScreen;

const styles = StyleSheet.create({
    
    container :  {flex:1},

    content :  {flex:1,},

    cardContainer : {flexDirection:'row',alignItems:'center',backgroundColor:colors.white,height:150,padding:10,margin:10,borderRadius:10},

    hotelNameTxt : {fontSize:18,fontWeight:'bold'},

    countryTxt : {fontSize:15, color:colors.primary}





})