import React,{useEffect} from 'react'
import {SafeAreaView,View,Text,TouchableOpacity,Image,FlatList,StyleSheet} from 'react-native'
import colors from '../constants/colors'
import HeaderComponent from '../components/HeaderComponent'
import reviewListAction from '../store/actions/reviewList'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch,useSelector } from 'react-redux'


const ReviewListScreen = ({navigation, route}) => {

    

    const reviewHotel = useSelector(state => state.ReviewList)

    const dispatch = useDispatch()

    useEffect(() => {

    const getData = async() => {

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

    getData()

    },[route])

  
  
    
    return(

        <SafeAreaView style = {styles.container}>

            <HeaderComponent navigation={navigation} title = 'Review List' icon = 'back'/>

            <View style = {styles.content}>


            <FlatList
            
            data = {reviewHotel}

            renderItem = {({item,index}) => {

            return(

                <View key= {index}>

            
            <View style = {styles.starImgContainer}>
                    
            {item.maxRating.map((i,index) => {

                return(

                    <TouchableOpacity onPress={() => {item.defaultRating}} key = {index}>

                     
                            
                        <Image  style = {{width:25,height:25}} source = {i <= item.defaultRating ? item.filledStar : item.unFilledStar}/>

                       

                    </TouchableOpacity>
                )

            })

            }

            </View>


                <Text>{item.commentTxt}</Text>



                </View>

            )

            }}
            
            
                keyExtractor = {(item,index) => index.toString()}
            
            
            />

            </View>

        </SafeAreaView>
    )
}

export default ReviewListScreen;

const styles = StyleSheet.create({
    
    container : {flex:1},

    content : {flex:1},

    starImgContainer : {flexDirection:'row',alignItems:'center',marginTop:15},


})