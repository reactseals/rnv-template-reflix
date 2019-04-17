/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import Swipeout from 'react-native-swipeout';
import PropTypes from 'prop-types';
import Api from '../../api';
import styles from './styles';

export default class VerticalListItem extends React.Component {
  render() {
    const { item, navigation, handleRemoveFromLibrary } = this.props;
    const listItem = (
      <View style={[styles.rowContainer, { justifyContent: 'center', alignItems: 'center' }]}>
        <TouchableOpacity
          style={{
            flex: 1,
            height: 220,
          }}
          onPress={() => navigation.navigate('Details', {
            title: item.title || item.name,
            movieId: item.id,
            movieType: item.media_type,
          })
          }
        >
          <ImageBackground
            style={{ width: '100%', flex: 1, justifyContent: 'center' }}
            source={{ uri: `https://image.tmdb.org/t/p/original${item.backdrop_path}` }}
          >
            <View style={{ flex: 1, width: '100%', backgroundColor: '#000', opacity: 0.5 }} />
            <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
              {item.title || item.name}
            </Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
    return Api.formFactor === 'mobile' ? (
      <Swipeout
        backgroundColor="transparent"
        autoClose
        right={[
          {
            onPress: () => {
              handleRemoveFromLibrary(item.id, item.media_type);
            },
            text: 'Delete',
            type: 'delete',
          },
        ]}
      >
        {listItem}
      </Swipeout>
    ) : (
      listItem
    );
  }
}

VerticalListItem.propTypes = {
  handleRemoveFromLibrary: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};
