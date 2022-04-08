import React,{useState} from 'react'
import {SafeAreaView,View,Text,TouchableOpacity,Image,FlatList,StyleSheet,Modal,Dimensions} from 'react-native'
import colors from '../constants/colors'

const screenWidth = Dimensions.get('screen').width

let currencyArr = [

    {
        curImg : require('../../assets/Currency/usdollar.png'),
        curExchange : 'United State Dollar(USD)',  
       
    },

    {
        curImg : require('../../assets/Currency/euro.png'),
        curExchange : 'Euro(EUR)',  
     

    },

    {
        curImg : require('../../assets/Currency/ausdollar.png'),
        curExchange : 'Australian Dollar(AUD)',   
     

    },

    {
        curImg : require('../../assets/Currency/franc.png'),
        curExchange : 'Swiss Franc(CHF)',     
    },

    {
        curImg : require('../../assets/Currency/myanmar.png'),
        curExchange : 'Myanmar Kyat(MMK)',  
       
    },

    {
        curImg : require('../../assets/Currency/rupee.png'),
        curExchange : 'Indian Rupee(INR)',  

    },

    {
        curImg : require('../../assets/Currency/sdollar.png'),
        curExchange : 'Singapore Dollar(SGD)',     

    },

    {
        curImg : require('../../assets/Currency/won.png'),
        curExchange : 'South Korea Won(KRW)',     

    },

    {
        curImg : require('../../assets/Currency/yen.png'),
        curExchange : 'Japanese Yen(JPY)',

    },

]

const CurrencyModalComponent = ({navigation,visible,outCurHandler,onPressFun}) => {

    const [mark, setMark] = useState(false)


    return(
        <Modal animationType='fade' transparent={true} visible={visible}>
            <View style = {styles.content}>

            <View style = {styles.titleContainer}>
                <Text style = {styles.titleTxt}>Choose Your Currency</Text>
            </View>

                {
              
                    currencyArr.map((item,index) => {
                        return(

                           
                            <TouchableOpacity key = {index} onPress={() => {outCurHandler() , onPressFun(item)}} style = {styles.outerView}>
                                
                                <View style = {styles.innerView}>

                                    <Image style = {{width:25,height:25}} source= {item.curImg}/>
                                    <Text style = {{fontWeight:'bold', marginLeft:10}}>{item.curExchange}</Text>

                                    
                                  
                        
                                

                                </View>


                            </TouchableOpacity>

                        )
                    
                    })

                }

            </View>
        </Modal>
    )
}
export default CurrencyModalComponent;

const styles = StyleSheet.create({

    content : {flex:1,backgroundColor:'rgba(0,0,0,0.8)',alignItems:'center',justifyContent:'center'},

    outerView : {backgroundColor:colors.white,width:screenWidth/1.5,padding:10},

    innerView : {marginTop:5,flexDirection:'row', alignItems:'center',},

    titleContainer : {backgroundColor:colors.white,borderRadius:10,shadowColor:'#c9a401',elevation:20,top:10},

    titleTxt : {fontSize:16,fontWeight:'bold',padding:10,color:'#edcb01'}





})