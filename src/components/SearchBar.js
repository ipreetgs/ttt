import React from 'react';
import { View, TextInput, StyleSheet, Text, Animated } from 'react-native';
import { Feather } from '@expo/vector-icons'; // You can use any icon library of your choice
import colors from '../constants/colors';

const SearchBar = ({ value, onChangeText, active = true }) => {
  return (
    <Animated.View style={styles.container}>
      <Feather name="search" size={20} style={styles.icon} />
      {active ?
      <TextInput
        style={styles.input}
        placeholder="Search any Daru..."
        value={value}
        onChangeText={onChangeText}
      /> : 
      <Text style={{color: "gray"}}>Search your favourite Daru...</Text>
      }
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    padding: 8,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.34,
shadowRadius: 6.27,

elevation: 10,
margin: "4%",
marginBottom : 0
,height: 50
  },
  icon: {
  marginRight: 5,
    color: '#888',
  },
  input: {
    flex: 1,
  },
});

export default SearchBar;