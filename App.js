import React from 'react';
import { WebView } from 'react-native';

export default function App() {
  return (
      <WebView
        source={{uri: 'https://www.google.com/maps'}}
        style={{marginTop: 20}}
      />
  );
}

