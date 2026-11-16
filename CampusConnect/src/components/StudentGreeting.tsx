
import { View, Text, StyleSheet } from 'react-native';

type StudentGreetingProps = {
  name: string;
  course: string;
};

export default function StudentGreeting({
  name,
  course,
}: StudentGreetingProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Welcome, {name}!</Text>
      <Text style={styles.message}>Course: {course}</Text>
      <Text style={styles.message}>
        Welcome to Campus Connect!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#E8F0FE',
    borderRadius: 10,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2563EB',
  },
  message: {
    fontSize: 14,
    color: '#555555',
    marginTop: 5,
  },
});

