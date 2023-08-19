import { View, Text, FlatList, Dimensions, ScrollView } from "react-native";
import React from "react";
import ProductView from "./ProductView";
import imagePath from "../constants/imagePath";

const TrendingDaru = () => {
  const data = [
    {   id :1,
      whiskeName: "Absolute",
      quantity: "750 ml Bottle",
      price: "$1000",
      icon: imagePath.desiIcon,
    },
    {id :2,
      whiskeName: "Absolute",
      quantity: "750 ml Bottle",
      price: "$1000",
      icon: imagePath.whiskeyIcon,
    },
    {id :3,
      whiskeName: "Absolute",
      quantity: "750 ml Bottle",
      price: "$1000",
      icon: imagePath.whiskeyIcon,
    },
    {id :4,
      whiskeName: "Absolute",
      quantity: "750 ml Bottle",
      price: "$1000",
      icon: imagePath.whiskeyIcon,
    },
    {id :5,
      whiskeName: "Absolute",
      quantity: "750 ml Bottle",
      price: "$1000",
      icon: imagePath.whiskeyIcon,
    },
    {id :6,
      whiskeName: "Absolute",
      quantity: "750 ml Bottle",
      price: "$1000",
      icon: imagePath.whiskeyIcon,
    },
  
  ];
  const renderItem = (item) =>{
    const viewWidth = Dimensions.get('window').width/3
    return (
    
        <ProductView
        // btnHide={false}
        liquourName={item.item.whiskeName}
        btnTitle={"Add to cart"}
        price={item.item.price}
        img={item.item.icon}
        quantity={item.item.quantity}
        viewStyle={{width : viewWidth}}
      />
    )
  }
  return (
    
      <FlatList

        data={data}
        renderItem={renderItem}
        horizontal
        scrollEnabled
        keyExtractor={(item, index) => item.id.toString()}
        nestedScrollEnabled = {true}
        showsHorizontalScrollIndicator = {false}  
      
      />
//  <>
//         {data.map((item)=>{
//     const viewWidth = Dimensions.get('window').width/2

//             return(
               
//         <ProductView
//         liquourName={item.whiskeName}
//         btnTitle={"Add to cart"}
//         price={item.price}
//         img={item.icon}
//         quantity={item.quantity}
//         viewStyle={{width : viewWidth}}
//       /> 
//             )
//         })}
// </>

  );
};

export default TrendingDaru;
