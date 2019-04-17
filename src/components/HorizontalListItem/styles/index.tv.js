import { StyleSheet } from 'react-native';
import colors from '../../../res/colors';

export default StyleSheet.create({
  text: {
    color: colors.titleGrey,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 18,
    zIndex: 99999,
  },
  imageContainer: {
    width: 250,
    zIndex: 99999,
  },
  image: {
    backgroundColor: colors.imagePlaceholder,
    borderRadius: 8,
    height: 400,
    zIndex: 99999,
  },
  focused: {
    elevation: 24,
    shadowColor: colors.shadow,
    shadowOpacity: 0.7,
    shadowRadius: 15,
    transform: [{ scale: 1.025 }],
  },
  padded: {
    paddingHorizontal: 20,
  },
  focusable: {
    height: 430,
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
