import { View, Text, Image } from 'react-native'
import React from 'react'
import navigationStrings from '../../constants/navigationStrings'
import Header from '../../components/Header'
import imagePath from '../../constants/imagePath'
import colors from '../../constants/colors'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'

const AddToCart = () => {
  
  return (
    <>
  <Header title={navigationStrings.ADDTOCART}/>
    <View style={{alignContent: "center", alignItems: 'center', justifyContent: 'center'}}>
     <Image source={imagePath.emptyCart} style={{tintColor: colors.daruColor, resizeMode : 'contain', height: '50%', width :'50%'}}/>
     <Text style={{fontSize :22, fontWeight :'700',margin : moderateVerticalScale(12)}}>Your cart is emply!</Text>
     <Text style={{fontSize :22,margin : moderateVerticalScale(0), textAlign: 'center', width  : '75%'}}>Add items, order and enjoy the fastest delivery!</Text>

    </View>
    </>
  )
}

export default AddToCart