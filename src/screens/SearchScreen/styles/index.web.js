import { StyleSheet } from 'react-native';
import colors from '../../../res/colors';

export default StyleSheet.create({

  webContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },

  scroller: {
    backgroundColor: colors.lightGrey,
    flex: 1,
    paddingHorizontal: 30,
  },

  input: {
    color: '#fff',
    borderColor: 'gray',
    borderRadius: 8,
    borderWidth: 1,
    height: 40,
    marginTop: 75,
    marginBottom: 35,
    outline: 'none',
    paddingHorizontal: 10,
  },

  movieGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

});
