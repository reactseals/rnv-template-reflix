import { StyleSheet } from 'react-native';
import colors from '../../../res/colors';

export default StyleSheet.create({
  title: {
    position: 'absolute',
    alignSelf: 'center',
    color: colors.text,
    marginBottom: 5,
    fontSize: 25,
    fontWeight: '800',
    zIndex: 99,
  },
  description: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 10,
    color: colors.description,
  },
  listWrapper: {
    marginRight: 5,
  },
  image: {
    width: 150,
    height: 250,
    marginLeft: 5,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  focused: {
    shadowColor: colors.shadow,
    shadowOpacity: 0.7,
    shadowRadius: 15,
    elevation: 24,
  },
  buttonContainer: {
    width: 200,
    backgroundColor: colors.primary,
  },
  buttonText: {
    fontSize: 16,
  },
});
