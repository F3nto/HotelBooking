import React from 'react'
import {SafeAreaView,View,Text,TouchableOpacity,StyleSheet,Modal,Dimensions,Image} from 'react-native'
import colors from '../constants/colors'

const screenWidth = Dimensions.get('screen').width

const ModalComponent = ({visible,outHandler}) => {
return(

    <Modal animationType='slide' transparent = {true} visible = {visible}>

    <View style = {styles.container}>

        <View style = {styles.outerView}>

            <View style = {styles.selectRoomtxtContainer}>

                <Text style = {styles.selectRoomtxt}>Select Rooms and guests</Text>

            </View>

           
            <View style = {{padding:20}}>

            <View style = {styles.romaduchiContainer}>

                <Text>Rooms</Text>
                
                <View style = {styles.plusAndMinusContainer}>

                    <Image style = {styles.imgStyle} source = {require('../../assets/Icons/minus.png')}/>

                    <Text style = {styles.txtStyle}>0</Text>

                    <Image style = {styles.imgStyle} source = {require('../../assets/Icons/plus.png')}/>


                </View>


            </View>

            <View style = {{width:'100%', height:2, backgroundColor:colors.primary,marginTop:15}}/>

            <View style = {styles.romaduchiContainer}>

                <Text>Adults</Text>

                
                <View style = {styles.plusAndMinusContainer}>

                    <Image style = {styles.imgStyle} source = {require('../../assets/Icons/minus.png')}/>

                    <Text style = {styles.txtStyle}>0</Text>

                    <Image style = {styles.imgStyle} source = {require('../../assets/Icons/plus.png')}/>


                </View>
            </View>

            <View style = {{width:'100%', height:2, backgroundColor:colors.primary,marginTop:15}}/>

            <View style = {styles.romaduchiContainer}>


                <Text>Children</Text>

                
                <View style = {styles.plusAndMinusContainer}>

                    <Image style = {styles.imgStyle} source = {require('../../assets/Icons/minus.png')}/>

                    <Text style = {styles.txtStyle}>0</Text>

                    <Image style = {styles.imgStyle} source = {require('../../assets/Icons/plus.png')}/>


                </View>
            </View>

            <View style = {{width:'100%', height:2, backgroundColor:colors.primary,marginTop:15,}}/>


            <TouchableOpacity style = {styles.applyContainer} onPress = {() => outHandler()}>

                <Text style = {styles.applyTxt}>Apply</Text>

            </TouchableOpacity>


        </View>

        </View>


    </View>
    </Modal>
    
)
}
export default ModalComponent;

const styles = StyleSheet.create({

    container : {flex:1,backgroundColor:'rgba(0,0,0,0.5)'},

    outerView: {top:440,backgroundColor:colors.homeBg,height:screenWidth/1.35},

    selectRoomtxtContainer : {alignItems:'center',marginTop:20},

    selectRoomtxt : {fontSize:16,fontWeight:'bold',},

    romaduchiContainer : {flexDirection:'row', justifyContent:'space-between',alignItems:'center',marginTop:10},

    plusAndMinusContainer : {flexDirection:'row', alignItems:'center'},

    imgStyle : {width:25, height:25},

    txtStyle : {fontSize:16,fontWeight:'bold',paddingHorizontal:10},

    applyContainer : {backgroundColor:colors.primary,justifyContent:'center',alignItems:'center',marginTop:5,padding:8,borderRadius:10},

    applyTxt : {fontSize:16, fontWeight:'bold', color:colors.white}
})