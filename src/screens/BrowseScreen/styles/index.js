import { StyleSheet } from 'react-native';
import colors from '../../../res/colors';

export default StyleSheet.create({
  main: {
    backgroundColor: colors.lightGrey,
    flex: 1,
  },
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    flexDirection: 'row',
  },
});
