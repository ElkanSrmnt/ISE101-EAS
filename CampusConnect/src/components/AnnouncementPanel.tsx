
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AnnouncementCard from './AnnouncementCard';

type Announcement = {
  id: string;
  title: string;
  category: string;
  read: boolean;
};

export default function AnnouncementPanel() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([
    {
      id: 'ANN-001',
      title: 'Enrollment Reminder',
      category: 'Academic',
      read: false,
    },
    {
      id: 'ANN-002',
      title: 'Sports Festival Announcement',
      category: 'Events',
      read: false,
    },
    {
      id: 'ANN-003',
      title: 'Campus Clean-up Drive',
      category: 'Community',
      read: true,
    },
  ]);

  const unreadCount = announcements.filter(
    (announcement) => !announcement.read
  ).length;

  const toggleRead = (id: string) => {
    setAnnouncements((current) =>
      current.map((announcement) =>
        announcement.id === id
          ? { ...announcement, read: !announcement.read }
          : announcement
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Campus Announcements</Text>

      <Text style={styles.count}>
        Total Announcements: {announcements.length}
      </Text>

      <Text style={styles.count}>
        Unread Announcements: {unreadCount}
      </Text>

      {announcements.map((announcement) => (
        <AnnouncementCard
          key={announcement.id}
          title={announcement.title}
          category={announcement.category}
          read={announcement.read}
          onMarkRead={() => toggleRead(announcement.id)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#E8F0FE',
    borderRadius: 12,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2563EB',
    marginBottom: 10,
  },
  count: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 5,
  },
});
