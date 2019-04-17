import { StyleSheet } from 'react-native';
import colors from '../../../res/colors';

export default StyleSheet.create({
  text: {
    color: colors.titleGrey,
    fontSize: 14,
    marginTop: 5,
    marginBottom: 5,
  },
  imageContainer: {
    width: 180,
  },
  image: {
    backgroundColor: colors.imagePlaceholder,
    borderRadius: 8,
    height: 260,
    transitionDuration: '0.25s',
    transitionProperty: 'all',
  },
  focusable: {},
  padded: {
    paddingHorizontal: 20,
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
});
