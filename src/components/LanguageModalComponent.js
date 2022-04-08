import React from 'react'
import {SafeAreaView,View,Text,TouchableOpacity,Image,FlatList,StyleSheet,Modal,Dimensions} from 'react-native'
import colors from '../constants/colors'

const screenWidth = Dimensions.get('screen').width

let languageArr = [

    {
        flag: require('../../assets/National/united-states.png'),
        lan : 'English'

    },


    {
        flag: require('../../assets/National/myanmarf.png'),
        lan : 'Myanmar',

    },

    {
        flag: require('../../assets/National/japan.png'),
        lan : 'Japan',

    },

    {
        flag: require('../../assets/National/south-korea.png'),
        lan : 'Korea',

    },

    {
        flag: require('../../assets/National/india.png'),
        lan : 'India',

    },

    {
        flag: require('../../assets/National/vietnam.png'),
        lan : 'Vietnam',

    },

    {
        flag: require('../../assets/National/thailand.png'),
        lan : 'Thailand',

    },

    {
        flag: require('../../assets/National/philippines.png'),
        lan : 'Philippines',

    },

    {
        flag: require('../../assets/National/spain.png'),
        lan : 'Spain',

    },

    {
        flag: require('../../assets/National/portugal.png'),
        lan : 'Portugal',

    },

   
  
]
const LanguageModalComponent = ({navigation,visible,outLanHandler,onPressFun}) => {

    return(
        <Modal animationType='fade' transparent={true} visible={visible}>
            <View style = {styles.content}>

            <View style = {styles.titleContainer}>
                <Text style = {styles.titleTxt}>Your Language</Text>
            </View>

            

                {
                    languageArr.map((item,index) => {
                        return(
                         
                           
                            <TouchableOpacity key = {index} onPress={() => {outLanHandler() , onPressFun(item)}} style = {styles.outerView}>
                                
                                <View style = {styles.innerView}>

                                    <Image style = {{width:25,height:25}} source= {item.flag}/>
                                    <Text style = {{fontWeight:'bold', marginLeft:10}}>{item.lan}</Text>

                                </View>

                            </TouchableOpacity>
                            
                        )

                    })

                }

            



            </View>
        </Modal>
    )
}
export default LanguageModalComponent;

const styles = StyleSheet.create({

    content : {flex:1,backgroundColor:'rgba(0,0,0,0.8)',alignItems:'center',justifyContent:'center'},

    outerView : {backgroundColor:colors.white,width:screenWidth/1.5,padding:10},

    innerView : {marginTop:5,flexDirection:'row', alignItems:'center',},

    titleContainer : {backgroundColor:colors.white,borderRadius:10,shadowColor:'#3c81f0',elevation:20,top:10},

    titleTxt : {fontSize:16,fontWeight:'bold',padding:10,color:'#3c81f0'},
})