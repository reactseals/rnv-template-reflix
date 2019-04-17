import React from 'react';
import { createNavigator, createNavigatorView, createApp } from './navigator/index.web';
import BrowseScreen from './screens/BrowseScreen';
import LibraryScreen from './screens/LibraryScreen';
import PlayerScreen from './screens/PlayerScreen/index.web';
import DetailsScreen from './screens/DetailsScreen';
import AuthScreen from './screens/AuthScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import SearchScreen from './screens/SearchScreen';
import Navbar from './components/Navbar';

const Navigator = createNavigator(
  {
    AuthLoading: { screen: AuthLoadingScreen, path: '/' },
    Home: {
      screen: AuthScreen,
      path: 'auth',
      navigationOptions: () => ({
        headerTitle: 'Reflix | Login',
      }),
    },
    App: {
      screen: BrowseScreen,
      path: 'browse',
      navigationOptions: () => ({
        headerTitle: 'Reflix | Browse for movies',
      }),
    },
    Search: { screen: SearchScreen, path: 'search' },
    Details: { screen: DetailsScreen, path: 'details/:movieId' },
    Library: {
      screen: LibraryScreen,
      path: 'library',
      navigationOptions: () => ({
        headerTitle: 'Reflix | Library',
      }),
    },
    Player: { screen: PlayerScreen, path: 'watch' },
  },
  Navbar,
);

class App extends React.Component {
  static router = {
    ...Navigator.router,
    getStateForAction: (action, lastState) => Navigator.router.getStateForAction(action, lastState),
  };

  render() {
    const { navigation } = this.props;
    return createNavigatorView(Navigator, navigation);
  }
}

export default createApp(App);
