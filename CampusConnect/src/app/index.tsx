
import { StyleSheet, Text, View } from 'react-native';
import type { Announcement } from '../types/announcement';
import { getUnreadAnnouncements } from '../services/announcementUtils';

const sampleAnnouncements: Announcement[] = [
  {
    id: 'a1',
    title: 'Enrollment reminders',
    category: 'Academic',
    read: false,
  },
  {
    id: 'a2',
    title: 'Campus orientation',
    category: 'Events',
    read: true,
  },
  {
    id: 'a3',
    title: 'Library schedule',
    category: 'Notice',
    read: false,
  },
];

export default function HomeScreen() {
  const unread = getUnreadAnnouncements(sampleAnnouncements);

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

      <Text style={styles.count}>
        Unread announcements: {unread.length}
      </Text>

      {sampleAnnouncements.map(item => (
        <Text key={item.id} style={styles.announcement}>
          {item.title}
        </Text>
      ))}
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
  count: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2563EB',
    marginTop: 15,
    marginBottom: 15,
  },
  announcement: {
    fontSize: 14,
    color: '#555555',
    marginBottom: 10,
  },
});
