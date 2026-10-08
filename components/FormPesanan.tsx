import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import { daftarLayanan, formatRupiah } from '../data/layanan';
import { styles } from '../styles';

type Props = { layananId: number };

export default function FormPesanan({ layananId }: Props) {
  const [nama, setNama] = useState<string>('');
  const [tujuan, setTujuan] = useState<string>('');
  const layanan = daftarLayanan.find((item) => item.id === layananId);

  // Custom function dan kondisi.
  function buatPesanan(): void {
    if (nama.trim() === '' || tujuan.trim() === '') {
      Alert.alert('Data belum lengkap', 'Isi nama dan tujuan dahulu.');
      return;
    }
    if (!layanan) {
      Alert.alert('Pilih layanan', 'Layanan tidak ditemukan.');
      return;
    }
    Alert.alert('Simulasi berhasil', `Pemesan: ${nama}\nTujuan: ${tujuan}\nLayanan: ${layanan.nama}\nEstimasi: ${formatRupiah(layanan.harga)}`);
  }

  return (
    <View style={styles.formCard}>
      <Text style={styles.sectionTitle}>Form Pemesanan</Text>
      <Text style={styles.label}>Nama pemesan</Text>
      <TextInput style={styles.input} placeholder="Masukkan nama" value={nama} onChangeText={setNama} />
      <Text style={styles.label}>Lokasi tujuan</Text>
      <TextInput style={styles.input} placeholder="Contoh: Kos Melati" value={tujuan} onChangeText={setTujuan} />
      <Text style={styles.priceValue}>Estimasi: {formatRupiah(layanan?.harga ?? 0)}</Text>
      <Pressable style={styles.orderButton} onPress={buatPesanan}>
        <Text style={styles.orderButtonText}>Pesan Sekarang</Text>
      </Pressable>
      <Text style={styles.footnote}>*Pemesanan dan harga hanya simulasi praktikum.</Text>
    </View>
  );
}
