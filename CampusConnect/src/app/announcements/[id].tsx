import { StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { CAMPUS_ANNOUNCEMENTS } from '../../constants/announcements';

export default function AnnouncementDetailsScreen() {
  const { id } = useLocalSearchParams<{ id?: string | string[] }>();
  const announcementId = typeof id === 'string' ? id : undefined;
  const announcement = CAMPUS_ANNOUNCEMENTS.find((item) => item.id === announcementId);

  if (!announcement) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorTitle}>Announcement Not Found</Text>
        <Text style={styles.errorText}>
          This announcement may have been removed, or its link is incomplete.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.senderText}>{announcement.sender}</Text>
      <Text style={styles.titleText}>{announcement.title}</Text>
      <Text style={styles.messageText}>{announcement.message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8FAFC',
  },
  senderText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1E40AF',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  titleText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 12,
  },
  messageText: {
    fontSize: 15,
    color: '#475569',
    lineHeight: 22,
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#DC2626',
    marginBottom: 8,
  },
  errorText: {
    fontSize: 15,
    color: '#64748B',
  },
});