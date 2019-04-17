import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import Sidebar from '../../components/Sidebar';
import Browse from '../BrowseScreen';
import Library from '../LibraryScreen';
import Search from '../SearchScreen';

export default class TVStack extends Component {
  state = {
    active: 'Browse',
  }

  handleChangeScreen = (screen) => {
    this.setState({ active: screen });
  }

  render() {
    const { active } = this.state;
    const { navigation } = this.props;

    return (
      <View style={{
        flexDirection: 'row',
        flex: 1,
        ...Platform.select({ web: { width: '100vw', height: '100vh' } }),

      }}
      >
        <Sidebar
          active={active}
          navigation={navigation}
          handleChangeScreen={this.handleChangeScreen}
        />
        {active === 'Browse' && <Browse navigation={navigation} />}
        {active === 'Search' && <Search navigation={navigation} />}
        {active === 'Library' && <Library navigation={navigation} />}
      </View>
    );
  }
}
