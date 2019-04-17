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
    width: 150,
  },
  image: {
    backgroundColor: colors.imagePlaceholder,
    borderRadius: 8,
    height: 250,
  },
  focused: {
    elevation: 24,
    shadowColor: colors.shadow,
    shadowOpacity: 0.7,
    shadowRadius: 15,
    transform: [{ scale: 1.025 }],
  },
  padded: {
    paddingHorizontal: 15,
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
