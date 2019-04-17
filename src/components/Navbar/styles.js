import { Platform, StyleSheet } from 'react-native';
import colors from '../../res/colors';

export default StyleSheet.create({
  ...Platform.select({
    web: {
      navWrap: {
        backgroundColor: colors.darkGrey,
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        paddingHorizontal: 20,
        position: 'absolute',
        top: 0,
        width: '100%',
        zIndex: 2,
      },
      navLeft: {
        display: 'flex',
        flexDirection: 'row',
      },
      linkWrap: {
        justifyContent: 'center',
      },
      link: {
        alignSelf: 'center',
        borderBottomStyle: 'solid',
        borderBottomWidth: 3,
        borderColor: 'transparent',
        color: colors.darkerRed,
        paddingHorizontal: 20,
        paddingVertical: 11,
        fontSize: 16,
        fontWeight: '500',
      },
      linkActive: {
        color: colors.accentRed,
        borderBottomWidth: 3,
        borderBottomColor: colors.accentRed,
        fontWeight: '700',
      },
      logo: {
        alignSelf: 'center',
        color: colors.accentRed,
        fontWeight: '800',
        fontSize: 18,
        marginRight: 35,
        textTransform: 'capitalize',
      },
    },
  }),
});
