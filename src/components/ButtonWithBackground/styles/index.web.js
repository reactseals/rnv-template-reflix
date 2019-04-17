import { StyleSheet } from 'react-native';
import colors from '../../../res/colors';

export default StyleSheet.create({
  text: {
    color: colors.text,
    fontWeight: '400',
    fontSize: 12,
    textAlign: 'center',
    transitionDuration: '0.35s',
    transitionProperty: 'all',
  },
  button: {
    backgroundColor: colors.accentRed,
    borderRadius: 8,
    padding: 10,
    margin: 5,
    shadowOpacity: 0,
    transitionDuration: '0.35s',
    transitionProperty: 'all',
    width: '75%',
    zIndex: 999,
  },
  disabledText: {
    color: colors.lightGrey,
  },
  focused: {
    shadowColor: colors.shadow,
    shadowOpacity: 0.7,
    shadowRadius: 25,
    elevation: 24,
    shadowOffset: { width: 1, height: 1 },
  },
  disabledStyle: {
    backgroundColor: colors.darkGrey,
  },
});
