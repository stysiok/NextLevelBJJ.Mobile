import React from 'react';

import Welcome from './app/views/Welcome';
import CodeScanner from './app/views/CodeScanner';
import Main from './app/views/Main';
import ReadNews from './app/views/ReadNews';

import Carnet from './app/views/Carnet';
import Competitions from './app/views/Competitions';

import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

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

const NewsStack = createStackNavigator(
  {
    AllNews: {
      screen: Main
    },
    ReadNews: {
      screen: ReadNews
    }
  },
  {
    initalRouteName: 'AllNews',
    headerMode: 'none'
    // navigationOptions: {
    //   title: "Next Level BJJ",
    //   headerStyle: {
    //     backgroundColor: '#48BCEC'
    //   },
    //   headerTintColor: '#fff'
    // },
  }
);

const CarnetStack = createStackNavigator(
  {
    Carnet: {
      screen: Carnet
    },
  },
  {
    initalRouteName: 'Carnet',
    headerMode: 'none'
    // navigationOptions: {
    //   title: "Next Level BJJ",
    //   headerStyle: {
    //     backgroundColor: '#48BCEC'
    //   },
    //   headerTintColor: '#fff'
    // },
  }
);

const CompetitionsStack = createStackNavigator(
  {
    Competitions: {
      screen: Competitions
    }
  },
  {
    initalRouteName: 'Competitions',
    headerMode: 'none'
    
  }
);

const Drawer = createDrawerNavigator({
  News: {
    screen: NewsStack
  },
  Carnet: {
    screen: CarnetStack
  },
  Competitions: {
    screen: CompetitionsStack
  }
}, {
  initialRouteName: 'News',
  headerMode: 'none'
});

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
    Drawer: {
      screen: Drawer
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