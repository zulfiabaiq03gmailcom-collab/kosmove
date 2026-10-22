import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { daftarLayanan, formatRupiah } from '../../data/layanan';
import { styles } from '../../styles';

export default function DetailLayananScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const layanan = daftarLayanan.find((item) => item.id === Number(id));

  return (
    <View style={[styles.container, { padding: 20, justifyContent: 'center' }]}>
      <Stack.Screen options={{ title: layanan ? layanan.nama : 'Layanan tidak ditemukan' }} />
      {layanan ? (
        <>
          <Text style={styles.sectionTitle}>{layanan.nama}</Text>
          <Text style={{ color: '#64748B', marginTop: 10, lineHeight: 22 }}>{layanan.deskripsi}</Text>
          <Text style={[styles.priceValue, { marginTop: 18 }]}>{formatRupiah(layanan.harga)}</Text>
          <Text style={{ color: '#64748B', marginTop: 8 }}>ID layanan: {id}</Text>
          <Pressable style={[styles.orderButton, { marginTop: 24 }]} onPress={() => router.push('/pesanan')}>
            <Text style={styles.orderButtonText}>Pesan Layanan</Text>
          </Pressable>
        </>
      ) : (
        <Text>Layanan tidak ditemukan. Silakan kembali ke beranda.</Text>
      )}
      <Pressable
        style={[styles.orderButton, { marginTop: 12, backgroundColor: '#142238' }]}
        onPress={() => {
          if (router.canGoBack()) router.back();
          else router.replace('/');
        }}
      >
        <Text style={styles.orderButtonText}>Kembali</Text>
      </Pressable>
    </View>
  );
}
