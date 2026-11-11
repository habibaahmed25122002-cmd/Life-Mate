import { Stack } from 'expo-router';

export const unstable_settings = {
  initialRouteName: 'welcome',
};

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}