import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
    placeholder='Search'
    onPress={(data, details = null) => {
      // 'details' is provided when fetchDetails = true
      console.log(data, details);
    }}
    fetchDetails={true}
    enableHighAccuracyLocation={true}
    enablePoweredByContainer={true}
    query={{
      key: 'AIzaSyBlwAfBiJCzvgRMzGipDYl7Eti0dnk4xIs',
      language: 'en',
    }}
    />
  );
};

export default GooglePlacesInput;