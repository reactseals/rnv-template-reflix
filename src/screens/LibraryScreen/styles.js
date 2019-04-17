import { StyleSheet } from 'react-native';
import colors from '../../res/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonContainer: {
    backgroundColor: colors.darkGrey,
  },
  buttonText: {
    fontSize: 20,
    color: colors.primary,
  },
  scroller: {
    backgroundColor: colors.lightGrey,
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 75,
  },
});
