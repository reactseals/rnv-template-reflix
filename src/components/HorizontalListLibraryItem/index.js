import React from 'react';
import { Alert, Text, View, Image, TouchableOpacity } from 'react-native';
import { IS_TV as istv } from 'vanilla-helpers';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import Api from '../../api';
import stylesAll from './styles';
import stylesTV from './styles/index.tv';
import ButtonWithBackground from '../ButtonWithBackground';

export default class HorizontalListLibraryItem extends React.Component {
  // Works on both iOS and Android

  render() {
    const { handleRemoveFromLibrary, item, navigation, padded } = this.props;
    const IS_STV = Api.platform === 'tizen' || Api.platform === 'webos';
    const IS_TV = istv || IS_STV;
    const styles = IS_TV ? stylesTV : stylesAll;

    const showAlert = () => {
      Alert.alert(
        `${item.title || item.name}`,
        '',
        [
          {
            text: 'Watch',
            onPress: () => navigation.navigate('Player', {
              title: item.title || item.name,
            }),
          },
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Details',
            onPress: () => navigation.navigate('Details', {
              title: item.title || item.name,
              movieId: item.id,
              movieType: item.media_type,
            }),
          },
          {
            text: 'Remove from library',
            onPress: () => handleRemoveFromLibrary(item.id, item.media_type),
          },
        ],
        { cancelable: false },
      );
    };

    return (
      <TouchableOpacity
        className="focusable"
        style={[styles.focusable, padded && styles.padded]}
        ref={(node) => {
          this[item.id] = node;
        }}
        onFocus={() => {
          this[item.id].setNativeProps({ style: styles.focused });
        }}
        onBlur={() => {
          this[item.id].setNativeProps({
            style: { shadowOpacity: 0, transform: [{ scale: 1 }] },
          });
        }}
        onMouseEnter={() => {
          this[item.id].setNativeProps({
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
          this[item.id].setNativeProps({
            style: { shadowOpacity: 0, transform: [{ scale: 1 }] },
          });
        }}
        onPress={() => showAlert()}
      >
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path || item.still_path}`,
            }}
            resizeMode="cover"
          />
          {item.media_type === 'tv' && (
            <Text style={styles.tvLabel}>
TV
            </Text>
          )}
          <View style={styles.movieBottom}>
            <View style={styles.infoContainer}>
              <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
                {item.title || item.name}
              </Text>
              <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">
                {item.overview}
              </Text>
            </View>
            {!IS_TV && (
              <View style={{ flexDirection: 'row' }}>
                {item.videos && item.videos.results.length > 0 && (
                  <ButtonWithBackground
                    containerStyle={styles.btnLeft}
                    textStyle={styles.buttonText}
                    onPress={() => navigation.navigate('Player', {
                      title: item.title || item.name,
                      v: item.videos.results[0].key,
                    })
                    }
                    name="Play"
                  >
                    <Icon name="md-play" size={16} />
                  </ButtonWithBackground>
                )}
                <ButtonWithBackground
                  containerStyle={[styles.btnRight, item.videos && !(item.videos.results.length > 0) && styles.btnLong]}
                  textStyle={styles.buttonText}
                  onPress={() => handleRemoveFromLibrary(item.id, item.media_type)}
                  name="Remove"
                >
                  <Icon name="md-close" size={16} />
                </ButtonWithBackground>
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

HorizontalListLibraryItem.propTypes = {
  handleRemoveFromLibrary: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  padded: PropTypes.bool,
};

HorizontalListLibraryItem.defaultProps = {
  padded: false,
};
