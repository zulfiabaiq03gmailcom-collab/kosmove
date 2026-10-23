import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'KosMove', headerShown: false }} />
      <Stack.Screen
        name="layanan/[id]"
        options={{ title: 'Detail Layanan', headerBackTitle: 'Beranda' }}
      />
    </Stack>
  );
}
