import React from 'react';
import { Text, View } from 'react-native';
import { YouTubeStandaloneIOS } from 'react-native-youtube';

class PlayerScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('title', 'Details'),
  });

  render() {
    const { navigation } = this.props;
    const key = navigation.getParam('v', 'TcMBFSGVi1c');

    YouTubeStandaloneIOS.playVideo('KVZ-P-ZI6W4')
      .then(() => console.log('Standalone Player Exited'))
      .catch(errorMessage => console.error(errorMessage));

    return (
      <View>
        <Text>
hey!
        </Text>
      </View>
    );
  }
}

export default PlayerScreen;
