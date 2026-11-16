import { StyleSheet, Text, View } from 'react-native';

export function SectionHeading() {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Campus Connect</Text>
      <Text style={styles.subtitle}>Campus updates in one place</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingVertical: 10,
    paddingHorizontal: 4,
    gap: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#174A7E',
  },
  subtitle: {
    fontSize: 14,
    color: '#526070',
  },
});