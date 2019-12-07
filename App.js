import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './components/HomeScreen'
import ListScreen from './components/ListScreen'
import PictureScreen from './components/PictureScreen'


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
    Picture:PictureScreen
  },
  {
    initialRouteName: 'Home',
  }
);


const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
