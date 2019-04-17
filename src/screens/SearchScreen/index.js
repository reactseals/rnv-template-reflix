import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { IS_ANDROID_TV, IS_WEB, IS_TV } from 'rnv-platform-info';
import stylesAll from './styles';
import stylesTV from './styles/index.tv';
import Api from '../../api';

import * as tmdbService from '../../api/tmdb';
import HorizontalListItem from '../../components/HorizontalListItem';

export default class SearchScreen extends Component {
  state = {
    searchQuery: '',
    foundMovies: [],
  };

  async componentDidMount() {
    const { navigation } = this.props;
    const query = navigation.getParam('q', '');
    this.handleSearchInput(query);
  }

  handleSearchInput(searchQuery) {
    this.setState({ searchQuery });
    const { navigation } = this.props;
    navigation.setParams({ q: searchQuery });
    setTimeout(async () => {
      const foundMovies = await tmdbService.getMovies(searchQuery);
      this.setState({ foundMovies: foundMovies || [] });
    }, 500);
  }

  render() {
    const { navigation } = this.props;
    const { searchQuery, foundMovies } = this.state;

    const IS_STV = Api.platform === 'tizen' || Api.platform === 'webos';
    const styles = IS_TV || IS_STV ? stylesTV : stylesAll;

    const input = (
      <TextInput
        className="focusable"
        ref={(node) => {
          this.input = node;
        }}
        style={styles.input}
        onChangeText={query => this.handleSearchInput(query)}
        value={searchQuery}
      />
    );

    const results = (
      <View style={styles.movieGrid}>
        {foundMovies.map(movie => (
          <HorizontalListItem padded item={movie} navigation={navigation} />
        ))}
      </View>
    );

    const androidTVContent = (
      <ScrollView
        contentContainerStyle={[{ flexGrow: 1 }, IS_TV && foundMovies.length < 1 && { justifyContent: 'center' }]}
        style={styles.scroller}
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity onPress={() => this.input.focus()}>
          {input}
        </TouchableOpacity>
        {results}
      </ScrollView>
    );

    const mobileContent = (
      <ScrollView
        contentContainerStyle={[
          { flexGrow: 1 },
          (IS_TV || IS_STV) && foundMovies.length < 1 && { justifyContent: 'center' },
        ]}
        style={styles.scroller}
        showsHorizontalScrollIndicator={false}
      >
        {input}
        {results}
      </ScrollView>
    );

    const webContent = (
      <View style={styles.webContainer}>
        {mobileContent}
      </View>
    );

    return (IS_STV && mobileContent) || (IS_WEB && webContent) || (IS_ANDROID_TV && androidTVContent) || mobileContent;
  }
}
