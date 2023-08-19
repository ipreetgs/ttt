import { View, Text, FlatList } from "react-native";
import React from "react";
import imagePath from "../../constants/imagePath";
import ProductView from "../../components/ProductView";
import colors from "../../constants/colors";
import Header from "../../components/Header";
import navigationStrings from "../../constants/navigationStrings";
import WrapperContainer from "../../components/WrapperContainer";
import { moderateVerticalScale } from "react-native-size-matters";

const Whiskey = () => {
  const data = [
    {
      whiskeName: "Absolute",
      quantity: "750 ml Bottle",
      price: "$1000",
      icon: imagePath.desiIcon,
    },
    {
      whiskeName: "Absolute",
      quantity: "750 ml Bottle",
      price: "$1000",
      icon: imagePath.whiskeyIcon,
    },
    {
      whiskeName: "Absolute",
      quantity: "750 ml Bottle",
      price: "$1000",
      icon: imagePath.whiskeyIcon,
    },
    {
      whiskeName: "Absolute",
      quantity: "750 ml Bottle",
      price: "$1000",
      icon: imagePath.whiskeyIcon,
    },
    {
      whiskeName: "Absolute",
      quantity: "750 ml Bottle",
      price: "$1000",
      icon: imagePath.whiskeyIcon,
    },
    {
      whiskeName: "Absolute",
      quantity: "750 ml Bottle",
      price: "$1000",
      icon: imagePath.whiskeyIcon,
    },
  ];

  const renderItem = (item) => {
    const dataitem = item.item;
    return (
        
      <ProductView
        liquourName={dataitem.whiskeName}
        img={dataitem.icon}
        quantity={dataitem.quantity}
        price={dataitem.price}
        btnTitle={"Add to Cart"}
        viewStyle={{ width: '47.5%'}}
      />
 
    );
  };
  const separator = () => {
    return <View style={{ width: 5, backgroundColor : "transparent", height: 5}}></View>;
  };
  return (
<WrapperContainer>
    <Header title={navigationStrings.WHISKEY} backDeActive={false}/>
  <View style={{backgroundColor : colors.lightGray,  padding: 12,paddingTop: 24, paddingBottom: moderateVerticalScale(72) }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        // ItemSeparatorComponent={separator}
        numColumns={2}
        
        keyExtractor={(item) => item.id}
        // contentContainerStyle= {{
        //     flexWrap: 'wrap',
        //     // flexDirection: 'row',
        //     justifyContent: 'space-between',
        // }}
      ></FlatList>
   </View>
   </WrapperContainer>
  );
};

export default Whiskey;
