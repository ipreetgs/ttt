import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../constants/colors";

const ProductView = ({
  img,
  liquourName,
  quantity,
  price,
  btnTitle,
  viewStyle,
  btnHide = true
}) => {
  return (
    <TouchableOpacity
    activeOpacity={0.9}
      style={{
        ...viewStyle,
        backgroundColor: "#ffffff",
        padding: 18,
        alignItems: "center",
        margin: 5,
        borderRadius: 20,
      }}
    >
      <Image
        source={img}
        style={{ height: 70, width: 60, marginBottom: 12 }}
      ></Image>
      <Text style={{ fontSize: 20, marginBottom: 8 }}>{liquourName}</Text>
      <Text style={{ color: "purple", fontSize: 11, marginBottom: 8 }}>
        {quantity}
      </Text>
      <Text style={{ fontSize: 20 }}>{price}</Text>
      {btnHide && 
      <TouchableOpacity
          activeOpacity={0.97}
          style={{
          backgroundColor: colors.daruColor,
          borderRadius: 2,
          padding: 8,
          width: "100%",
          alignItems: "center",
          marginTop: 8,
          shadowColor: colors.daruColor,
shadowOffset: {
	width: 2,
	height: 10,
},
shadowOpacity: 0.37,
shadowRadius: 5,

elevation: 8,
        }}
      >
        <Text style={{ color: "white", fontWeight: "500" }}>{btnTitle}</Text>
      </TouchableOpacity>}
    </TouchableOpacity>
  );
};

export default ProductView;
