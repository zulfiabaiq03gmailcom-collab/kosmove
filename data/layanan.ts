export type Layanan = {
  id: number;
  nama: string;
  deskripsi: string;
  harga: number;
  ikon: 'cube-outline' | 'bed-outline' | 'car-outline';
};

export const daftarLayanan: Layanan[] = [
  { id: 1, nama: 'Angkut Barang', deskripsi: 'Untuk beberapa barang kos', harga: 35000, ikon: 'cube-outline' },
  { id: 2, nama: 'Pindahan Kos', deskripsi: 'Bantuan pindah antarkos', harga: 75000, ikon: 'bed-outline' },
  { id: 3, nama: 'Pindahan Lengkap', deskripsi: 'Angkut dan bantu menata', harga: 120000, ikon: 'car-outline' },
];

export function formatRupiah(nilai: number): string {
  return 'Rp' + nilai.toLocaleString('id-ID');
}
