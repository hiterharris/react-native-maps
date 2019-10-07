import React from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
// import * as Permissions from 'expo-permissions';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // latitude: null,
      // longitude: null,
      latitude: 35.22773070223148,
      longitude: -80.84246401852897,
    }
  }

  // async componentDidMount() {
  //   const { status } = await Permisions.getAsync(Permissions.LOCATION)


  //   if (status !== 'granted') {
  //     const response = await Permissions.askAsync(Permisions.LOCATION)
  //     return response;
  //   }
  // }

  render() {
    return (
      <MapView
        initialRegion={{
          latitude: this.state.latitude,
          longitude: this.state.longitude,
          // latitude,
          // longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.container}
      >
  
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });