import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      {/* <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      /> */}
      <Tabs.Screen
        name="cheese"
        options={{
          title: 'Cheese',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="table" color={color} />,
        }}
      />
      <Tabs.Screen
        name="sandwich"
        options={{
          title: 'Sandwich',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="music" color={color} />,
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          title: 'camera',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="camera" color={color} />,
        }}
      />
    </Tabs>
  );
}