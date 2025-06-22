// HomeScreen.tsx
import React from 'react';
import { ScrollView, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-white p-8 ">
      <Text className="text-3xl font-bold text-gray-900 mb-4">
        Welcome Back 👋
      </Text>

      <Text className="text-lg text-gray-700 mb-4">
        Its Home Screen! 
      </Text>
    </ScrollView>
  );
}
