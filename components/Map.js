import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import Polyline from '@mapbox/polyline';
const locations = require('../assets/locations.json');

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      locations: locations,
    }
  }

  async componentDidMount() {
    const { status } = await Permissions.getAsync(Permissions.LOCATION)

    if (status !== 'granted') {
      const response = await Permissions.askAsync(Permissions.LOCATION)
      return response;
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude }}) => this.setState({ latitude, longitude }),
      (error) => console.log('Error:', error)
    )
  }

  render() {
    const { latitude, longitude, locations } = this.state;
    const favSpots = locations.map(coords => ({ coords }));
    if (latitude && longitude) {
      return (
        <MapView
          initialRegion={{
            // Charlotte coordinates
            latitude: 35.20278970223148,
            longitude: -80.86862901852897,
            // latitude,
            // longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation
          style={styles.mapView}
        >
          <MapView.Marker
            coordinate={{
              latitude: 35.193890,
              longitude: -80.879940,
            }}
            title={"STAX"}
          />
          <MapView.Marker
            coordinate={{
              latitude: 35.204830,
              longitude: -80.863610,
            }}
            title={"Spoons"}

          />
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