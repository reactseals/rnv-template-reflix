import { StyleSheet } from 'react-native';
import colors from '../../res/colors';

const styles = StyleSheet.create({
  text: {
    alignItems: 'center',
    color: colors.midGrey,
    fontSize: 24,
    padding: 15,
    textAlign: 'center',
  },
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
    width: '5%',
    backgroundColor: colors.darkGrey,
  },
});

export default styles;
