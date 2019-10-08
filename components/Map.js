import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import * as Permissions from 'expo-permissions';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
    }
  }

  async componentDidMount() {
    const { status } = await Permissions.getAsync(Permissions.LOCATION)

    if (status !== 'granted') {
      const response = await Permissions.askAsync(Permissions.LOCATION)
      return response;
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude }}) => this.setState({ latitude, longitude }, () => console.log('State:', this.state)),
      (error) => console.log('Error:', error)
    )

  }

  render() {
    const { latitude, longitude } = this.state;
    if (latitude) {
      return (
        <MapView
          initialRegion={{
            // Charlotte coordinates
            // latitude: 35.22773070223148,
            // longitude: -80.84246401852897,
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.mapView}
        >
    
        </MapView>
      );
    }
    return (
      <View style={styles.container}></View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    mapView: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });