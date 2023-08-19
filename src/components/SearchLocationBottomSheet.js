import React, { useRef } from "react";
import { View, Button, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import RBSheet from "react-native-raw-bottom-sheet";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import imagePath from "../constants/imagePath";
import colors from "../constants/colors";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import navigationStrings from "../constants/navigationStrings";

export default function SearchLocationBottomSheet({ refRBSheet }) {
  const navigation = useNavigation()
  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={true}
      closeOnPressMask={false}
      customStyles={{
        wrapper: {
          backgroundColor: "transparent",
        },
        draggableIcon: {
          backgroundColor: "transparent",
        },
        container: {
          borderTopRightRadius: moderateScale(36),
          borderTopLeftRadius: moderateScale(36),
          padding: moderateScale(24),
          paddingVertical: moderateVerticalScale(0),
          backgroundColor: 'white'
        },
      }}
    >
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "500" }}>
            Search Location
          </Text>
          <TouchableOpacity onPress={()=> refRBSheet.current.close()}>
          <Image
            
            source={imagePath.cross}
            style={{
              height: moderateVerticalScale(20),
              width: moderateScale(20),
            }}
          /></TouchableOpacity>
        </View>
        <TouchableOpacity
        onPress={()=> {navigation.navigate(navigationStrings.SEARCHLOCATION)
          refRBSheet.current.close()
        } }
        activeOpacity={1}
          style={{
            height: moderateVerticalScale(50),
            backgroundColor: colors.lightGray,
            borderRadius: moderateScale(3),
            paddingHorizontal: moderateScale(12),
            alignContent: "center",
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: moderateVerticalScale(24)
          }}
        >
          <Feather
            name="search"
            size={moderateScale(30)}
            style={{ marginRight: 5, color: "#8888" }}
          />
          <Text style={{color : "grey", fontSize: 18, fontWeight: '600'}}>Search for area, street name</Text>
        </TouchableOpacity>
        <Image source={imagePath.noPlaces} style={{tintColor: colors.daruColor, height: '50%', width :'50%'}}/>
      </View>
    </RBSheet>
  );
}
