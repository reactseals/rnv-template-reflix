import React from 'react';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import * as firebaseService from '../../api/firebase';

export default class Navbar extends React.Component {
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
      navigation.navigate('Home');
    }
  };

  render() {
    const { active, navigation } = this.props;
    const { isLoggedIn } = this.state;

    return (
      <View style={styles.navWrap}>
        <View style={styles.navLeft}>
          <TouchableOpacity onPress={() => navigation.navigate('App')} style={styles.linkWrap}>
            <Text style={styles.logo}>
              <Text style={{ color: '#4a4a4a' }}>
Re
              </Text>
              FLIX
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('App')} style={styles.linkWrap}>
            <Text style={active === 'Browse' ? [styles.link, styles.linkActive] : styles.link}>
Browse
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Library')} style={styles.linkWrap}>
            <Text style={active === 'Library' ? [styles.link, styles.linkActive] : styles.link}>
Library
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Search')} style={styles.linkWrap}>
            <Text style={active === 'Search' ? [styles.link, styles.linkActive] : styles.link}>
Search
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={this.handleAuth} style={styles.linkWrap}>
          <Text style={styles.link}>
            {isLoggedIn ? 'Logout' : 'Login'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Navbar.propTypes = {
  active: PropTypes.bool,
};

Navbar.defaultProps = {
  active: false,
};
