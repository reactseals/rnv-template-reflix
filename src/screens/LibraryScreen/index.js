import React, { Component } from 'react';
import { AsyncStorage, Platform, ScrollView, Text, View } from 'react-native';
import { IS_MOBILE } from 'rnv-platform-info';
import VerticalList from '../../components/VerticalList';
import HorizontalLibraryItem from '../../components/HorizontalListLibraryItem';
import colors from '../../res/colors';
import * as firebaseService from '../../api/firebase';
import * as omdbService from '../../api/tmdb';

import styles from './styles';

let userid;
const isWeb = Platform.OS === 'web';
export default class LibraryScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarOnPress({ defaultHandler }) {
      navigation.state.params.getBookmarkedMovies(navigation.getParam('userid'));
      defaultHandler();
    },
    headerRight: (
      <Text
        onPress={navigation.getParam('handleAuth')}
        style={{ color: colors.accentRed, paddingRight: 15, fontSize: 20 }}
      >
        {navigation.getParam('isLoggedIn') ? 'Log out' : 'Log in'}
      </Text>
    ),
  });

  constructor(props) {
    super(props);
    if (!isWeb) {
      props.navigation.setParams({
        getBookmarkedMovies: this.getBookmarkedMovies,
      });
    }
  }

  state = {
    bookmarkedMovies: [],
  };

  async componentDidMount() {
    const { navigation } = this.props;
    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');

    userid = await AsyncStorage.getItem('userId');
    if (!isWeb) {
      navigation.setParams({ handleAuth: this.handleAuth });
      navigation.setParams({ isLoggedIn });
      navigation.setParams({ userid });
    }
    this.getBookmarkedMovies(userid);
  }

  getBookmarkedMovies = async (userId) => {
    const { bookmarkedMovies } = this.state;
    const querySnapshot = await firebaseService.getBookmarkedMovies(userId);
    querySnapshot.forEach(async (doc) => {
      const movie = await omdbService.getMovie(doc.data().movieId, doc.data().movieType);
      const movieAlreadyShownToUser = bookmarkedMovies.some(shownMovie => shownMovie.id === movie.id);
      if (!movieAlreadyShownToUser) {
        this.setState(prevState => ({
          bookmarkedMovies: [...prevState.bookmarkedMovies, { ...movie, media_type: doc.data().movieType }],
        }));
      }
    });
  };

  handleRemoveFromLibrary = async (movieId, movieType) => {
    const { bookmarkedMovies } = this.state;
    userid = await AsyncStorage.getItem('userId');
    await firebaseService.removeFromLibrary(movieId, userid, movieType);
    this.setState({
      bookmarkedMovies: bookmarkedMovies.filter(movie => movie.id !== movieId),
    });
  };

  render() {
    const { bookmarkedMovies } = this.state;
    const { navigation } = this.props;

    const webContent = (
      <ScrollView
        contentContainerStyle={[{ flexGrow: 1 }]}
        style={styles.scroller}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.container}>
          {bookmarkedMovies.map(movie => (
            <HorizontalLibraryItem
              key={movie.id}
              handleRemoveFromLibrary={this.handleRemoveFromLibrary}
              padded
              item={movie}
              navigation={navigation}
            />
          ))}
        </View>
      </ScrollView>
    );

    const mobileContent = (
      <View style={{ backgroundColor: colors.lightGrey, flex: 1 }}>
        <VerticalList
          movies={bookmarkedMovies}
          navigation={navigation}
          getBookmarkedMovies={this.getBookmarkedMovies}
          handleRemoveFromLibrary={this.handleRemoveFromLibrary}
        />
      </View>
    );

    return IS_MOBILE ? mobileContent : webContent;
  }
}
