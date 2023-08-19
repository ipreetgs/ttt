import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, Keyboard, KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import Bar from "./src/screens/Bar/Bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProductView from "./src/components/ProductView";
import Whiskey from "./src/screens/Whiskey/Whiskey";
import navigationStrings from "./src/constants/navigationStrings";
import imagePath from "./src/constants/imagePath";
import SharabiProfile from "./src/screens/ShrabiProfile/SharabiProfile";
import AddToCart from "./src/screens/AddToCart/AddToCart";
import AllDaru from "./src/screens/AllDaru/AllDaru";
import TrendingDaru from "./src/components/TrendingDaru";
import WhatsPopularDaru from "./src/screens/WhatsPopularDaru.js/WhatsPopularDaru";
import colors from "./src/constants/colors";
import Header from "./src/components/Header";
import SplashScreen from "react-native-splash-screen";
import SearchLocation from "./src/screens/SearchLocatin/SearchLocation";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const [keyboardVisible, setKeyboardVisible] = useState(false);
 
  // useEffect(() => {
  //   const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
  //     setKeyboardVisible(true);
  //   });

  //   const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
  //     setKeyboardVisible(false);
  //   });

  //   return () => {
  //     keyboardDidShowListener.remove();
  //     keyboardDidHideListener.remove();
  //   };
  // }, []);
  useEffect(()=>{
    SplashScreen.hide()
  } ,[])
  const MainStack = () => {
    return (
      <>
        <Stack.Navigator>
          <Stack.Screen name={navigationStrings.BAR} component={Bar} options={{headerShown : false}} />
          <Stack.Screen name={navigationStrings.WHISKEY} component={Whiskey} options={{headerShown : false}}/>
          <Stack.Screen name={navigationStrings.ALLDARU} component={AllDaru} options={{headerShown : false}}/>
          <Stack.Screen name={navigationStrings.WHATSPOPULARDARU} component={WhatsPopularDaru} options={{headerShown : false}}/>
          <Stack.Screen name={navigationStrings.SEARCHLOCATION} component={SearchLocation} options={{headerShown : false}}/>
          


        </Stack.Navigator>
      </>
    );
  };
  const MainStack3 = () => {
    return (
      <>
        <Stack.Navigator>
          <Stack.Screen name={navigationStrings.SHARABIPROFILE} component={SharabiProfile} options={{headerShown : false}} />
        </Stack.Navigator>
      </>
    );
  };
  const MainStack2 = () => {
    return (
      <>
        <Stack.Navigator>
          <Stack.Screen name={navigationStrings.ADDTOCART} component={AddToCart} options={{headerShown : false}} />



        </Stack.Navigator>
      </>
    );
  };
  return (
    <>
      <NavigationContainer>
      {!keyboardVisible && 
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            
            tabBarStyle: {
              alignContent: "center",
              alignItems: "center",
              justifyContent: 'center',
              // position: "absolute",
              // bottom:0,
              // right: 0,
              // left: 0,
              shadowColor: "#000",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,

              elevation: 24,
              height: '10%',
           
            }, 
           
          
          
            // Background color of the tab bar
          }}

          
        >
          <Tab.Screen component={MainStack} name="MainStack" options={{    tabBarLabel : "",tabBarIcon: ({ focused, color, size })=>{
                 return (
                  <Image
                    source={focused ? imagePath.bar : imagePath.barInactive}
                    style={{ tintColor: focused ? colors.daruColor : 'gray', width: 40, height: 40 , resizeMode: "cover"   }}
                  />
                );
          
          }
        }}/>

             <Tab.Screen component={MainStack2} name={navigationStrings.ADDTOCART} options={{    tabBarLabel : "",tabBarIcon: ({ focused, color, size })=>{
                 return (
                  <Image
                    source={focused ? imagePath.cart : imagePath.cartInacitve}
                    style={{ tintColor: focused ? colors.daruColor : 'gray', width: 40, height: 40, resizeMode: "cover" }}
                  />
                );
          
          }
        }}/>
                   <Tab.Screen component={MainStack3} name={navigationStrings.SHARABIPROFILE} options={{    tabBarLabel : "",tabBarIcon: ({ focused, color, size })=>{
                 return (
                  <Image
                    source={focused ? imagePath.profile : imagePath.profileInactive}
                    style={{ tintColor: focused ? colors.daruColor : 'gray', width: 40, height: 40,   resizeMode: 'cover'}}
                  />
                );
          
          }
        }}/>
        </Tab.Navigator>
        
        
        }
      </NavigationContainer>
      
    </>
  );
}
