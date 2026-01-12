import { Stack } from 'expo-router';
import { TamaguiProvider } from 'tamagui';
import config from '../tamagui.config';

export default function RootLayout() {
  return (
    <TamaguiProvider config={config}>
      <Stack screenOptions={{ headerShown: false }}>
        {/* This tells the app: "Just load index.tsx as the main screen" */}
        <Stack.Screen name="index" />
      </Stack>
    </TamaguiProvider>
  );
}
