import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Pressable,
  Button,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import navigationStrings from "../../constants/navigationStrings";
import imagePath from "../../constants/imagePath";
import SearchBar from "../../components/SearchBar";
import TrendingDaru from "../../components/TrendingDaru";
import colors from "../../constants/colors";
import Header from "../../components/Header";
import WrapperContainer from "../../components/WrapperContainer";

const Bar = () => {
  const DATA = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    // ... Add more data ...
  ];
  const data = [
    { id: 1,title: "Whiskey", icon: imagePath.whiskeyIcon },
    { id: 2,title: "Beer", icon: imagePath.beerCanIcon },
    { id: 3,title: "Vodka", icon: imagePath.vodkaIcon },
    { id: 4,title: "Rum", icon: imagePath.rumIcon },
    { id: 5,title: "Gin", icon: imagePath.ginIcon },
    { id: 6,title: "Tequila", icon: imagePath.tequilaIcon },
    { id: 7, title: "Desi", icon: imagePath.desiIcon },
    { id: 8,title: "Wine", icon: imagePath.wineIcon },
  ];
  const [searchText, setSearchText] = useState('');
  const filteredData = DATA.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );
  const onPress = () => {
    navigation.navigate(navigationStrings.WHISKEY);
  };
  const navigation = useNavigation();
  const Category = (item) => {
    const itemm = item.item
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={{
          margin : 5,
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          backgroundColor: "#FFFF",
          padding: 8,
          marginTop: 8,
          width : '22.1%'
        }}
      >
        <Image source={itemm?.icon} style={{ height: 40, width: 40 }}></Image>
        {/* <text>{item.title}</text> */}
        <Text style={{ marginTop: 10 }}>{itemm?.title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    
    <WrapperContainer>
    <Header title={navigationStrings.BAR} search={true}/>
   <View style={{backgroundColor : colors.lightGray, flex: 1}}>
    <Pressable onPress={()=> navigation.navigate(navigationStrings.ALLDARU)} style={{backgroundColor: colors.lightGray}}>
    <SearchBar value={searchText} onChangeText={setSearchText} active={false}/>
    </Pressable>
    <ScrollView  keyboardShouldPersistTaps= 'always' contentContainerStyle={{paddingBottom: 24, }}>
   
    <View style= {{flexDirection : "row", alignItems: "center",paddingHorizontal: 24, paddingTop: 24,   }}>
      
      <Image source={imagePath.category} style={{height: 27, width: 25, tintColor: '#0009',}}/>
    <Text style={{fontSize: 18, marginLeft : 8}}>Categories</Text>
    </View>
    
    <View style={{justifyContent: "center", alignItems : "center", padding :16,}}>

      <FlatList
        data={data}
      
        renderItem={Category}
      // horizontal
    numColumns={4}

      keyExtractor={(item) => item.id.toString()}
      />
      {/* <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {data.map((item) => {
          return <Category {...item} />;
        })}
      </View> */}
    </View>
    <View style= {{flexDirection : "row", alignItems: "center", justifyContent: "space-between",padding: 24, paddingVertical: 8  }}>
      <View style={{flexDirection: "row"}}>
      <Image source={imagePath.popular} style={{height: 27, width: 25, tintColor: '#0009',}}/>
    <Text style={{fontSize: 18, marginLeft : 8}}>What's popular</Text></View>
    <TouchableOpacity activeOpacity={0.5} onPress={()=> navigation.navigate(navigationStrings.WHATSPOPULARDARU)}><Text style={{color: colors.daruColor, fontWeight: "500"}}>{"SEE ALL >"}</Text></TouchableOpacity>
    </View>

    <View style={{padding: 12, paddingBottom :0}}> 
    <TrendingDaru/>
</View>


    </ScrollView>
</View>
</WrapperContainer>
  );
};

export default Bar;
