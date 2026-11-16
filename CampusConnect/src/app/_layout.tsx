
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#174A7E',
          tabBarInactiveTintColor: '#64748B',
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            height: 60,
            paddingBottom: 8,
            paddingTop: 8,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{ title: 'Home' }}
        />
        <Tabs.Screen
          name="announcements"
          options={{ title: 'Announcements' }}
        />
        <Tabs.Screen
          name="profile"
          options={{ title: 'Profile' }}
        />
        <Tabs.Screen
          name="explore"
          options={{ href: null }}
        />
      </Tabs>
    </>
  );
}
  