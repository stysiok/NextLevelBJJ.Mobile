import React from 'react';

import Welcome from './app/views/Welcome';
import CodeScanner from './app/views/CodeScanner';
import Main from './app/views/Main';
import ReadNews from './app/views/ReadNews';
import { createStackNavigator } from 'react-navigation';

export default class App extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <RootStack />
    );
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
    },
    MainScreen: {
      screen: Main
    },
    ReadNews: {
      screen: ReadNews
    }
  },
  {
    initalRouteName: 'Home',
    navigationOptions: {
      title: "Next Level BJJ",
      headerStyle: {
        backgroundColor: '#48BCEC'
      },
      headerTintColor: '#fff'
    },
  }
);