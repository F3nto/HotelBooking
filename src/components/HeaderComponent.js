import React from "react";
import {View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native'
import colors from "../constants/colors";

const HeaderComponent = ({navigation,title,icon,parentScreenName}) => {

    return(

    <View style = {styles.container}>

        { icon == 'menu' ?

        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>

            <Image style= {styles.imgStyle} source = {require('../../assets/Icons/categories.png')}/>

        </TouchableOpacity>

            
        :

        <TouchableOpacity onPress = {() => navigation.navigate(parentScreenName)}>

            <Image style = {styles.imgStyle} source = {require('../../assets/Icons/back.png')}/>

        </TouchableOpacity>

        }

        <Text style = {styles.txtStyle}>{title}</Text>





    </View>

    )
}

export default HeaderComponent;

const styles = StyleSheet.create({

    container : {flexDirection:'row',height:60,alignItems:'center',paddingLeft:20,paddingTop:20},

    imgStyle : {width:30,height:30},

    txtStyle : {marginLeft:5,fontSize:18,fontWeight:'bold',color:'#086c80'}
    

})