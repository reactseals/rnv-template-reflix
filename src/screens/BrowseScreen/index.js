import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { IS_WEB, IS_TV } from 'vanilla-helpers';
import Api from '../../api';
import HorizontalList from '../../components/HorizontalList';
import colors from '../../res/colors';
import stylesAll from './styles';
import stylesTV from './styles/index.tv';
import * as omdbService from '../../api/tmdb';

const queries = ['iron', 'batman', 'game', 'james bond'];
const categories = ['Mystery', 'Fantasy', 'Action', 'Blockbusters'];

export default class BrowseScreen extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    queries.forEach(async (query) => {
      const movies = await omdbService.getMovies(query);
      this.setState(prevState => ({
        movies: [...prevState.movies, movies],
      }));
    });
  }

  render() {
    const { movies } = this.state;
    const { navigation } = this.props;

    const styles = IS_TV ? stylesTV : stylesAll;
    const IS_STV = Api.platform === 'tizen' || Api.platform === 'webos';

    const mobileContent = (
      <ScrollView contentContainerStyle={[{ flexGrow: 1 }]} style={styles.main} showsVerticalScrollIndicator={false}>
        <View>
          {movies.map((movie, i) => (
            <HorizontalList
              key={i}
              movies={movie}
              category={categories[i]}
              navigation={navigation}
            />
          ))}
        </View>
      </ScrollView>
    );

    const webContent = (
      <View style={[{ backgroundColor: colors.lightGrey, flex: 1 }, styles.container]}>
        {mobileContent}
      </View>
    );

    return (IS_STV && mobileContent) || (IS_WEB && webContent) || mobileContent;
  }
}
