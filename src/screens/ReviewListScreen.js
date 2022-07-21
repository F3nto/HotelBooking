import React,{useEffect} from 'react'
import {SafeAreaView,View,Text,TouchableOpacity,Image,FlatList,StyleSheet,Dimensions,ImageBackground} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import colors from '../constants/colors'
import AsyncStorage from '@react-native-async-storage/async-storage'
import HeaderComponent from '../components/HeaderComponent'
import reviewListAction from '../store/actions/reviewList'
import authAction from '../store/actions/auth'
import { useDispatch,useSelector } from 'react-redux'
import ProfileScreen from './ProfileScreen'

const screenWidth = Dimensions.get('screen').width
const screenHeight = Dimensions.get('screen').height


const ReviewListScreen = ({navigation, route}) => {

   
    const reviewHotel = useSelector(state => state.ReviewList)

    const userName = useSelector(state => state.Auth)

    const dispatch = useDispatch()

    useEffect(() => {

    const getUserInfo = async() => {

        const userinfoFromAsync = await AsyncStorage.getItem('userInfo')

        const getUserName = JSON.parse(userinfoFromAsync)

        if(getUserName == null){

            AsyncStorage.setItem('userInfo',JSON.stringify([]))
            dispatch(authAction.addToAuth([]))


        }else{

            AsyncStorage.setItem('userInfo', JSON.stringify(getUserName))
            dispatch(authAction.addToAuth(getUserName))

        }
    }

    
    const getReviewData = async() => {

        const reviewDataFromAsync = await AsyncStorage.getItem('reviewList')

        const getReviewData = JSON.parse(reviewDataFromAsync)

        if(getReviewData == null){

            AsyncStorage.setItem('reviewList', JSON.stringify([]))
            dispatch(reviewListAction.addToReviewList([]))


        }else{

            AsyncStorage.setItem('reviewList', JSON.stringify(getReviewData))
            dispatch(reviewListAction.addToReviewList(getReviewData))

        }
        
    }

    getUserInfo()
    getReviewData()
   

    },[route])


    
    return(

        <SafeAreaView style = {styles.container}>

        <HeaderComponent navigation={navigation} title = 'Review List Screen' icon='back' parentScreenName={ProfileScreen}/>

        <View style = {styles.content}>

            {reviewHotel ?. length > 0 ?

            <FlatList
            
            data = {reviewHotel}

            renderItem = {({item,index}) => {

            return(

            <TouchableOpacity onPress={() => navigation.navigate('DetailScreen', {hotel : item, parentScreen : 'ReviewListScreen'})} style = {styles.cardContainer} key= {index}>

    
          
                <Image style = {{width:'110%',height:'130%',position:'absolute',resizeMode:'cover',opacity:0.5,borderRadius:10}} source = {item.img}/>
        
           
                
                <View style = {styles.profileNameContainer}>

                    <View>

                    <Image style = {{width:80,height:80,borderRadius:70}} source= {require('../../assets/tor.jpg')}/>

                    </View>

                    <View style = {{marginTop:15}}>

                    <Text style = {styles.titleTxt}>{userName}</Text>

                       
                        <View style = {styles.starImgContainer}>

                         
                            
                            {item.maxRating.map((i,starIndex) => {
                
                                return(

                                    <View key = {starIndex}>
                
                                        <TouchableOpacity onPress={() => item.defaultRating}>
                    
                                            <Image style = {{width:25,height:25}} source = {i <= item.defaultRating ? item.filledStar : item.unFilledStar}/>
                    
                                        </TouchableOpacity>

                                    </View>
                                )
                
                            })
                
                            }

                           
                
                        </View>

                        </View>

                </View>

              

         


                <Text style = {styles.commentTxtStyle}>{item.commentTxt}</Text>


            
            </TouchableOpacity>

      
            )

            }}
            
            
                keyExtractor = {(item,index) => index.toString()}

                ListFooterComponent = {

                    <TouchableOpacity onPress={() => {
                    
                    AsyncStorage.removeItem('reviewList')
                    dispatch(reviewListAction.addToReviewList([]))
                    
                     
                   }} >

                    <LinearGradient colors={['#18c1c9','#3df5ff', '#c9fbff',]} start = {{x : 0,y : 1}} end = {{x:1,y:0}} style = {styles.footer}> 

                        <Text style = {{fontSize:16,fontWeight:'bold',color:colors.txt}}>Remove All</Text>

                    </LinearGradient>

                    </TouchableOpacity>

                 
                }
            
            
            />

            :

            <View style = {{flex:1, justifyContent:'center', alignItems:'center'}}>

                <View style = {{width:150,height:150}}>

                    <Image style = {{width:'100%', height:'100%'}} source = {require('../../assets/seee-dog.webp')}/>

                </View>

                <Text style = {{fontSize:16,fontWeight:'bold', color:colors.txt,marginTop:10}}>There is no review list data.</Text>
            
            </View>


            }

            </View>

        </SafeAreaView>
    )
}

export default ReviewListScreen;

const styles = StyleSheet.create({
    
    container : {flex:1},

    content : {flex:1,backgroundColor:colors.white},

    cardContainer : {padding:15,margin:10,backgroundColor:colors.white,shadowColor:'#009fb8',elevation:5,borderRadius:10},

    profileAndImgContainer : {flexDirection:'row',alignItems:'center',justifyContent:'space-between'},

    starImgContainer : {flexDirection:'row',alignItems:'center',marginLeft:10,justifyContent:'space-evenly'},

    userNameTxt : {fontSize:16,fontWeight:'bold',color:colors.txt},

    commentTxtStyle : {fontSize:16, color:colors.txt,fontWeight:'bold',marginLeft:90},

    titleTxt : {fontSize:20, fontWeight:'bold', color:colors.primary, marginLeft:15},

    profileNameContainer : {flexDirection:'row', alignItems:'center'},

    footer : {justifyContent:'center', alignItems:'center',width:screenWidth,padding:10,backgroundColor:colors.orange,borderRadius:10}

    

   


})