import { StyleSheet } from 'react-native';
import colors from '../../../res/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightGrey,
  },
  buttonContainer: {
    width: 200,
  },
  buttonText: {
    fontSize: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  textInput: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    height: 40,
    margin: 5,
    outline: 'none',
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '60%',
  },
  logo: {
    alignSelf: 'center',
    color: colors.accentRed,
    fontWeight: '800',
    fontSize: 64,
    marginBottom: 35,
    textTransform: 'capitalize',
  },
  subscript: {
    color: colors.description,
    fontSize: 14,
    fontWeight: '100',
    margin: 10,
    marginTop: 10,
    textAlign: 'center',
  },
});
