import { StyleSheet } from 'react-native';
import colors from '../../../res/colors';

export default StyleSheet.create({

  scroller: {
    backgroundColor: colors.lightGrey,
    flex: 1,
    paddingHorizontal: 5,
  },

  input: {
    marginTop: 15,
    marginBottom: 15,
    paddingHorizontal: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    color: '#fff',
  },

  movieGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

});
