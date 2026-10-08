import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { daftarLayanan, formatRupiah } from '../data/layanan';
import { styles } from '../styles';

type Props = {
  dipilih: number;
  onPilih: (id: number) => void;
};

export default function LayananList({ dipilih, onPilih }: Props) {
  return (
    <View>
      <Text style={styles.sectionTitle}>Pilihan Layanan</Text>
      {daftarLayanan.map((layanan) => (
        <Pressable
          key={layanan.id}
          onPress={() => onPilih(layanan.id)}
          style={[styles.serviceCard, { borderColor: dipilih === layanan.id ? '#0D9488' : '#E4E8EF', borderWidth: dipilih === layanan.id ? 2 : 1 }]}
        >
          <Ionicons name={layanan.ikon} size={28} color="#0D9488" />
          <View style={styles.serviceInfo}>
            <Text style={styles.serviceName}>{layanan.nama}</Text>
            <Text style={styles.serviceDescription}>{layanan.deskripsi}</Text>
            <Text style={styles.servicePrice}>Mulai {formatRupiah(layanan.harga)}</Text>
          </View>
          <Ionicons name={dipilih === layanan.id ? 'radio-button-on' : 'radio-button-off'} size={23} color="#0D9488" />
        </Pressable>
      ))}
    </View>
  );
}
