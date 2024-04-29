import { theme } from '@/theme';
import { fontFamily } from '@/theme/fontFamily';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5
  },
  image: {
    borderRadius: 22
  },
  title: {
    fontSize: 14,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.bold
  },
  footer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignContent: "center",
    marginTop: 7
  }
});