import React from 'react'
import {SafeAreaView,View,Text,TouchableOpacity,StyleSheet,Modal,Dimensions,Image} from 'react-native'
import colors from '../constants/colors'

const screenWidth = Dimensions.get('screen').width


let phoneArr = [

    {
        img : require('../../assets/Flags/afghanistan.png'),
        country : 'Afgnanistan',
        number : '+95'
    },

    {

        img : require('../../assets/Flags/switzerland.png'),
        country : 'Switzerland',
        number : '+67'
    },

    {

        img : require('../../assets/Flags/myanmar.png'),
        country : 'Myanmar',
        number : '+53'

    },

    {

        img : require('../../assets/Flags/norway.png'),
        country : 'Norway',
        number : '+70'

    },

    {

        img : require('../../assets/Flags/bhutan.png'),
        country : 'Bhutan',
        number : '+75'

    },

    {

        img : require('../../assets/Flags/france.png'),
        country : 'France',
        number : '+87'

    },



]

const PhoneModalComponent = ({visible,outHandler,onPressFun}) => {


return(


    <Modal  animationType='slide' transparent = {true} visible = {visible}>

    <View style= {styles.container}>

        

        {   
            phoneArr.map((item,index) => {
                return(

                   

                    <TouchableOpacity onPress={() => {onPressFun(item.number) , outHandler()}} key = {index} style = {styles.outerView}>
                        <View style = {styles.innerView}>

                            <Image style = {{width:30,height:40,marginLeft:10}} source = {item.img}/>

                            <Text style = {styles.countryTxt}>{item.country}</Text>

                        </View>

                       <Text style = {styles.numTxt}>{item.number}</Text>




                    </TouchableOpacity>
                    
                  

                )
            })
        }

      

                  
    </View>

    </Modal>

)

}
export default PhoneModalComponent;

const styles = StyleSheet.create({
    
    container : {flex:1,backgroundColor:'rgba(0,0,0,0.5)',alignItems:'center'},

    outerView : {top:300,width:screenWidth/1.35,backgroundColor:colors.white,flexDirection:'row',justifyContent:'space-between',padding:3},

    innerView : {flexDirection:'row',},

    numTxt : {marginRight:10},

    countryTxt : {marginLeft:10},


})