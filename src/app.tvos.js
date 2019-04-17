import React from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { useScreens } from 'react-native-screens';
import PlayerScreen from './screens/PlayerScreen';
import DetailsScreen from './screens/DetailsScreen';
import TVStack from './screens/TVStack';
import AuthScreen from './screens/AuthScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';

useScreens();

const HomeStack = createStackNavigator({
  Auth: {
    screen: AuthScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
});

const AppStack = createStackNavigator({
  Browse: {
    screen: TVStack,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Player: {
    screen: PlayerScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
});

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Home: HomeStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);

const App = () => <AppContainer />;

export default App;
