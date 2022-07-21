import React, {useState, useEffect} from 'react'
import {SafeAreaView,View,TouchableOpacity,Text,Image,Modal,StyleSheet,Dimensions,TextInput,ToastAndroid} from 'react-native'
import colors from '../constants/colors'
import {LinearGradient} from 'expo-linear-gradient'
import bookingListAction from '../store/actions/bookingList'
import authAction from '../store/actions/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useDispatch,useSelector} from 'react-redux'
import reviewListAction from '../store/actions/reviewList'


const screenWidth = Dimensions.get('screen').width

const ReviewModalComponent = ({navigation,route}) => {

    let {reviewHotel} = route.params

    const dispatch = useDispatch()
    
    const [commentTxt, setCommentTxt] = useState('')

    const [defaultRating , setDefaultRating] = useState(2)
    const [maxRating, setMaxRating] = useState([1,2,3,4,5])

    

    const unFilledStar = require('../../assets/unfillstar.png')

    const filledStar = require('../../assets/filledstar.png')

    const userName = useSelector(state => state.Auth)

    const userNameShow = (userName) => {

        AsyncStorage.setItem('userInfo', JSON.stringify(userName))
        dispatch(authAction.addToAuth(userName))
        

    }

    const reviewSuccessToast = () => {

        ToastAndroid.showWithGravityAndOffset(
 
            "Thank you for your review!!!",
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,
     
           
         )




    }


    const saveToReviewList = (reviewHotel) => {

        reviewHotel.commentTxt = commentTxt

        reviewHotel.defaultRating = defaultRating

        reviewHotel.maxRating = maxRating

        reviewHotel.filledStar = filledStar

        reviewHotel.unFilledStar = unFilledStar


    AsyncStorage.getItem('reviewList').then((res) => {

        const hotelData = JSON.parse(res)

        let hotelArr = []

        if(hotelData == null){

            hotelArr.push(reviewHotel)

            AsyncStorage.setItem('reviewList', JSON.stringify(hotelArr))
            dispatch(reviewListAction.addToReviewList(hotelArr))


        }else{


            hotelData.push(reviewHotel)

            AsyncStorage.setItem('reviewList', JSON.stringify(hotelData))
            dispatch(reviewListAction.addToReviewList(hotelData))

        }

    }) 

 
    .catch((error) => {


        console.log(error)


    })

    setCommentTxt('')

    
    }

    return(

        <View style = {styles.container}>

        <View style = {styles.rateView}>

            <Text style = {styles.rateTxt}>Please Rate Us!!</Text>

        </View>

        <View style = {styles.content}>

        <View style = {styles.starImgContainer}>

            

            {maxRating.map((item,index) => {

        

                return(

                    <TouchableOpacity onPress={() => {setDefaultRating(item)}} key = {index}>

                     
                            
                        <Image  style = {{width:25,height:25}} source = {item <= defaultRating ? filledStar : unFilledStar}/>

                       

                    </TouchableOpacity>
                )

            })

            }

            

        </View>

        <View style = {styles.txtInputContainer}>

            <TextInput
            
            placeholder='Comment here...'
            
            value={commentTxt}
            
            onChangeText = {text => setCommentTxt(text)}

            multiline = {true}

            
            />

        </View>
        

            <View style = {styles.bottomOuterContainer}>

            <TouchableOpacity onPress={() => navigation.navigate('BookingListScreen')}>
                
                <LinearGradient colors={['#18c1c9','#3df5ff', '#c9fbff',]} start = {{x : 0,y : 0}} end = {{x:1,y:1}} style = {styles.bottomInnerContainer}>

                    <Text style = {styles.bottomTxt}>Cancel</Text>

                </LinearGradient>

            </TouchableOpacity>

            <TouchableOpacity onPress={() => {navigation.navigate('BookingListScreen'), saveToReviewList(reviewHotel), userNameShow(userName), reviewSuccessToast()}}>

                <LinearGradient colors={['#18c1c9','#3df5ff', '#c9fbff',]} start = {{x : 0,y : 0}} end = {{x:1,y:1}} style = {styles.bottomInnerContainer}>

                    <Text style = {styles.bottomTxt}>Ok</Text>

                </LinearGradient>

            </TouchableOpacity>

        </View>


        
        </View>

        </View>


       

    )

}

export default ReviewModalComponent;

const styles = StyleSheet.create({ 

    container : {flex:1, backgroundColor:'rgba(0,0,0,0.8)',alignItems:'center',justifyContent:'center'},

    content : {width:screenWidth/1.5,backgroundColor:colors.white,padding:10,borderRadius:10},

    rateView : {backgroundColor:colors.white,padding:10,borderRadius:10,
                justifyContent:'center',alignItems:'center',
                shadowColor:'#ff0000',elevation:10,borderColor:'#fc6b03',borderWidth:1,shadowRadius:10,
                top:10},

    rateTxt : {fontSize:18, fontWeight:'bold', color:colors.txt},

    starImgContainer : {flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',marginTop:15},

    txtInputContainer : {height:screenWidth/2,padding:10,
                        borderWidth:1, borderRadius:10,
                        marginTop:20, shadowColor:'#ff0000',elevation:10,borderColor:'#fc6b03',shadowRadius:5,
                        backgroundColor:colors.white},

    
    bottomOuterContainer : {flexDirection:'row', alignItems:'center',justifyContent:'space-between',marginTop:15},

    bottomInnerContainer : {width:100,padding:10,borderRadius:10,justifyContent:'center',alignItems:'center'},

    bottomTxt : {fontSize:16,fontWeight:'bold', color:colors.txt}
})