import React from 'react';
import { Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import * as firebaseService from '../../api/firebase';
import colors from '../../res/colors';
import styles from './styles';

export default class Sidebar extends React.Component {
  state = {
    isLoggedIn: false,
  };

  async componentDidMount() {
    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
    this.setState({
      isLoggedIn,
    });
  }

  handleAuth = async () => {
    const { navigation } = this.props;
    const { isLoggedIn } = this.state;

    if (isLoggedIn) {
      await firebaseService.signOut();
      this.setState({
        isLoggedIn: false,
      });
      navigation.navigate('App');
    } else {
      navigation.navigate('Auth');
    }
  };

  render() {
    const { active, handleChangeScreen } = this.props;
    return (
      <View
        style={styles.root}
        ref={(node) => {
          this.sidebar = node;
        }}
      >
        <View>
          <TouchableOpacity
            ref={(node) => {
              this.browseBtn = node;
            }}
            hasTVPreferredFocus
            className="focusable"
            onPress={() => {
              handleChangeScreen('Browse');
            }}
            onFocus={() => {
              this.browseBtn.setNativeProps({ style: { backgroundColor: colors.accentRed } });
            }}
            onBlur={() => {
              this.browseBtn.setNativeProps({ style: { backgroundColor: 'transparent' } });
            }}
          >
            <Text style={[styles.text, active === 'Browse' && { color: '#fff' }]}>
              <Icon name="md-home" size={36} />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            ref={(node) => {
              this.searchBtn = node;
            }}
            className="focusable"
            onFocus={() => {
              this.searchBtn.setNativeProps({ style: { backgroundColor: colors.accentRed } });
            }}
            onBlur={() => {
              this.searchBtn.setNativeProps({ style: { backgroundColor: 'transparent' } });
            }}
            onPress={() => {
              handleChangeScreen('Search');
            }}
          >
            <Text style={[styles.text, active === 'Search' && { color: '#fff' }]}>
              <Icon name="md-search" size={36} />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            ref={(node) => {
              this.libraryBtn = node;
            }}
            className="focusable"
            onFocus={() => {
              this.libraryBtn.setNativeProps({ style: { backgroundColor: colors.accentRed } });
            }}
            onBlur={() => {
              this.libraryBtn.setNativeProps({ style: { backgroundColor: 'transparent' } });
            }}
            onPress={() => {
              handleChangeScreen('Library');
            }}
          >
            <Text style={[styles.text, active === 'Library' && { color: '#fff' }]}>
              <Icon name="md-heart" size={36} />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="focusable"
            ref={(node) => {
              this.logoutBtn = node;
            }}
            onFocus={() => {
              this.logoutBtn.setNativeProps({ style: { backgroundColor: colors.accentRed } });
            }}
            onBlur={() => {
              this.logoutBtn.setNativeProps({ style: { backgroundColor: 'transparent' } });
            }}
            onPress={this.handleAuth}
          >
            <Text style={styles.text}>
              <Icon name="md-log-out" size={36} />
            </Text>
          </TouchableOpacity>
        </View>
        <View />
      </View>
    );
  }
}
Sidebar.propTypes = {
  handleChangeScreen: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

Sidebar.defaultProps = {
  active: false,
};
