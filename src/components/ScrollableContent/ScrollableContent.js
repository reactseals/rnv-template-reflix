import React from 'react';
import { Text, View, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import colors from '../../res/colors';
import styles from './styles';

const MIN_HEIGHT = 100;
const MAX_HEIGHT = 350;
const ScrollableContent = ({ movie, children }) => (
  <View style={{ flexGrow: 1, flexShrink: 1 }}>
    <HeaderImageScrollView
      maxHeight={MAX_HEIGHT}
      minHeight={MIN_HEIGHT}
      maxOverlayOpacity={0.6}
      minOverlayOpacity={0.3}
      fadeOutForeground
      scrollViewBackgroundColor={colors.lightGrey}
      renderHeader={() => (
        <Image source={{ uri: `https://image.tmdb.org/t/p/original${movie.poster_path}` }} style={styles.image} />
      )}
      renderFixedForeground={() => (
        <Animatable.View
          style={styles.navTitleView}
          ref={(navTitleView) => {
            this.navTitleView = navTitleView;
          }}
        >
          <Text style={styles.navTitle}>
            {movie.title || movie.name}
            {' '}
            {movie.year}
          </Text>
        </Animatable.View>
      )}
    >
      <TriggeringView
        style={{ backgroundColor: colors.lightGrey }}
        onHide={() => this.navTitleView.fadeInUp(200)}
        onDisplay={() => this.navTitleView.fadeOut(100)}
      >
        <Text style={styles.fadeTitle}>
          {movie.title || movie.name}
          {' '}
          {movie.year}
        </Text>
      </TriggeringView>
      {children}
    </HeaderImageScrollView>
  </View>
);

export default ScrollableContent;
