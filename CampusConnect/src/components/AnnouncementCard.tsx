import { Pressable, StyleSheet, Text, View } from 'react-native';

export interface Announcement {
  id: string;
  title: string;
  description: string;
  category: string;
}

export function AnnouncementCard({
  item,
  isRead,
  onToggleRead,
}: {
  item: Announcement;
  isRead: boolean;
  onToggleRead: () => void;
}) {
  return (
    <View style={[styles.card, isRead && styles.cardRead]}>
      <View style={styles.headerRow}>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={[styles.statusBadge, isRead ? styles.statusRead : styles.statusUnread]}>
          {isRead ? 'Read' : 'Unread'}
        </Text>
      </View>

      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`Mark ${item.title} as ${isRead ? 'unread' : 'read'}`}
        onPress={onToggleRead}
        style={({ pressed }) => [
          styles.button,
          isRead ? styles.buttonSecondary : styles.buttonPrimary,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={[styles.buttonText, isRead && styles.buttonTextSecondary]}>
          {isRead ? 'Mark as Unread' : 'Mark as Read'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    gap: 8,
  },
  cardRead: {
    backgroundColor: '#F8FAFC',
    borderColor: '#CBD5E1',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  category: {
    fontSize: 12,
    fontWeight: '700',
    color: '#174A7E',
    textTransform: 'uppercase',
  },
  statusBadge: {
    fontSize: 12,
    fontWeight: '600',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    overflow: 'hidden',
  },
  statusUnread: {
    backgroundColor: '#DBEAFE',
    color: '#1E40AF',
  },
  statusRead: {
    backgroundColor: '#E2E8F0',
    color: '#475569',
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0F172A',
    flexShrink: 1,
  },
  description: {
    fontSize: 14,
    color: '#334155',
    lineHeight: 20,
  },
  button: {
    marginTop: 4,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    alignItems: 'center',
    cursor: 'pointer',
  },
  buttonPrimary: {
    backgroundColor: '#174A7E',
  },
  buttonSecondary: {
    backgroundColor: '#E2E8F0',
  },
  buttonPressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
  buttonTextSecondary: {
    color: '#1E293B',
  },
});