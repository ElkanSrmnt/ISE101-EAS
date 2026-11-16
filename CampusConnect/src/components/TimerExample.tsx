
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TimerExample() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((currentSeconds) => currentSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Timer Example</Text>
      <Text style={styles.seconds}>Seconds: {seconds}</Text>
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2563EB',
    marginBottom: 8,
  },
  seconds: {
    fontSize: 20,
    color: '#333333',
  },
});
