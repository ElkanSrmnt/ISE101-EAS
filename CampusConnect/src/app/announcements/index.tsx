
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { AnnouncementPanel } from '../../components/AnnouncementPanel';

export default function AnnouncementsScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <View style={styles.heading}>
        <Text style={styles.title}>Announcements</Text>
        <Text style={styles.subtitle}>
          Stay updated with the latest campus announcements.
        </Text>
      </View>

      <AnnouncementPanel />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  heading: {
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0F172A',
  },
  subtitle: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 6,
  },
});
