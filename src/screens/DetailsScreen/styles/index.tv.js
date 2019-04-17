import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../../res/colors';

export default StyleSheet.create({
  container: {
    marginTop: 50,
  },
  tabletDetailsContainer: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'row-reverse',
  },
  textContainer: {
    flex: 1,
    height: Dimensions.get('window').height,
    justifyContent: 'flex-end',
    paddingBottom: 50,
    paddingHorizontal: 10,
    width: '100%',
  },
  title: {
    color: colors.text,
    fontSize: 42,
    fontWeight: '700',
    margin: 10,
    textAlign: 'center',
    zIndex: 999,
  },
  additionalDetails: {
    color: colors.darkerRed,
    fontSize: 18,
    fontWeight: '300',
    textAlign: 'center',
    zIndex: 999,
  },
  description: {
    color: colors.description,
    fontSize: 22,
    fontWeight: '100',
    margin: 10,
    textAlign: 'center',
    zIndex: 999,
  },
  image: {
    width: '100%',
    height: 400,
  },
  tabletImage: {
    width: '90%',
    height: '80%',
    minHeight: 500,
    margin: 5,
  },
  gradientGenerator: {
    position: 'absolute',
    backgroundColor: '#000',
    height: 10,
    right: 0,
    left: 0,
    zIndex: 0,
  },
  libBtn: {
    backgroundColor: colors.darkGrey,
    alignSelf: 'center',
  },
});
