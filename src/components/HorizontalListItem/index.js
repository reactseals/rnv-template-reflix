import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { IS_TV } from 'rnv-platform-info';
import PropTypes from 'prop-types';
import stylesAll from './styles';
import stylesTV from './styles/index.tv';
import Api from '../../api';

export default class HorizontalListItem extends React.Component {
  render() {
    const { item, navigation, padded, episodes } = this.props;

    const IS_STV = Api.platform === 'tizen' || Api.platform === 'webos';
    const styles = IS_TV || IS_STV ? stylesTV : stylesAll;

    return (
      <TouchableOpacity
        className="focusable"
        style={[styles.focusable, padded && styles.padded]}
        ref={(node) => {
          this[item.id] = node;
        }}
        onFocus={() => {
          this[item.id].setNativeProps({
            style: {
              elevation: 24,
              shadowColor: 'palevioletred',
              shadowOpacity: 0.7,
              shadowRadius: 15,
              transform: [{ scale: 1.025 }],
            },
          });
        }}
        onBlur={() => {
          this[item.id].setNativeProps({
            style: { shadowOpacity: 0, transform: [{ scale: 1 }] },
          });
        }}
        onMouseEnter={() => {
          this[item.title].setNativeProps({
            style: {
              borderRadius: 8,
              shadowColor: 'palevioletred',
              shadowOpacity: 0.7,
              shadowRadius: 15,
              transform: [{ scale: 1.01 }],
            },
          });
        }}
        onMouseLeave={() => {
          this[item.title].setNativeProps({
            style: { shadowOpacity: 0, transform: [{ scale: 1 }] },
          });
        }}
        onPress={() => (episodes
          ? () => {}
          : navigation.navigate('Details', {
            title: item.title || item.name,
            movieId: item.id,
            movieType: item.media_type,
          }))
        }
      >
        <View style={styles.imageContainer}>
          <Image
            ref={(node) => {
              this[item.title] = node;
            }}
            style={styles.image}
            source={{
              uri: `https://image.tmdb.org/t/p/w500${item.poster_path || item.still_path}`,
            }}
            resizeMode="cover"
          />
          {item.media_type === 'tv' && (
            <Text style={styles.tvLabel}>
TV
            </Text>
          )}
          <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
            {item.title || item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

HorizontalListItem.propTypes = {
  item: PropTypes.object.isRequired,
  padded: PropTypes.bool,
  episodes: PropTypes.bool,
};

HorizontalListItem.defaultProps = {
  padded: false,
};
