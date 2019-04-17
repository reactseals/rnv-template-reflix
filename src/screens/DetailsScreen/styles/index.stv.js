import { StyleSheet, Platform } from 'react-native';
import colors from '../../../res/colors';

export default StyleSheet.create({
  ...Platform.select({
    web: {
      container: {
      },
      tabletDetailsContainer: {
        flex: 1,
        flexGrow: 1,
        flexDirection: 'row-reverse',
      },
      gradientContainer: {
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0) 15%, rgb(0, 0, 0) 101%)',
        flex: 1,
        minHeight: '100vh',
      },
      leftGradient: {
      },
      textContainer: {
        flex: 1,
        height: '100vh',
        justifyContent: 'flex-end',
        paddingBottom: 50,
        paddingHorizontal: 10,
        width: '100vw',
      },
      title: {
        color: colors.text,
        fontSize: 42,
        fontWeight: '700',
        margin: 10,
        textAlign: 'center',
        zIndex: 999,
      },
      additionalDetails: {
        color: colors.darkerRed,
        fontSize: 18,
        fontWeight: '300',
        textAlign: 'center',
        zIndex: 999,
      },
      description: {
        color: colors.description,
        fontSize: 22,
        fontWeight: '100',
        margin: 10,
        textAlign: 'center',
        zIndex: 999,
      },
      image: {
        width: '100%',
        height: 400,
      },
      tabletImage: {
        width: '90%',
        height: '80%',
        minHeight: 500,
        margin: 5,
      },
      libBtn: {
        backgroundColor: colors.darkGrey,
        alignSelf: 'center',
      },
      picker: {
        fontSize: 12,
        fontWeight: '400',
        color: '#fff',
        height: 50,
        backgroundColor: 'transparent',
        borderRadius: 8,
        padding: 10,
        margin: 5,
        shadowOpacity: 0,
        alignSelf: 'center',
        borderColor: 'transparent',
      },
    },
  }),
});
