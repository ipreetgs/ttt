import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import colors from "../constants/colors";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import imagePath from "../constants/imagePath";
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from "react-native-size-matters";
import SearchLocationBottomSheet from "./SearchLocationBottomSheet";

const Header = ({ title, backDeActive = true , search= false}) => {
  const refRBSheet = useRef();

  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={[colors.daruColor, "black"]}
      style={{
        height: "12%",
        backgroundColor: "transparent",
        shadowColor: "#000",
        alignContent: "center",
        justifyContent: "center",
        shadowOffset: {
          width: 0,
          height: 9,
        },
        shadowOpacity: 0.5,
        shadowRadius: 12.35,

        elevation: 19,
        paddingHorizontal: moderateScale(!backDeActive ? 12 : 24),
        paddingTop: moderateVerticalScale(24),
      }}
    >
      <View
 
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          {!backDeActive && (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              activeOpacity={1}
            >
              <Image
                source={imagePath.back}
                style={{
                  height: moderateVerticalScale(32),
                  width: moderateScale(32),
                  tintColor: "white",
                  marginRight: 12,
                }}
              />
            </TouchableOpacity>
          )}
          <Text
            style={{ fontSize: scale(22), fontWeight: "700", color: "white" }}
          >
            {title}
          </Text>
        </View>
        {search &&
        <TouchableOpacity style={{flexDirection: "row", alignItems: "center"}} activeOpacity={0.8} onPress={() => refRBSheet.current.open()}>
          <Image source={imagePath.location} style={{marginRight: moderateScale(8), height: moderateVerticalScale(15), width: moderateScale(15), tintColor: colors.daruColor, resizeMode: 'contain'}}/>
        <Text style={{color: 'white', fontSize: 15}}>Select Location</Text>
        
        <Image source={imagePath.down} style={{marginRight: moderateScale(8), height: moderateVerticalScale(15), width: moderateScale(13.5), tintColor: colors.daruColor, resizeMode: 'contain', alignSelf: "flex-end", marginLeft: moderateScale(10)}}/>
        
        </TouchableOpacity>}
        {/* <Image source={imagePath.ourLogo} style={{height: moderateVerticalScale(40), width: moderateScale(40), resizeMode: "cover"}}/> */}
      </View>
      <SearchLocationBottomSheet refRBSheet={refRBSheet}/>
    </LinearGradient>
  );
};

export default Header;
