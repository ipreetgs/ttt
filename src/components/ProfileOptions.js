import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import colors from '../constants/colors'

const ProfileOptions = ({title,description}) => {
  return (
    <>
    <Pressable style={{flexDirection: "row", alignContent: "center", alignItems: "center", justifyContent: 'space-between', padding: 24, paddingVertical: 12}}>
    <View>
      <Text style={{fontWeight: '700', fontSize: 20}}>{title}</Text>
      <Text style={{color: "gray", marginTop: 4}}>{description}</Text>
    </View>
    <Text style={{color: 'gray', fontWeight: "800"}}>{">"}</Text>
    </Pressable>
    <View style={{height: 2, backgroundColor : colors.lightGray,}}></View>
    </>
  )
}

export default ProfileOptions