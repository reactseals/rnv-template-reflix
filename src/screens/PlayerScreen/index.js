import React from 'react';
import YouTube from 'react-native-youtube';

class PlayerScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('title', 'Details'),
  });

  render() {
    const { navigation } = this.props;
    const key = navigation.getParam('v', 'TcMBFSGVi1c');

    return (
      <YouTube
        apiKey="AIzaSyCZs5LGQYP8EL8uQvvpO6SA-cFZs8kHw30"
        videoId={key} // The YouTube video ID
        play // control playback of video with true/false
        fullscreen // control whether the video should play in fullscreen or inline
        loop // control whether the video should loop when ended
        onReady={e => this.setState({ isReady: true })}
        onChangeState={e => this.setState({ status: e.state })}
        onChangeQuality={e => this.setState({ quality: e.quality })}
        onError={e => this.setState({ error: e.error })}
        style={{ alignSelf: 'stretch', height: '100%' }}
      />
    );
  }
}

export default PlayerScreen;
