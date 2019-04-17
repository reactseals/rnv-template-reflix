import React from 'react';
import { ActivityIndicator, AsyncStorage, View } from 'react-native';

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.bootstrapAsync();
  }

  bootstrapAsync = async () => {
    const { navigation } = this.props;
    const value = await AsyncStorage.getItem('isLoggedIn');
    const isLoggedIn = JSON.parse(value);

    navigation.navigate(isLoggedIn ? 'App' : 'Home');
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
}
