export type Layanan = {
  id: number;
  nama: string;
  deskripsi: string;
  harga: number;
  ikon: 'cube-outline' | 'bed-outline' | 'car-outline';
};

// Array of Objects untuk menyimpan layanan KosMove
export const daftarLayanan: Layanan[] = [
  {
    id: 1,
    nama: 'Angkut Barang',
    deskripsi: 'Jasa angkut barang kos dalam jumlah kecil',
    harga: 35000,
    ikon: 'cube-outline',
  },
  {
    id: 2,
    nama: 'Pindahan Kos',
    deskripsi: 'Layanan pindahan barang dari satu kos ke kos lain',
    harga: 75000,
    ikon: 'bed-outline',
  },
  {
    id: 3,
    nama: 'Pindahan Lengkap',
    deskripsi: 'Jasa angkut dan bantuan menata barang kos',
    harga: 120000,
    ikon: 'car-outline',
  },
  {
    id: 4,
    nama: 'Pindahan Barang Elektronik',
    deskripsi: 'Jasa angkut TV, kulkas mini, laptop, dan komputer',
    harga: 50000,
    ikon: 'cube-outline',
  },
  {
    id: 5,
    nama: 'Pindahan Kos Ekspres',
    deskripsi: 'Layanan pindahan cepat untuk mahasiswa',
    harga: 95000,
    ikon: 'car-outline',
  },
];

// Custom function untuk format harga
export function formatRupiah(nilai: number): string {
  return 'Rp' + nilai.toLocaleString('id-ID');
}