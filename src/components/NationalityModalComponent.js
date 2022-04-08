import React from 'react'
import {SafeAreaView,View,Text,TouchableOpacity,Image,FlatList,StyleSheet,Modal,Dimensions,ScrollView} from 'react-native'
import colors from '../constants/colors'

const screenWidth = Dimensions.get('screen').width

let NationalArr = [

    {
        flag: require('../../assets/National/united-states.png'),
        nat : 'United States(US)',

    },

    {
        flag: require('../../assets/National/united-kingdom.png'),
        nat : 'United Kingdom(UK)',

    },

    {
        flag: require('../../assets/National/myanmarf.png'),
        nat : 'Myanmar',

    },

    {
        flag: require('../../assets/National/japan.png'),
        nat : 'Japan',

    },

    {
        flag: require('../../assets/National/south-korea.png'),
        nat : 'South Korea',

    },

    {
        flag: require('../../assets/National/india.png'),
        nat : 'India',

    },

    {
        flag: require('../../assets/National/switzerland.png'),
        nat : 'Switzerland',

    },

    {
        flag: require('../../assets/National/australia.png'),
        nat : 'Australia',

    },

    {
        flag: require('../../assets/National/singapore.png'),
        nat : 'Singapore',

    },

    {
        flag: require('../../assets/National/vietnam.png'),
        nat : 'Vietnam',

    },

    {
        flag: require('../../assets/National/thailand.png'),
        nat : 'Thailand',

    },

    {
        flag: require('../../assets/National/philippines.png'),
        nat : 'Philippines',

    },

    {
        flag: require('../../assets/National/spain.png'),
        nat : 'Spain',

    },

    {
        flag: require('../../assets/National/portugal.png'),
        nat : 'Portugal',

    },

]
const NationalityModalComponent = ({navigation,visible,outNatHandler,onPressFun}) => {

    return(
        <Modal animationType='fade' transparent={true} visible={visible}>
            <ScrollView>
            <View style = {styles.content}>

            <View style = {styles.titleContainer}>
                <Text style = {styles.titleTxt}>Your Nationality</Text>
            </View>

                {
                    NationalArr.map((item,index) => {
                        return(

                           
                            <TouchableOpacity key = {index} onPress={() => {outNatHandler() , onPressFun(item)}} style = {styles.outerView}>
                                
                                <View style = {styles.innerView}>

                                    <Image style = {{width:25,height:25}} source= {item.flag}/>
                                    <Text style = {{fontWeight:'bold', marginLeft:10}}>{item.nat}</Text>

                                </View>

                            </TouchableOpacity>

                        )

                    })

                }



            </View>

            </ScrollView>
        </Modal>
    )
}
export default NationalityModalComponent;

const styles = StyleSheet.create({

    content : {flex:1,backgroundColor:'rgba(0,0,0,0.8)',alignItems:'center',justifyContent:'center'},

    outerView : {backgroundColor:colors.white,width:screenWidth/1.5,padding:10},

    innerView : {marginTop:5,flexDirection:'row', alignItems:'center',},

    titleContainer : {backgroundColor:colors.white,borderRadius:10,shadowColor:'#ff1414',elevation:20,top:10},

    titleTxt : {fontSize:16,fontWeight:'bold',padding:10,color:'#ff0000'},
})