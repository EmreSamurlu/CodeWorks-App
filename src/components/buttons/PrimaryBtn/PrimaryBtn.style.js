import {StyleSheet} from 'react-native';
import colors from '../../../style/colors';

const baseStyles = StyleSheet.create({
  btnContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default {
  primary: StyleSheet.create({
    ...baseStyles,
    btnContainer: {
      ...baseStyles.btnContainer,
      backgroundColor: colors.primary,
    },
    title: {
      ...baseStyles.title,
      color: colors.secondary,
    },
  }),

  secondary: StyleSheet.create({
    ...baseStyles,
    btnContainer: {
      ...baseStyles.btnContainer,
      backgroundColor: colors.secondary,
      borderWidth: 1,
      borderColor: colors.primary,
    },
    title: {
      ...baseStyles.title,
      color: colors.primary,
    },
  }),
};
