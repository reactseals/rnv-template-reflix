/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import { Dimensions, Text, View, Platform, AsyncStorage, ImageBackground, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-root-toast';
import { IS_TV, IS_WEB, IS_MOBILE, IS_TIZEN } from 'rnv-platform-info';
import PickerAll from '../../components/Picker';
import PickerTV from '../../components/Picker/index.tv';
import ButtonWithBackground from '../../components/ButtonWithBackground';
import * as firebaseService from '../../api/firebase';
import * as tmdbService from '../../api/tmdb';
import HorizontalList from '../../components/HorizontalList';
import colors from '../../res/colors';
import stylesAll from './styles';
import stylesTV from './styles/index.tv';
import stylesSTV from './styles/index.stv';
import Api from '../../api';
import ScrollableContent from '../../components/ScrollableContent';

let movieId;
let userId;
let isLoggedIn;
let movieType;

export default class DetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    if (navigation.state.params) {
      return {
        headerTitle: !IS_MOBILE && navigation.getParam('title', 'Details'),
        headerBackImage: (
          <Icon
            name={Platform.select({
              ios: 'ios-arrow-back',
              android: 'md-arrow-back',
            })}
            size={30}
            color={colors.accentRed}
          />
        ),
        headerRight: (
          <Icon
            name={
              navigation.state.params.isButtonDisabled
                ? Platform.select({ ios: 'ios-star', android: 'md-star' })
                : Platform.select({
                  ios: 'ios-star-outline',
                  android: 'md-star-outline',
                })
            }
            onPress={
              navigation.state.params.isButtonDisabled
                ? navigation.getParam('removeFromLibrary')
                : navigation.getParam('addToLibrary')
            }
            color={colors.accentRed}
            size={30}
            style={{ padding: 5, marginRight: 15 }}
          />
        ),
      };
    }
  };

  state = {
    movie: {},
    movieId: null,
    recommendedMovies: [],
    isButtonDisabled: false,
    selectedSeason: null,
    episodes: [],
  };

  async componentDidMount() {
    const { navigation } = this.props;

    if (IS_TIZEN) {
      alert('This is tizen!!!');
    }

    !IS_WEB
      && navigation.setParams({
        addToLibrary: this.handleAddToLibrary,
        removeFromLibrary: this.handleRemoveFromLibrary,
      });

    movieId = navigation.getParam('movieId', null);
    movieType = navigation.getParam('movieType', 'movie');
    userId = await AsyncStorage.getItem('userId');
    isLoggedIn = await AsyncStorage.getItem('userId');
    await this.handleAddedToLibrary(movieId, userId, movieType, navigation);
    await this.handleGetDetails(movieId);
    await this.handleSeasonChange(this.state.selectedSeason);
    if (this.mainbtn) this.mainbtn.focus();
  }

  async componentDidUpdate(prevProps, prevState) {
    const { navigation } = this.props;
    movieId = navigation.getParam('movieId', null);
    movieType = navigation.getParam('movieType', 'movie');

    if (prevState.movieId !== movieId) {
      await this.handleGetDetails(movieId);
      await this.handleAddedToLibrary(movieId, userId, movieType, navigation);
      await this.handleSeasonChange(null);
    }
  }

  showToast = text => Toast.show(text, {
    duration: Toast.durations.LONG,
    position: 70,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
  });

  handleGetDetails = async (id) => {
    const movie = await tmdbService.getMovie(id, movieType);
    const recommendedMovies = await tmdbService.getSimilarMovies(movieId, movieType);

    const moviesWithTypes = recommendedMovies.map(recommendedMovie => ({
      ...recommendedMovie,
      media_type: movieType,
    }));

    this.setState({
      movie,
      recommendedMovies: moviesWithTypes,
      movieId: id,
    });
  };

  handleAddedToLibrary = async (id, userid, type, navigation) => {
    const res = await firebaseService.isMovieAddedToLibrary(id, userid, type);
    this.setState({ isButtonDisabled: res });
    if (!IS_WEB) navigation.setParams({ isButtonDisabled: res });
  };

  handleAddToLibrary = async () => {
    const { navigation } = this.props;
    if (isLoggedIn) {
      await firebaseService.addToLibrary(movieId, userId, movieType);
      !IS_WEB && navigation.setParams({ isButtonDisabled: true });
      this.setState({ isButtonDisabled: true });
      this.showToast('Added to library');
    } else {
      this.showToast('You need to be logged in to do that');
    }
  };

  handleRemoveFromLibrary = async () => {
    const { navigation } = this.props;
    if (isLoggedIn) {
      await firebaseService.removeFromLibrary(movieId, userId, movieType);
      !IS_WEB && navigation.setParams({ isButtonDisabled: false });
      this.setState({ isButtonDisabled: false });
      this.showToast('Removed from library');
    }
  };

  handleSeasonChange = async (selectedSeason) => {
    if (selectedSeason === null) {
      this.setState({ selectedSeason, episodes: [] });
      return;
    }
    const seasonData = await tmdbService.getSeason(movieId, selectedSeason);
    this.setState({ selectedSeason, episodes: seasonData.episodes });
  };

  handleKeyPress = (event) => {
    const { navigation } = this.props;
    if (event.key === 'XF86Back') {
      navigation.navigate('App');
    }
  };

  render() {
    const { navigation } = this.props;
    const { movie, recommendedMovies, isButtonDisabled, selectedSeason, episodes } = this.state;
    const gradientHeight = Dimensions.get('window').height / 1.5;
    const isMovie = movieType === 'movie';

    const IS_STV = Api.platform === 'tizen' || Api.platform === 'webos';
    const styles = (IS_STV && stylesSTV) || (IS_TV && stylesTV) || stylesAll;
    const Picker = IS_TV || IS_STV ? PickerTV : PickerAll;

    const content = (
      <View style={!isMovie && styles.leftGradient}>
        <View style={styles.gradientContainer}>
          <View style={[styles.textContainer, isMovie && styles.leftGradient]}>
            {IS_TV
              && !IS_STV
              && Array.from({ length: gradientHeight }).map((_, i) => (
                <View
                  key={i}
                  style={{
                    ...styles.gradientGenerator,
                    bottom: gradientHeight - 10 * i - 1,
                    opacity: (1 / gradientHeight) * (12 * i + 1),
                  }}
                />
              ))}
            {!IS_MOBILE && (
              <Text style={styles.title}>
                {movie.title || movie.name}
              </Text>
            )}
            <Text style={styles.additionalDetails}>
              {movie.runtime && `${Math.floor(movie.runtime / 60)} h ${movie.runtime % 60} min   `}
              {movie.episode_run_time && `${movie.episode_run_time[0]} min   `}
              {movie.vote_average && `|   ${movie.vote_average}   |   `}
              {movie.genres && movie.genres.map(genre => `${genre.name} `)}
            </Text>
            <Text style={styles.description} numberOfLines={25}>
              {movie.overview}
            </Text>
            {movie.videos && movie.videos.results.length > 0 && (
              <ButtonWithBackground
                ref={(node) => {
                  this.mainbtn = node;
                }}
                hasTVPreferredFocus
                containerStyle={{ alignSelf: 'center' }}
                onPress={() => navigation.navigate('Player', { title: movie.title || movie.name, v: movie.videos.results[0].key })
                }
              >
                Watch
              </ButtonWithBackground>
            )}

            {(IS_WEB || IS_TV) && (
              <ButtonWithBackground
                hasTVPreferredFocus
                containerStyle={[styles.libBtn, isButtonDisabled && { backgroundColor: colors.darkGrey }]}
                onPress={isButtonDisabled ? this.handleRemoveFromLibrary : this.handleAddToLibrary}
              >
                {isButtonDisabled ? 'Remove from favorites' : 'Add to favorites'}
              </ButtonWithBackground>
            )}
            {movieType === 'tv' && (
              <Picker handleSeasonChange={this.handleSeasonChange} movie={movie} selectedSeason={selectedSeason} />
            )}
          </View>
          <View style={{ zIndex: 9 }}>
            {movieType === 'tv' && selectedSeason !== null && (
              <HorizontalList movies={episodes} episodes category="Episodes" navigation={navigation} />
            )}
          </View>
        </View>
      </View>
    );

    return IS_MOBILE ? (
      <ScrollableContent movie={movie}>
        {content}
        <View style={{ backgroundColor: colors.lightGrey }}>
          <HorizontalList movies={recommendedMovies} category="Recommended Movies" navigation={navigation} />
        </View>
      </ScrollableContent>
    ) : (
      <View onKeyDown={this.handleKeyPress} style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }}>
        <ScrollView
          contentContainerStyle={[{ flexGrow: 1 }, IS_WEB && styles.container]}
          style={{ backgroundColor: colors.lightGrey, flex: 1 }}
        >
          <ImageBackground
            style={{ width: '100%', flex: 1 }}
            source={{ uri: `https://image.tmdb.org/t/p/original${movie.backdrop_path}` }}
          >
            {content}
          </ImageBackground>
          <View style={{ backgroundColor: '#000' }}>
            <HorizontalList movies={recommendedMovies} category="Recommended Movies" navigation={navigation} />
          </View>
        </ScrollView>
      </View>
    );
  }
}
