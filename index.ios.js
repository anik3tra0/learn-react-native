// Index.ios.js

// Import a library to help create a Component

import React from 'react';
import { Text, AppRegistry } from 'react-native';

// create a Component
const App = () => (
  <Text>Some Text</Text>
);

// Render it to your device
AppRegistry.registerComponent('albums', () => App);
