import React from 'react'
import {SafeAreaView,View,Text,TouchableOpacity,Image,FlatList,StyleSheet,Dimensions} from 'react-native'
import colors from '../constants/colors'

const screenWidth = Dimensions.get('screen').width

const HelpScreen = ({navigation,route}) => {

    return(
        <SafeAreaView style = {styles.container}>
            <View style = {styles.content}>
            
           
            <TouchableOpacity onPress={() => navigation.navigate('ContactUsScreen')} style = {styles.commonView}>

                <Text style = {styles.commonTxt}>Contact Us</Text>

                <Image style = {{width:25,height:25}} source={require('../../assets/Icons/next.png')} />

            </TouchableOpacity>

            <View style = {{width:screenWidth,marginTop:10,height:1,backgroundColor:'#0290a6'}}/>

            </View>
        </SafeAreaView>
    )
}
export default HelpScreen;

const styles = StyleSheet.create({

    container : {flex:1},

    content : {flex:1,justifyContent:'center',alignItems:'center'},

    commonView : {padding:10,flexDirection:'row',alignItems:'center',justifyContent:'space-between',backgroundColor:colors.white,borderRadius:10,shadowColor:'#08deff',elevation:5,borderColor:'#08deff',borderWidth:0.5},

    commonTxt : {marginLeft:15,fontSize:18,fontWeight:'bold',color:colors.txt,textShadowColor:'#0290a6',textShadowRadius:2}

})