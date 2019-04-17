import { StyleSheet } from 'react-native';
import colors from '../../../res/colors';

export default StyleSheet.create({
  title: {
    color: '#d8d8d8',
    fontSize: 20,
    fontWeight: '800',
    marginTop: 5,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    fontWeight: '100',
    color: colors.description,
    lineHeight: 17,
    maxHeight: 51,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
  },
  image: {
    backgroundColor: '#181a1b',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    height: 250,
  },
  focusable: {
    borderRadius: 8,
    marginBottom: 20,
    transitionDuration: '0.25s',
    transitionProperty: 'all',
    width: '30%',
  },
  padded: {
    marginHorizontal: 'auto',
  },
  tvLabel: {
    position: 'absolute',
    zIndex: 99,
    backgroundColor: colors.accentRed,
    fontWeight: '900',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    color: '#fff',
    alignSelf: 'flex-end',
    opacity: 0.95,
  },
  movieBottom: {
    backgroundColor: colors.darkGrey,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  infoContainer: {
    paddingBottom: 10,
    paddingTop: 5,
    paddingHorizontal: 10,
  },
  btnLeft: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    margin: 0,
    width: '50%',
  },
  btnRight: {
    backgroundColor: colors.darkerRed,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    margin: 0,
    width: '50%',
  },
  btnLong: {
    backgroundColor: colors.darkerRed,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 8,
    margin: 0,
    width: '100%',
  },
  btnLeftHover: {
    backgroundColor: colors.accentRedHovered,
  },
  btnRightHover: {
    backgroundColor: colors.darkerRedHovered,
  },
});
