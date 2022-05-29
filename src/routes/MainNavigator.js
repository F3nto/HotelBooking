import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createDrawerNavigator,DrawerContentScrollView} from '@react-navigation/drawer'
import DrawerNavigator from "./DrawerNavigator";

import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import BookingScreen from "../screens/BookingScreen";
import WishListScreen from "../screens/WishListScreen";
import ProfileScreen from "../screens/ProfileScreen";
import BookingListScreen from "../screens/BookingListScreen";
import ContactUsScreen from "../screens/ContactUsScreen";
import CustomerServiceScreen from '../screens/CustomerServiceScreen';
import AccommodationScreen from "../screens/AccommodationScreen";
import HelpScreen from "../screens/HelpScreen";
import CoronavirusScreen from "../screens/CoronavirusScreen";
import CancellationScreen from "../screens/CancellationScreen";
import BookingDetailScreen from "../screens/BookingDetailScreen";
import PaymentScreen from "../screens/PaymentScreen";
import PricingScreen from "../screens/PricingScreen";
import PropertiesPoliciesScreen from "../screens/PropertyPoliciesScreen";
import ExtraFacilitiesScreen from "../screens/ExtraFacilitiesScreen";
import MapView from '../map/MapView'
import InsertScreen from "../screens/MapData/InsertScreen";



const stack = createNativeStackNavigator()
const drawer = createDrawerNavigator()

const CustomDrawerContent = props => {
    return(

        <DrawerContentScrollView {...props}>

            <DrawerNavigator navigation={props.navigation}/>


        </DrawerContentScrollView>



    )
}





const MainNavigator = () => {
    return(

        <NavigationContainer>
            <drawer.Navigator drawerContent={props => CustomDrawerContent(props)} screenOptions={{headerShown:false}}>

                <drawer.Screen name = 'HomeScreen'            component={HomeScreen}/>
                <drawer.Screen name = 'DetailScreen'          component={DetailScreen}/>
                <drawer.Screen name = 'BookingScreen'         component={BookingScreen}/>
                <drawer.Screen name = 'WishListScreen'        component={WishListScreen}/>
                <drawer.Screen name = 'ProfileScreen'         component={ProfileScreen}/>
                <drawer.Screen name = 'BookingListScreen'     component={BookingListScreen}/>
                <drawer.Screen name = 'ContactUsScreen'       component={ContactUsScreen}/>
                <drawer.Screen name = 'CustomerServiceScreen' component={CustomerServiceScreen}/>
                <drawer.Screen name = 'AccommodationScreen'   component={AccommodationScreen}/>
                <drawer.Screen name = 'HelpScreen'            component={HelpScreen}/>
                <drawer.Screen name = 'CoronavirusScreen'     component={CoronavirusScreen}/>
                <drawer.Screen name = 'CancellationScreen'    component={CancellationScreen}/>
                <drawer.Screen name = 'BookingDetailScreen'   component={BookingDetailScreen}/>
                <drawer.Screen name = 'PaymentScreen'         component={PaymentScreen}/>
                <drawer.Screen name = 'PricingScreen'         component={PricingScreen}/>
                <drawer.Screen name = 'PropertiesPoliciesScreen' component={PropertiesPoliciesScreen}/>
                <drawer.Screen name = 'ExtraFacilitiesScreen'   component={ExtraFacilitiesScreen}/>
                <drawer.Screen name = 'MapViewScreen' component={MapView}/>
                <drawer.Screen name = 'InsertScreen' component={InsertScreen}/>

                
            </drawer.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator;