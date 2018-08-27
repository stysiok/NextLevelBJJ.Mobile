import React from 'react';

import Welcome from './app/views/Welcome';
import CodeScanner from './app/views/CodeScanner';
import Main from './app/views/Main';
import Carnet from './app/views/Carnet';
import Competitions from './app/views/Competitions';
import MyHistory from './app/views/History';
import Schedule from './app/views/Schedule';
import PriceList from './app/views/PriceList';


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
    Main: {
      screen: Main
    },
    Carnet: {
      screen: Carnet
    },
    Schedule: {
      screen: Schedule
    },
    History: {
      screen: MyHistory
    },
    Competitions: {
      screen: Competitions
    },
    PriceList:{
      screen: PriceList
    }
  },
  {
    initalRouteName: 'Home'
  }
);