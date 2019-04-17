import React from 'react';
import { createSwitchNavigator } from '@react-navigation/core';
import { createBrowserApp } from '@react-navigation/web';
import PlayerScreen from './screens/PlayerScreen/index.web';
import DetailsScreen from './screens/DetailsScreen';
import AuthScreen from './screens/AuthScreen';
import TVStack from './screens/TVStack';

const switchNavigator = createSwitchNavigator(
  {
    Auth: {
      screen: AuthScreen,
      path: '/',
      navigationOptions: () => ({
        headerTitle: 'Reflix | Login',
      }),
    },
    App: {
      screen: TVStack,
      path: 'browse',
      navigationOptions: () => ({
        headerTitle: 'Reflix | Browse for movies',
      }),
    },
    Details: { screen: DetailsScreen, path: 'details/:movieId' },
    Player: { screen: PlayerScreen, path: 'watch' },
  },
  {
    initialRouteName: 'Auth',
  },
);
const AppContainer = createBrowserApp(switchNavigator);

const App = () => <AppContainer />;

export default App;
