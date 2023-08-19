import React from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
// import Loader from './Loader';
// import colors from '../styles/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import colors from '../constants/colors';
// import ToastMessage from './ToastMessage';
// import OnLocationOff from '../Screens/OnLocationOff/OnLocationOff';

const WrapperContainer = ({
  children,
  isLoading,
  statusBarColor = colors.transparent,
  bodyColor = colors?.transparent,
  barStyle = 'dark-content',
  removeTopInset = true,
  removeBottomInset = true,
  translucent= true,

}) => {
  const insets = useSafeAreaInsets();
  return (
   
    <View

      style={{
        flex: 1,
        backgroundColor: statusBarColor,
        paddingTop: removeTopInset ? 0 : insets.top,
        paddingBottom: removeBottomInset ? 0 : insets.bottom,
      }}>
    
      <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} translucent={translucent} />
      <View style={{backgroundColor: bodyColor, flex: 1,}}>{children}</View>
      {/* <Loader isLoading={isLoading} /> */}
      {/* <ToastMessage/> */}
      {/* <OnLocationOff/> */}
    </View>
  );
};

export default WrapperContainer;
