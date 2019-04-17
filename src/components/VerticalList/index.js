import React from 'react';
import { FlatList, AsyncStorage, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
import VerticalListItem from '../VerticalListItem';

const keyExtractor = item => `${item.id}`;

export default class VerticalList extends React.Component {
  state = {
    refreshing: false,
  };

  onRefresh = async () => {
    this.setState({ refreshing: true });
    const userId = await AsyncStorage.getItem('userId');
    this.props.getBookmarkedMovies(userId);
    this.setState({ refreshing: false });
  };

  render() {
    const { movies, handleRemoveFromLibrary, navigation } = this.props;
    const { refreshing } = this.state;
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <VerticalListItem item={item} handleRemoveFromLibrary={handleRemoveFromLibrary} navigation={navigation} />
        )}
        keyExtractor={keyExtractor}
        data={movies}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this.onRefresh} />}
      />
    );
  }
}

VerticalList.propTypes = {
  handleRemoveFromLibrary: PropTypes.func.isRequired,
  getBookmarkedMovies: PropTypes.func.isRequired,
  movies: PropTypes.array,
};

VerticalList.defaultProps = {
  movies: [],
};
