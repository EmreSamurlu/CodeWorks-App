import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../style/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  logo: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: colors.primary,
  },
  bodyContainer: {
    flex: 1,
  },
});
