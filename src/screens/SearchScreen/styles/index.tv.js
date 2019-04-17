import { StyleSheet } from 'react-native';
import colors from '../../../res/colors';

export default StyleSheet.create({

  scroller: {
    backgroundColor: colors.lightGrey,
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 30,
  },

  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    color: '#fff',
    height: 40,
    marginTop: 75,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  movieGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

});
