import {StyleSheet} from 'react-native';
import colors from '../../../style/colors';

const baseStyles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  icon: {
    fontSize: 24,
    width: '40%',
    textAlign: 'center',
  },
});

export default {
  primary: StyleSheet.create({
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

  icon: StyleSheet.create({
    btnContainer: {
      ...baseStyles.btnContainer,
      backgroundColor: colors.primary,
    },
    title: {
      ...baseStyles.title,
      color: colors.secondary,
    },
    icon: {
      ...baseStyles.icon,
      color: colors.secondary,
    },
  }),
};
