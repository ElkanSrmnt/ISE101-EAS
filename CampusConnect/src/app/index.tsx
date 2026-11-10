
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Connect</Text>

      <Text style={styles.subtitle}>
        One campus. Connected students.
      </Text>

      <Text style={styles.description}>
        Welcome to Campus Connect!
      </Text>

      <Text style={styles.description}>
        A student-focused mobile application
        that helps students stay connected
        with campus activities and updates.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#F4F7FB',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 12,
    color: '#2563EB',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#333333',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555555',
    marginBottom: 10,
  },
});
