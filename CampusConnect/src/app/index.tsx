
import { ScrollView, StyleSheet, View } from 'react-native';
import { ActionButton } from '../components/ActionButton';
import { AnnouncementPanel } from '../components/AnnouncementPanel';
import { SectionHeading } from '../components/SectionHeading';

export default function HomeScreen() {
  const handleMainAction = () => {
    console.log('BUTTON CLICKED!');
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {/* Week 4 Section Heading */}
      <SectionHeading />

      {/* Announcement Panel */}
      <AnnouncementPanel />

      {/* Week 4 Action Button */}
      <View style={styles.buttonContainer}>
        <ActionButton
          label="Check for Updates"
          onPress={handleMainAction}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  buttonContainer: {
    marginTop: 16,
    marginBottom: 20,
  },
});
