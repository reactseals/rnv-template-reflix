import React from 'react';
import { View } from 'react-native';

class PlayerScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('title', 'Details'),
  });

  render() {
    const { navigation } = this.props;
    const key = navigation.getParam('v', 'TcMBFSGVi1c');
    return (
      <View style={{ flex: 1, marginTop: 50 }}>
        <iframe
          title="ytplayer"
          id="ytplayer"
          type="text/html"
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${key}?autoplay=1`}
          frameBorder="0"
        />
      </View>
    );
  }
}

export default PlayerScreen;
