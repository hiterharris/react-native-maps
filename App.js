import React from 'react';
import { StyleSheet } from 'react-native';
import Map from './components/Map';

export default class App extends React.Component {
  render() {
    return (
      <Map style={styles.container} />
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
