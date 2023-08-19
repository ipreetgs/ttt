import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import WrapperContainer from '../../components/WrapperContainer'
import Header from '../../components/Header'
import navigationStrings from '../../constants/navigationStrings'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import imagePath from '../../constants/imagePath'
import { useNavigation } from '@react-navigation/native'

const SearchLocation = () => {
    const navigation = useNavigation()
  return (
    <WrapperContainer>
        {/* <Header title={navigationStrings.SEARCHLOCATION} backDeActive={false}/> */}
    <View style={{ paddingVertical: moderateVerticalScale(48), flexDirection: "row", alignItems: "center" }}>
      <TouchableOpacity onPress={()=> navigation.goBack()} activeOpacity={0.9}>
      <Image source={imagePath.back} style={{height: moderateVerticalScale(30), width: moderateScale(30), marginRight: moderateScale(12)}}/>
      </TouchableOpacity>
      <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        console.log(data, details, 'huuuuu');
      }}
      fetchDetails={true}
    //   enableHighAccuracyLocation={true}
      enablePoweredByContainer={true}
      query={{
        key: 'AIzaSyBlwAfBiJCzvgRMzGipDYl7Eti0dnk4xIs',
        language: 'en',
      }}
      
      
      >
        

      </GooglePlacesAutocomplete>
    </View>
    </WrapperContainer>
  )
}

export default SearchLocation