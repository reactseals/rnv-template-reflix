import React from 'react';
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
} from 'react-navigation';
import { Platform, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BrowseScreen from './screens/BrowseScreen';
import LibraryScreen from './screens/LibraryScreen';
import PlayerScreen from './screens/PlayerScreen';
import DetailsScreen from './screens/DetailsScreen';
import SearchScreen from './screens/SearchScreen';
import AuthScreen from './screens/AuthScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import colors from './res/colors';

const defaultStackHeaderOptions = {
  headerStyle: {
    backgroundColor: colors.darkGrey,
    borderBottomWidth: 0,
  },
  headerTintColor: colors.accentRed,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const HomeStack = createStackNavigator({
  Auth: {
    screen: AuthScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
});

const AppDrawer = createDrawerNavigator(
  {
    Browse: {
      screen: BrowseScreen,
    },
    Library: {
      screen: LibraryScreen,
    },
  },
  {
    contentOptions: {
      activeTintColor: colors.accentRed,
      activeBackgroundColor: colors.lightGrey,
      inactiveTintColor: colors.text,
    },
    drawerBackgroundColor: colors.darkGrey,
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: colors.darkGrey },
      headerLeft: (
        <Icon
          name={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          color="#fff"
          size={24}
          style={{ marginLeft: 20 }}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
      headerTitle: (
        <Text
          style={{
            color: colors.accentRed,
            fontWeight: '800',
            fontSize: 18,
            textTransform: 'capitalize',
            alignSelf: 'center',
          }}
        >
          <Text style={{ color: '#4a4a4a' }}>
Re
          </Text>
          FLIX
        </Text>
      ),
      headerRight: (
        <Icon
          name={Platform.OS === 'android' ? 'md-search' : 'ios-search'}
          color="#fff"
          size={24}
          style={{ marginRight: 20 }}
          onPress={() => navigation.navigate('Search')}
        />
      ),
    }),
  },
);

const AppStack = createStackNavigator({
  Tabs: AppDrawer,
  Details: {
    screen: DetailsScreen,
    navigationOptions: () => ({
      ...defaultStackHeaderOptions,
    }),
  },
  Player: {
    screen: PlayerScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: () => ({
      ...defaultStackHeaderOptions,
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
