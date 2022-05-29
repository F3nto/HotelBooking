import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'



const InsertScreen = ({navigation,route}) => {

         
    let mapData = [

        {
            lat : '48.8629586320137 ',
            long : '2.336680454753261'

        },

        {
            lat : '16.844895743386605',
            long : '96.13769964643589'

        },

        {
            lat : '47.36697804554467',
            long : '8.539072879824252'

        },

        {
            lat : '35.674915958472944',
            long : '139.76109266961265'

        },

        {
            lat : '40.4697686283272',
            long : '-3.6686848878993636'

        },

        {
            lat : '45.480025195712955',
            long : '9.196993639272227'

        },

        {
            lat : '1.2913226607573542',
            long : '103.86091483047251'

        },

        {
            lat : '37.51279110663624',
            long : '127.10309282549188'

        },

        {
            lat : '25.23473343430471', 
            long : '55.32446528900197'

        }

    ]
    


    const InsertMapData = () => {

    fetch('https://hotel-5874d-default-rtdb.firebaseio.com/',{

    method : 'POST',
  
    headers : {
        
        'Content-Type' : 'application/json'
    
    },

    body : JSON.stringify(mapData)



    })

    }
  

    return(

        <View style = {{flex:1,justifyContent:'center', alignItems:'center'}}>

        <TouchableOpacity onPress={() => InsertMapData()}>

            <Text>Insert Map</Text>

        </TouchableOpacity>

        </View>


    )
    
}

export default InsertScreen;