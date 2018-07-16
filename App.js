import React from 'react';
import * as Expo from "expo";
import Welcome from './app/views/Welcome';
import CodeScanner from './app/views/CodeScanner';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  
  render() {
    return <RootStack />;
  }
}


const RootStack = createStackNavigator(
  {
    Home: {
      screen: Welcome,
      navigationOptions: {
        header: null
      }
    },
    Scanner: {
      screen: CodeScanner
    }
  },
  {
    initalRouteName: 'Home'
  }
);