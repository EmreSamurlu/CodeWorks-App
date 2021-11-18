import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../style/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  logo: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 4,
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: colors.primary,
  },
  input: {
    backgroundColor: colors.inputBackground,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
  },
  bodyContainer: {
    flex: 1,
  },
});
