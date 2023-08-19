import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import ProfileOptions from '../../components/ProfileOptions'
import imagePath from '../../constants/imagePath'
import colors from '../../constants/colors'
import navigationStrings from '../../constants/navigationStrings'
import Header from '../../components/Header'

const SharabiProfile = () => {
  return (
    <>
  <Header title={navigationStrings.SHARABIPROFILE}/>
    <ScrollView keyboardShouldPersistTaps= 'always' contentContainerStyle={{paddingVertical: 24}} style={{flex :1,}}>
    <View style={{alignContent: "center", alignItems: "center",}}>
      <Image source={imagePath.male} style={{height: 80, width : 80, marginBottom: 8, marginTop: 24}}></Image>
      <Text style={{fontSize: 16, fontWeight: '600'}}>{'Gurpreet Singh'}</Text>
      <Text style={{marginVertical : 2,}}>+91-88033309696</Text>
      <Text>ipreet@gmail.com</Text>
      
      <Text style={{fontSize: 16, fontWeight: '600', marginTop: 12}}>KYC Pending (Click Here)</Text>
      <Text style={{fontSize: 16, fontWeight: '600'}}>3 attemps remaining</Text>
</View>
    
      <ProfileOptions title={'My Orders'} description={'View your order history'}/>
      <ProfileOptions title={'Address Book'} description={'Manage your saved address'}/>
      <ProfileOptions title={'Refer your Friends'} description={'Refer a friend and get free delivery'}/>
      <ProfileOptions title={'Notifications'} description={'View your app notifications'}/>
      <ProfileOptions title={'Help & Support'} description={'FAQ & Links'}/>
      <ProfileOptions title={'Privacy Policy'} description={'View our Privacy Policy'}/>
      <View style={{height: 4, backgroundColor: colors.lightGray}}></View>

<View style={{flexDirection: "row", alignContent: "center", alignItems: "center", padding :12}}>
  <Image source={imagePath.rating} style={{height: 20, width: 20, tintColor : colors.daruColor, marginRight : 4}}/>
<Text style={{fontWeight: '700', fontSize: 20}}>Rate us on PLay Store</Text>
</View>
<View style={{height: 1, backgroundColor: colors.lightGray}}></View>
<View style={{flexDirection: "row", alignContent: "center", alignItems: "center",padding: 12}}>
  <Image source={imagePath.logout} style={{height: 20, width: 20, tintColor : colors.daruColor, marginRight : 4}}/>
<Text style={{fontWeight: '700', fontSize: 20}}>Logout</Text>
</View>
<View style={{height: 4, backgroundColor: colors.lightGray}}></View>
<View style={{flexDirection: "row", alignContent: "center", alignItems: "center",padding: 12}}>
<Image source={imagePath.bin} style={{height: 25, width: 28, tintColor : "gray", }}/>

<Text style={{color: 'gray', fontWeight: "800", margin : 8}}>Delete Account</Text></View>
    </ScrollView>
    </>
  )
}

export default SharabiProfile