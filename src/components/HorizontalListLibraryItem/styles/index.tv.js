import { StyleSheet } from 'react-native';
import colors from '../../../res/colors';

export default StyleSheet.create({
  title: {
    color: colors.text,
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
    maxHeight: 34,
    overflow: 'hidden',
  },
  imageContainer: {
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    width: '100%',
  },
  image: {
    backgroundColor: colors.imagePlaceholder,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    height: 250,
  },
  focused: {
    elevation: 24,
    shadowColor: colors.shadow,
    shadowOpacity: 0.7,
    shadowRadius: 15,
    transform: [{ scale: 1.025 }],
  },
  focusable: {
    borderRadius: 8,
    marginBottom: 20,
    width: '30%',
  },
  padded: {
    marginHorizontal: 20,
  },
  tvLabel: {
    position: 'absolute',
    zIndex: 99,
    backgroundColor: colors.accentRed,
    fontWeight: '900',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    color: colors.text,
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
    width: '100%',
  },
  btnRight: {
    backgroundColor: colors.darkerRed,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    margin: 0,
    width: '100%',
  },
  btnLong: {
    backgroundColor: colors.darkerRed,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 8,
    margin: 0,
    width: '100%',
  },
});
