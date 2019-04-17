import React from 'react';
import { Text, View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import HorizontalListItem from '../HorizontalListItem';

const keyExtractor = item => `${item.id}`;

class HorizontalList extends React.PureComponent {
  render() {
    const { category, movies, navigation, episodes } = this.props;

    return (
      <View style={styles.listWrapper}>
        <Text style={[styles.category]}>
          {category}
        </Text>
        <FlatList
          style={{ paddingVertical: 20, overflowX: 'scroll' }}
          horizontal
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <HorizontalListItem item={item} navigation={navigation} episodes={episodes} />}
          keyExtractor={keyExtractor}
          data={movies}
        />
      </View>
    );
  }
}

export default HorizontalList;

HorizontalList.propTypes = {
  category: PropTypes.string,
  movies: PropTypes.array,
  episodes: PropTypes.bool,
};

HorizontalList.defaultProps = {
  category: 'Movies',
  movies: [],
  episodes: false,
};
