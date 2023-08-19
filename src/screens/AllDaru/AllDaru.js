import { View, Text, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import SearchBar from '../../components/SearchBar'
import Header from '../../components/Header'
import navigationStrings from '../../constants/navigationStrings'
import WrapperContainer from '../../components/WrapperContainer'

const AllDaru = () => {
    
  return (
    <WrapperContainer>
      <Header title={'Search'} backDeActive={false}/>
    <View >
      <SearchBar/>
    </View></WrapperContainer>
  )
}

export default AllDaru