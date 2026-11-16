import { StyleSheet, Text, View, ScrollView } from 'react-native';

import AnnouncementPanel from '../components/AnnouncementPanel';
import StudentGreeting from '../components/StudentGreeting';
import Counter from '../components/Counter';
import TimerExample from '../components/TimerExample';

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.container}
    >
      <View style={styles.header}>
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

      <StudentGreeting
        name="Elkan"
        course="BS Information Systems"
      />

      <Counter />

      <TimerExample />

      <AnnouncementPanel />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#F4F7FB',
  },
  container: {
    padding: 24,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
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