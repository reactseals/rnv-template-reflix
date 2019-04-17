import { StyleSheet } from 'react-native';
import colors from '../../../res/colors';

export default StyleSheet.create({
  title: {
    color: colors.text,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 25,
  },
  description: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 10,
    color: colors.description,
  },
  listWrapper: {
    marginRight: 15,
  },
  image: {
    width: 250,
    height: 350,
    marginLeft: 5,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    width: 200,
    backgroundColor: colors.primary,
  },
  buttonText: {
    fontSize: 16,
  },
});
