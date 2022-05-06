import React from "react";
import {SafeAreaView,View,Text,TouchableOpacity,StyleSheet,FlatList,Image,Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import HeaderComponent from "../components/HeaderComponent";
import BottomTabComponent from "../components/BottomTabComponent";
import colors from "../constants/colors";

const screenWidth = Dimensions.get('screen').width      
 

const hotelArr = [

    {   _id      : 0,
        img      : require('../../assets/HotelDuLouvre/hotdu1.jpg'), 
        name     : 'Hotel Du Louvre',
        rate     : '(5.0)',
        location : 'Paris',
        country  : 'France',
        price    : '252',
        discount : '50',
        pernight : 'per night',
        locationDetail : 'Within 20 minutes walk from Opera Metro Station, Hotel du Louvre in the Unbound Collection by Hyatt offers guests an ideal base when in Paris. It is situated a short stroll from Musee du Louvre and Tuileries Garden.',
        backgroundImg  : require('../../assets/BackgroundImage/FranceBg.jpg'),

        detailImg : [
            
            {
                img2 : require('../../assets/HotelDuLouvre/hotdu2.jpg'),
                img3 : require('../../assets/HotelDuLouvre/hotdu3.jpg'),
                img4 : require('../../assets/HotelDuLouvre/hotdu4.jpg'),     
            }

        ]
        
    },

    {   
        _id      :  1,
        img      :  require('../../assets/LotteHotel/lotte1.jpg'), 
        name     : 'Lotte Hotel',
        rate     : '(5.0)',
        location : 'Yangon',
        country  : 'Myanmar',
        price    : '125',
        discount : '25',
        pernight : 'per night',
        locationDetail : 'No. 82, Sin Phyu Shin Avenue, Pyay Road, Yangon, Myanmar',
        backgroundImg  : require('../../assets/BackgroundImage/YangonBg.jpg'),

        detailImg : [

            {
                img2 : require('../../assets/LotteHotel/lotte2.jpg'),
                img3 : require('../../assets/LotteHotel/lotte3.jpg'),
                img4 : require('../../assets/LotteHotel/lotte4.jpg'),


            }

        ]

    },

    {   
        _id      : 2,
        img      :  require('../../assets/BaurauLac/Bau1.jpg'), 
        name     : 'Baur Au Lac Hotel',
        rate     : '(5.0)',
        location : 'Zurich',
        country  : 'Switzerland',
        price    : '423',
        discount : '0',
        pernight : 'per night',
        locationDetail : 'Situated amongst local tourist attractions, Baur au Lac is a short walk from Bahnhofstrasse. It boasts views of Zurich, Prehistoric Pile Dwellings Around the Alps and Lake Zurich and provides a variety of facilities, including valet parking',
        backgroundImg  : require('../../assets/BackgroundImage/SwitzerlandBg.jpg'),
        detailImg : [

            {
                img2 : require('../../assets/BaurauLac/Bau2.jpg'),
                img3 : require('../../assets/BaurauLac/Bau3.jpg'),
                img4 : require('../../assets/BaurauLac/Bau4.jpg'),
            }
        ]

    },

    {   
        _id      : 3,
        img      :  require('../../assets/Peninsula/Pen1.jpg'), 
        name     : 'Peninsula Hotel',
        rate     : '(5.0)',
        location : 'Tokyo',
        country  : 'Japan',
        price    : '325',
        discount : '50',
        pernight : 'per night',
        locationDetail : 'The Peninsula Tokyo is conveniently located near Tokyo Electric Power Company, Hibiya Park and Marunouchi. It is situated in Chiyoda and has easy access to public transport, with Tokyo Railway',
        backgroundImg  : require('../../assets/BackgroundImage/JapanBg.jpg'),

        detailImg : [
            
            {
                img2 : require('../../assets/Peninsula/Pen2.jpg'),
                img3 : require('../../assets/Peninsula/Pen3.jpg'),
                img4 : require('../../assets/Peninsula/Pen4.jpg'),
            }
        ]

    },

    {   
        _id      :  4,
        img      :  require('../../assets/Nuevo/Nue1.jpg'), 
        name     : 'Hotel Nuevo Madrid',
        rate     : '(5.0)',
        location : 'Madird',
        country  : 'Spanish',
        price    : '250',
        discount : '50',
        pernight : 'per night',
        locationDetail : 'Hotel Nuevo Madrid offers 4-star accommodation, as well as a Turkish steam bath, a sauna and a Jacuzzi. This contemporary property is conveniently located in Costillares and is within walking distance of Manoteras Metro Station.',
        backgroundImg  : require('../../assets/BackgroundImage/SpainBg.jpg'),

        detailImg : [

            {
                img2 : require('../../assets/Nuevo/Nue2.jpg'),
                img3 : require('../../assets/Nuevo/Nue3.jpg'),
                img4 : require('../../assets/Nuevo/Nue4.jpg'),
            }
        ]

    },

    {   
        _id      :  5,
        img      :  require('../../assets/PrincipediSavoia/Prin1.jpeg'), 
        name     : 'Hotel Principe Di Savoia',
        rate     : '(5.0)',
        location : 'Milan',
        country  : 'Italy',
        price    : '400',
        discount : '0',
        pernight : 'per night',
        locationDetail : 'The Hotel Principe Di Savoia is located in Milan Italy and only 350 feet from the Repubblica Metro and Train Station for access to the rest of the city. Porta Nuova and Piazza Gae Aulenti Square are about 3,100 feet away while Rho Fiera Milano Exhibition Center is less than 10 miles',
        backgroundImg  : require('../../assets/BackgroundImage/ItalyBg.jpg'),

        detailImg : [

            {
                img2 : require('../../assets/PrincipediSavoia/Prin2.jpeg'),  
                img3 : require('../../assets/PrincipediSavoia/Prin3.jpeg'),
                img4 : require('../../assets/PrincipediSavoia/Prin4.jpeg'),
            }
        ]
    },

    {   
        _id      :  6,
        img      :  require('../../assets/RitzCarlton/Rit1.jpg'), 
        name     : 'Ritz-Carlton Millenia',
        rate     : '(5.0)',
        location : 'Singapore',
        country  : 'Singapore',
        price    : '200',
        discount : '50',
        pernight : 'per night',
        locationDetail : 'Situated in Singapore City Centre, this hotel is a short walk from Suntec City, Marina Bay Sands Casino and Singapore Flyer. A limousine service, outdoor tennis courts and a swimming pool are just some of the deluxe amenities available to guests throughout their stay.',
        backgroundImg  : require('../../assets/BackgroundImage/SingaporeBg.jpg'),

        detailImg : [

            {
                img2 : require('../../assets/RitzCarlton/Rit2.jpg'),
                img3 : require('../../assets/RitzCarlton/Rit3.jpg'),
                img4 : require('../../assets/RitzCarlton/Rit4.jpg'),

            }

        ]
    },

    {   
        _id      :  7,
        img      :  require('../../assets/Signiel/sign1.jpg'), 
        name     : 'Signiel Seoul',
        rate     : '(5.0)',
        location : 'Seoul',
        country  : 'Korea',
        price    : '150',
        discount : '0',
        pernight : 'per night',
        locationDetail : 'Lotte World Tower 76f-101f, Songpa-gu, Seoul 05551, South Korea',
        backgroundImg  : require('../../assets/BackgroundImage/KoreaBg.jpg'),

        detailImg : [

            {
                img2 : require('../../assets/Signiel/sign2.jpg'),
                img3 : require('../../assets/Signiel/sign3.jpg'),
                img4 : require('../../assets/Signiel/sign4.jpg'),
            }
        ]
    },

    {   
        _id      :  8,
        img      :  require('../../assets/HyattRegency/hyat1.jpg'), 
        name     : 'Hyatt Regency Dubai',
        rate     : '(5.0)',
        location : 'Dubai',
        country  : 'UAE(United Arab Emirates)',
        price    : '550',
        discount : '100',
        pernight : 'per night',
        locationDetail : 'Situated in Dubai, Hyatt Regency Dubai Creek Heights is within a 10-minute drive of Dubai International Airport and provides a Jacuzzi, a rooftop terrace and an infinity pool. It is surrounded by a variety of well-known shops and is minutes on foot from Dubai Healthcare City Station.',
        backgroundImg  : require('../../assets/BackgroundImage/DubaiBg.jpg'),

        detailImg : [

            {
                img2 : require('../../assets/HyattRegency/hyat2.jpg'),
                img3 : require('../../assets/HyattRegency/hyat3.jpg'),
                img4 : require('../../assets/HyattRegency/hyat4.jpg'),
            }

        ]
    },


]

const starIconArr = [

    <Icon name = 'star' size={23} color='#f5a623'/>,
    <Icon name = 'star' size={23} color='#f5a623'/>,
    <Icon name = 'star' size={23} color='#f5a623'/>,
    <Icon name = 'star' size={23} color='#f5a623'/>,
    <Icon name = 'star' size={23} color='#f5a623'/>,

]

const HomeScreen = ({navigation,route}) => {

    const StarIcons = () => {
    
    return(
        <View style = {styles.starIconsContainer}>

        {starIconArr.map((item,index) => {                  
            return(

                <View key = {index}>{item}</View>
            )
        })
        }

        </View>
    )}


    return(

        <SafeAreaView style = {styles.container}>

            <HeaderComponent navigation={navigation} title = 'Home' icon = 'menu'/>

            <View style = {styles.content}> 

                <FlatList

                margin= {7}
                showsVerticalScrollIndicator = {false}
                data = {hotelArr}
                renderItem = {({item,index}) => {
                return(

                <TouchableOpacity onPress={() => {navigation.navigate('DetailScreen', {hotel : item, parentScreen : 'HomeScreen'})}} style = {styles.cardContainer}>
                    
                <View style = {{height:screenWidth/2-5,}}>
                    <Image style = {styles.imgContainer} source = {item.img}/>
                </View>

                <View style = {styles.cardBottomOuterContainer}>

                    <View style = {styles.cardBottomInnerContainer}>


                        <Text style = {styles.nameText}>{item.name}</Text>                          

                        <View style = {styles.starAndRateView}>    

                            <StarIcons/>                 

                            <Text style = {styles.rate}>{item.rate}</Text>
                            
                        </View>

                        <View style = {styles.locationView}>

                            <Icon name = 'place' size= {20} color= '#033640'/>
                            <Text style = {styles.locationText}>{item.location}</Text>

                        </View>

                    
                    </View>

                    <View style = {styles.perNightContainer}>

                        <Text style = {{fontSize:25, color:'#033640'}}>${item.price}</Text>

                        <Text style = {{color:'#086c80'}}>per night</Text>

                    </View>

                </View>
              

                </TouchableOpacity>


                )}}

                keyExtractor = {(item,index) => index.toString()}

                
                />

            </View>
            <BottomTabComponent navigation={navigation} screenName = 'Home'/>
        </SafeAreaView>
    )
}
export default HomeScreen;

const styles = StyleSheet.create({

    container : {flex:1},

    content   : {flex:1, backgroundColor: colors.white},

    imgContainer : {width:'100%', height:'100%',borderTopRightRadius:10, borderTopLeftRadius:10},

    nameText  : {fontSize:18, color:colors.primary,fontWeight:'bold',marginLeft:5},

    cardContainer : {height:280, margin:7,backgroundColor:colors.homeBg, borderRadius:10, shadowColor:colors.primary, elevation:7},

    starAndRateView : {flexDirection:'row', alignItems : 'center'},

    starIconsContainer : {flexDirection:'row', alignItems:'center'},

    rate : {fontSize:15, fontWeight:'bold',paddingLeft:5},

    locationView : {flexDirection:'row', alignItems:'center'},

    locationText : {fontSize:14, fontWeight:'bold', color:'#086c80', opacity:0.8},

    cardBottomInnerContainer : {marginLeft:5,justifyContent:'space-evenly',padding:7},

    cardBottomOuterContainer : {flex:1,flexDirection:'row', justifyContent:'space-between'},

    perNightContainer : {marginRight:15,marginTop:20}

})