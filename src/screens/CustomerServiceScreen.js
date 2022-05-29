import React from 'react'
import {SafeAreaView,View,Text,TouchableOpacity,Image,FlatList,StyleSheet} from 'react-native'
import colors from '../constants/colors';
import HeaderComponent from '../components/HeaderComponent';
import TopTabComponent from '../components/TopTabComponent';


const CustomerServiceScreen = ({navigation,route}) => {

    return(
        <SafeAreaView style = {styles.container}>

            <HeaderComponent navigation={navigation} title = 'Customer Services' icon = 'back' parentScreenName={'ProfileScreen'}/>
            <View style = {styles.content}>

            <View style = {styles.titleView}>

                <Text style = {styles.titleTxt}>Welcome to the Help Centre</Text>

                <Text style = {styles.avaTxt}>We're available 24 hours a day</Text>

            </View>
            

           

            <Text style = {styles.descTitleTxt}>Frequently asked questions</Text>

          

            <TopTabComponent navigation={navigation}/>
         

            </View>
        </SafeAreaView>
    )
}
export default CustomerServiceScreen;

const styles = StyleSheet.create({

    container : {flex:1},

    content : {flex:1},

    titleView : {height:100,backgroundColor:colors.white,margin:10,borderRadius:10,shadowColor:'#08deff',elevation:30,borderColor:'#08deff',borderWidth:1},

    titleTxt : {fontSize:20,fontWeight:'bold',marginTop:10,marginLeft:20,color:colors.txt},

    avaTxt : {fontSize:16,marginTop:10,marginLeft:20},

    
    descTitleTxt : {fontSize:18, fontWeight:'bold',marginLeft:20, marginTop:20,color:colors.txt,textShadowColor:'#0290a6',textShadowRadius:3, elevation:5},

    





})