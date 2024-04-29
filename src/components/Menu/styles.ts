import { theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray[800]
  },
  content: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  title: {
    flex: 1,
    textAlign: "center",
    marginRight: 24, // mesmo tamanho do icon para ficar centralizado
    fontFamily: theme.fontFamily.medium,
    color: theme.colors.white,
    fontSize: 18,
  },
  header: {
    flexDirection: "row",
  },
  options: {
    flexDirection: "row",
    gap: 16,
    marginTop: 32,
  }
});