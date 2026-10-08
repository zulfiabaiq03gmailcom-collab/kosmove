import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles';

export default function Beranda() {
  return (
    <>
      <View style={styles.topBar}>
        <Ionicons name="car-sport" size={32} color="#0D9488" />
        <View>
          <Text style={styles.brand}>KosMove</Text>
          <Text style={styles.brandCaption}>Pindahan kos jadi praktis</Text>
        </View>
      </View>
      <View style={styles.hero}>
        <Text style={styles.heroEyebrow}>SOLUSI PINDAHAN KOS</Text>
        <Text style={styles.heroTitle}>Pindah Kos? Biar Kami Bantu!</Text>
        <Text style={styles.heroDescription}>Pilih layanan pindahan sesuai kebutuhanmu. Cepat, mudah, dan ramah mahasiswa.</Text>
      </View>
    </>
  );
}
