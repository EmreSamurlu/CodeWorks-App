import {StyleSheet} from 'react-native';
import colors from '../../../style/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    borderColor: colors.primary,
    height: 150,
    width: 350,
    borderWidth: 1,
    flexDirection: 'column',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  inner_container: {
    flexDirection: 'row',
  },
  name: {
    flex: 0.6,
    borderWidth: 1,
  },
  image: {
    flex: 0.3,
    width: 100,
    height: 50,
    // resizeMode: 'contain',
  },
  title: {
    borderWidth: 1,
  },
  company_name: {},
});
