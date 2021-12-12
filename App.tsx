import React from 'react';
import { StyleSheet} from 'react-native';
import MainComponent from "./components/main";
import {landingTitle} from "./constants";

export default function App() {
  return (
      <MainComponent landingTitle={landingTitle} styles={styles} mainImage={{ uri: 'https://mcdn.wallpapersafari.com/medium/86/16/0waCsb.jpg' }} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
