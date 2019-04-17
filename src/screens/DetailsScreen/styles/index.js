import { StyleSheet } from 'react-native';
import colors from '../../../res/colors';

export default StyleSheet.create({
  container: {
    marginTop: 50,
  },
  tabletDetailsContainer: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'row-reverse',
  },
  textContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 10,
    width: '100%',
  },
  title: {
    color: colors.text,
    fontSize: 30,
    fontWeight: '700',
    margin: 10,
    textAlign: 'center',
    zIndex: 999,
  },
  additionalDetails: {
    color: colors.darkerRed,
    fontSize: 14,
    fontWeight: '300',
    textAlign: 'center',
    zIndex: 999,
  },
  description: {
    textAlign: 'justify',
    fontSize: 20,
    fontWeight: '100',
    margin: 10,
    color: colors.description,
    zIndex: 999,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  modalSelectStyle: {
    width: '90%',
    borderRadius: 8,
    padding: 10,
    margin: 5,
    shadowOpacity: 0,
    alignSelf: 'center',
    marginBottom: 30,
  },
  modalSelectTextStyle: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 12,
    textAlign: 'center',
  },
  libBtn: {
    backgroundColor: colors.darkGrey,
    alignSelf: 'center',
  },
});
