import { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { router } from 'expo-router';
import { CAMPUS_ANNOUNCEMENTS } from '../constants/announcements';
import type { CampusAnnouncement } from '../types/announcement';

export function AnnouncementPanel() {
  const [announcements, setAnnouncements] = useState<CampusAnnouncement[]>(CAMPUS_ANNOUNCEMENTS);

  const unreadCount = announcements.filter((item) => !item.read).length;

  const handleMarkAsRead = (id: string) => {
    setAnnouncements((prev) =>
      prev.map((item) => (item.id === id ? { ...item, read: true } : item))
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>Announcements</Text>
        <Text style={styles.unreadCounter}>{unreadCount} Unread</Text>
      </View>

      {announcements.map((item) => (
        <View key={item.id} style={[styles.card, item.read && styles.readCard]}>
          <View style={styles.cardHeader}>
            <Text style={styles.senderText}>{item.sender}</Text>
            <Text style={[styles.statusBadge, item.read ? styles.readBadge : styles.unreadBadge]}>
              {item.read ? 'Read' : 'Unread'}
            </Text>
          </View>

          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.messageText}>{item.message}</Text>

          <View style={styles.actionRow}>
            {!item.read && (
              <Pressable
                accessibilityRole="button"
                style={styles.markReadButton}
                onPress={() => handleMarkAsRead(item.id)}
              >
                <Text style={styles.markReadText}>Mark as Read</Text>
              </Pressable>
            )}

            <Pressable
              accessibilityRole="button"
              accessibilityLabel={`View details for ${item.title}`}
              style={styles.viewDetailsButton}
              onPress={() =>
                router.push({
                  pathname: '/announcements/[id]',
                  params: { id: item.id },
                })
              }
            >
              <Text style={styles.viewDetailsText}>View Details →</Text>
            </Pressable>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0F172A',
  },
  unreadCounter: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1D4ED8',
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  readCard: {
    opacity: 0.7,
    backgroundColor: '#F8FAFC',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  senderText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1E40AF',
    letterSpacing: 0.5,
  },
  statusBadge: {
    fontSize: 11,
    fontWeight: '600',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    overflow: 'hidden',
  },
  unreadBadge: {
    backgroundColor: '#EFF6FF',
    color: '#1D4ED8',
  },
  readBadge: {
    backgroundColor: '#F1F5F9',
    color: '#64748B',
  },
  titleText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 6,
  },
  messageText: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 12,
    lineHeight: 20,
  },
  actionRow: {
    gap: 8,
  },
  markReadButton: {
    backgroundColor: '#1E40AF',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    // @ts-ignore
    cursor: 'pointer',
  },
  markReadText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  viewDetailsButton: {
    backgroundColor: '#E2E8F0',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    // @ts-ignore
    cursor: 'pointer',
  },
  viewDetailsText: {
    color: '#1E293B',
    fontSize: 14,
    fontWeight: '600',
  },
});