import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../res/colors';

const MIN_HEIGHT = 100;
const MAX_HEIGHT = 350;

const styles = StyleSheet.create({
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTitle: {
    color: colors.text,
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
    opacity: 0,
  },
  navTitle: {
    color: colors.text,
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  fadeTitle: {
    color: colors.text,
    fontSize: 30,
    fontWeight: '700',
    margin: 10,
    textAlign: 'center',
    zIndex: 999,
  },
});

export default styles;
