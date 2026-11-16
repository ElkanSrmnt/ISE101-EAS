import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

interface Announcement {
  id: string;
  sender: string;
  title: string;
  message: string;
  read: boolean;
}

const INITIAL_ANNOUNCEMENTS: Announcement[] = [
  {
    id: '1',
    sender: 'REGISTRAR',
    title: 'Enrollment reminders for Second Semester',
    message: 'Please settle your accounts before the priority registration period starts next week.',
    read: false,
  },
  {
    id: '2',
    sender: 'STUDENT AFFAIRS',
    title: 'New Campus Orientation and Guidelines',
    message: 'All freshman students are required to attend the orientation at the main auditorium.',
    read: false,
  },
  {
    id: '3',
    sender: 'LIBRARY',
    title: 'Extended Operating Hours during Midterms',
    message: 'The main library will remain open until 10:00 PM starting next Monday.',
    read: false,
  },
];

export function AnnouncementPanel() {
  const [announcements, setAnnouncements] = useState<Announcement[]>(INITIAL_ANNOUNCEMENTS);

  const unreadCount = announcements.filter((item) => !item.read).length;

  const handleMarkAsRead = (id: string) => {
    console.log('Mark as read clicked for ID:', id);
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

      {/* Gumamit kami ng .map sa halip na FlatList para iwas-bug sa Web browser clicks */}
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

          {!item.read && (
            <Pressable 
              style={({ pressed }) => [styles.button, pressed && { opacity: 0.7 }]} 
              onPress={() => handleMarkAsRead(item.id)}
            >
              <Text style={styles.buttonText}>Mark as Read</Text>
            </Pressable>
          )}
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
  button: {
    backgroundColor: '#1E40AF',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    // @ts-ignore
    cursor: 'pointer',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});