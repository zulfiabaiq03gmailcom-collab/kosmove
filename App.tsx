import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import Beranda from './components/Beranda';
import LayananList from './components/LayananList';
import FormPesanan from './components/FormPesanan';
import { styles } from './styles';

export default function App() {
  const [layananId, setLayananId] = useState<number>(2);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
      <Beranda />
      <LayananList dipilih={layananId} onPilih={setLayananId} />
      <FormPesanan layananId={layananId} />
      <Text style={styles.footer}>KosMove | Demo Modul 1</Text>
    </ScrollView>
  );
}
