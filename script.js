console.log("Selamat datang di Kedai Senja!");
console.log("Proyek Evaluasi Pekan 5 berhasil dijalankan.");

/*
Nama: Muhammad Arief Syam
Tanggal: 10 Oktober 2026
Tujuan: Membuat data kedai, daftar menu, dan transaksi
untuk latihan JavaScript tentang object, array, dan tipe data.
*/

// =========================================
// BAGIAN 2: DATA KEDAI
// =========================================

// 1. Object kedai
const kedai = {
    nama: "Kedai Arief",
    pemilik: "Arief",
    kota: "Yogyakarta",
    tahunBerdiri: 2024,
    sedangBuka: true,
    nomorWhatsApp: "081234567890",
    website: null,
    jamOperasional: {
        buka: "08:00",
        tutup: "21:00"
    }
};

// 2. Array menu
const menu = [
    {
        nama: "Nasi Goreng",
        kategori: "Makanan",
        harga: 15000,
        stok: 10,
        tersedia: true
    },
    {
        nama: "Mie Goreng",
        kategori: "Makanan",
        harga: 12000,
        stok: 8,
        tersedia: true
    },
    {
        nama: "Ayam Geprek",
        kategori: "Makanan",
        harga: 18000,
        stok: 5,
        tersedia: true
    },
    {
        nama: "Es Teh",
        kategori: "Minuman",
        harga: 5000,
        stok: 20,
        tersedia: true
    },
    {
        nama: "Jus Jeruk",
        kategori: "Minuman",
        harga: 8000,
        stok: 0,
        tersedia: false
    },
    {
        nama: "Kopi Susu",
        kategori: "Minuman",
        harga: 10000,
        stok: 12,
        tersedia: true
    }
];

// 3. Array transaksi
const transaksi = [
    {
        kode: "TRX-001",
        pelanggan: "Budi",
        sudahMember: true,
        uangBayar: 40000,
        catatan: "Tidak pakai sambal",
        pesanan: [
            { indeksMenu: 0, jumlah: 1 },
            { indeksMenu: 3, jumlah: 2 }
        ]
    },
    {
        kode: "TRX-002",
        pelanggan: "Siti",
        sudahMember: false,
        uangBayar: 10000,
        catatan: null,
        pesanan: [
            { indeksMenu: 2, jumlah: 1 },
            { indeksMenu: 3, jumlah: 1 }
        ]
    },
    {
        kode: "TRX-003",
        pelanggan: "Andi",
        sudahMember: true,
        uangBayar: 30000,
        catatan: null,
        pesanan: [
            { indeksMenu: 1, jumlah: 1 },
            { indeksMenu: 5, jumlah: 1 }
        ]
    }
];

// 4. Mencetak data ke console

// Nama kedai menggunakan notasi titik
console.log("Nama kedai:", kedai.nama);

// Kota menggunakan notasi kurung siku
console.log("Kota:", kedai["kota"]);

// Jam tutup kedai
console.log("Jam tutup:", kedai.jamOperasional.tutup);

// Menu pertama dan terakhir menggunakan indeks
console.log("Menu pertama:", menu[0]);
console.log("Menu terakhir:", menu[menu.length - 1]);

// Nama pelanggan pada transaksi kedua
console.log("Pelanggan transaksi kedua:", transaksi[1].pelanggan);

// Nama menu pada item kedua transaksi ketiga
const indeksPesananKedua = transaksi[2].pesanan[1].indeksMenu;
console.log(
    "Menu pesanan kedua transaksi ketiga:",
    menu[indeksPesananKedua].nama
);

// Hasil typeof
console.log("typeof tahunBerdiri:", typeof kedai.tahunBerdiri);
console.log("typeof sedangBuka:", typeof kedai.sedangBuka);
console.log("typeof website:", typeof kedai.website);
console.log("typeof jamOperasional:", typeof kedai.jamOperasional);
console.log("typeof menu:", typeof menu);
console.log("typeof catatan transaksi pertama:", typeof transaksi[0].catatan);

// 5. Variabel catatanKasir tanpa nilai
let catatanKasir;
console.log("Catatan kasir:", catatanKasir);

// ==========================================
// JAWABAN PERTANYAAN
// ==========================================

/*
1. Mengapa nomorWhatsApp disimpan sebagai string, bukan number?
   Karena nomor WhatsApp merupakan teks identitas, bukan angka
   untuk perhitungan. String dapat mempertahankan angka nol
   di awal nomor.

2. Mengapa website diisi null, sedangkan catatanKasir tanpa nilai?
   Website diisi null karena belum ada website dan nilainya
   sengaja dinyatakan kosong. CatatanKasir dibiarkan tanpa
   nilai sehingga JavaScript memberikan nilai undefined.

3. Jika menu berisi 6 item, apa hasil menu[6]? Kenapa?
   Hasilnya undefined karena indeks array dimulai dari 0.
   Enam item memiliki indeks 0 sampai 5, sehingga indeks 6
   tidak memiliki data.

4. Apa hasil typeof menu? Kenapa?
   Hasilnya "object" karena dalam JavaScript, array termasuk
   jenis object. Array memiliki perilaku khusus untuk menyimpan
   sekumpulan data berdasarkan indeks.

5. Mengapa menu dibuat sebagai array, sedangkan kedai object?
   Menu dibuat sebagai array karena berisi banyak item menu
   yang dapat diakses menggunakan indeks. Kedai dibuat sebagai
   object karena menyimpan informasi tentang satu kedai dalam
   bentuk pasangan properti dan nilai.
*/

// ==========================================
// BAGIAN 3: PERHITUNGAN TRANSAKSI
// ==========================================

// Mengubah jumlah Es Teh transaksi pertama menjadi 4.
// Total item menjadi 5 agar kondisi gratis antar bisa diuji.
transaksi[0].pesanan[1].jumlah = 4;

// Fungsi untuk menghitung satu transaksi
function hitungTransaksi(dataTransaksi) {
    // Menghitung subtotal berdasarkan harga menu dan jumlah pesanan
    let subtotal = 0;
    let jumlahSeluruhItem = 0;

    for (const pesanan of dataTransaksi.pesanan) {
        const itemMenu = menu[pesanan.indeksMenu];

        subtotal += itemMenu.harga * pesanan.jumlah;
        jumlahSeluruhItem += pesanan.jumlah;
    }

    // Diskon 10% khusus member
    const potongan = dataTransaksi.sudahMember
        ? subtotal * 0.10
        : 0;

    // Pajak 11% dari subtotal setelah diskon
    const dasarPajak = subtotal - potongan;
    const pajak = dasarPajak * 0.11;

    // Total pembayaran dan kembalian
    const totalBayar = dasarPajak + pajak;
    const kembalian = dataTransaksi.uangBayar - totalBayar;

    // Pemeriksaan status transaksi
    const uangCukup = dataTransaksi.uangBayar >= totalBayar;

    const gratisAntar =
        subtotal >= 100000 || jumlahSeluruhItem >= 5;

    const semuaMenuTersedia = dataTransaksi.pesanan.every(
        pesanan => menu[pesanan.indeksMenu].tersedia === true
    );

    return {
        kode: dataTransaksi.kode,
        pelanggan: dataTransaksi.pelanggan,
        subtotal,
        potongan,
        pajak,
        totalBayar,
        kembalian,
        uangCukup,
        gratisAntar,
        semuaMenuTersedia,
        jumlahSeluruhItem
    };
}

// Menghitung ketiga transaksi dengan nama variabel yang jelas
const hasilTransaksiPertama = hitungTransaksi(transaksi[0]);
const hasilTransaksiKedua = hitungTransaksi(transaksi[1]);
const hasilTransaksiKetiga = hitungTransaksi(transaksi[2]);

// Menyimpan hasil setiap perhitungan ke variabel terpisah
const subtotalTransaksiPertama = hasilTransaksiPertama.subtotal;
const potonganTransaksiPertama = hasilTransaksiPertama.potongan;
const pajakTransaksiPertama = hasilTransaksiPertama.pajak;
const totalBayarTransaksiPertama = hasilTransaksiPertama.totalBayar;
const kembalianTransaksiPertama = hasilTransaksiPertama.kembalian;
const uangCukupTransaksiPertama = hasilTransaksiPertama.uangCukup;
const gratisAntarTransaksiPertama = hasilTransaksiPertama.gratisAntar;
const semuaMenuTersediaTransaksiPertama =
    hasilTransaksiPertama.semuaMenuTersedia;

const subtotalTransaksiKedua = hasilTransaksiKedua.subtotal;
const potonganTransaksiKedua = hasilTransaksiKedua.potongan;
const pajakTransaksiKedua = hasilTransaksiKedua.pajak;
const totalBayarTransaksiKedua = hasilTransaksiKedua.totalBayar;
const kembalianTransaksiKedua = hasilTransaksiKedua.kembalian;
const uangCukupTransaksiKedua = hasilTransaksiKedua.uangCukup;
const gratisAntarTransaksiKedua = hasilTransaksiKedua.gratisAntar;
const semuaMenuTersediaTransaksiKedua =
    hasilTransaksiKedua.semuaMenuTersedia;

const subtotalTransaksiKetiga = hasilTransaksiKetiga.subtotal;
const potonganTransaksiKetiga = hasilTransaksiKetiga.potongan;
const pajakTransaksiKetiga = hasilTransaksiKetiga.pajak;
const totalBayarTransaksiKetiga = hasilTransaksiKetiga.totalBayar;
const kembalianTransaksiKetiga = hasilTransaksiKetiga.kembalian;
const uangCukupTransaksiKetiga = hasilTransaksiKetiga.uangCukup;
const gratisAntarTransaksiKetiga = hasilTransaksiKetiga.gratisAntar;
const semuaMenuTersediaTransaksiKetiga =
    hasilTransaksiKetiga.semuaMenuTersedia;

// Menghitung sisa kembalian menggunakan operator modulus (%)
// Hanya dilakukan jika kembalian tidak negatif.
if (kembalianTransaksiPertama >= 0) {
    const sisa50000TransaksiPertama = kembalianTransaksiPertama % 50000;
    const sisa20000TransaksiPertama = kembalianTransaksiPertama % 20000;

    console.log(`
Sisa kembalian transaksi pertama:
Sisa setelah % 50000 = Rp${sisa50000TransaksiPertama}
Sisa setelah % 20000 = Rp${sisa20000TransaksiPertama}
`);
}

if (kembalianTransaksiKedua >= 0) {
    const sisa50000TransaksiKedua = kembalianTransaksiKedua % 50000;
    const sisa20000TransaksiKedua = kembalianTransaksiKedua % 20000;

    console.log(`
Sisa kembalian transaksi kedua:
Sisa setelah % 50000 = Rp${sisa50000TransaksiKedua}
Sisa setelah % 20000 = Rp${sisa20000TransaksiKedua}
`);
}

if (kembalianTransaksiKetiga >= 0) {
    const sisa50000TransaksiKetiga = kembalianTransaksiKetiga % 50000;
    const sisa20000TransaksiKetiga = kembalianTransaksiKetiga % 20000;

    console.log(`
Sisa kembalian transaksi ketiga:
Sisa setelah % 50000 = Rp${sisa50000TransaksiKetiga}
Sisa setelah % 20000 = Rp${sisa20000TransaksiKetiga}
`);
}

// ==========================================
// LAPORAN HARIAN
// ==========================================

let pendapatanHarian = 0;
let jumlahTransaksi = 0;

for (const hasil of [
    hasilTransaksiPertama,
    hasilTransaksiKedua,
    hasilTransaksiKetiga
]) {
    pendapatanHarian += hasil.totalBayar;
    jumlahTransaksi++;
}

const rataRataPendapatan = pendapatanHarian / jumlahTransaksi;

const daftarTotalBayar = [
    hasilTransaksiPertama.totalBayar,
    hasilTransaksiKedua.totalBayar,
    hasilTransaksiKetiga.totalBayar
];

const selisihTerbesar =
    Math.max(...daftarTotalBayar) - Math.min(...daftarTotalBayar);

const persentaseTransaksiPertama =
    (totalBayarTransaksiPertama / pendapatanHarian) * 100;

// Menggunakan harga menu[0] sesuai instruksi soal.
// Pada data Bagian 2, menu[0] adalah Nasi Goreng.
const hargaKopiTigaBulan = menu[0].harga * (1.05 ** 3);

// ==========================================
// CETAK RINGKASAN TRANSAKSI
// ==========================================

function formatRupiah(angka) {
    return angka.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 2
    });
}

function cetakRingkasan(hasil) {
    console.log(`
========================================
TRANSAKSI ${hasil.kode}
========================================
Pelanggan          : ${hasil.pelanggan}
Subtotal           : ${formatRupiah(hasil.subtotal)}
Potongan member    : ${formatRupiah(hasil.potongan)}
Pajak 11%          : ${formatRupiah(hasil.pajak)}
Total bayar        : ${formatRupiah(hasil.totalBayar)}
Uang dibayarkan    : ${formatRupiah(transaksi.find(
        item => item.kode === hasil.kode
    ).uangBayar)}
Kembalian          : ${formatRupiah(hasil.kembalian)}
Uang cukup         : ${hasil.uangCukup}
Gratis antar       : ${hasil.gratisAntar}
Semua menu tersedia: ${hasil.semuaMenuTersedia}
Status pembayaran  : ${
    hasil.uangCukup ? "LUNAS" : "UANG KURANG"
}
`);
}

cetakRingkasan(hasilTransaksiPertama);
cetakRingkasan(hasilTransaksiKedua);
cetakRingkasan(hasilTransaksiKetiga);

// ==========================================
// LAPORAN HARIAN KEDAI SENJA
// ==========================================

console.log(`
========================================
LAPORAN HARIAN KEDAI SENJA
Nama kedai         : ${kedai.nama}
Kota               : ${kedai.kota}
Jumlah transaksi   : ${jumlahTransaksi}
Pendapatan harian  : ${formatRupiah(pendapatanHarian)}
Rata-rata transaksi: ${formatRupiah(rataRataPendapatan)}
Selisih terbesar   : ${formatRupiah(selisihTerbesar)}
Porsi transaksi 1  : ${persentaseTransaksiPertama.toFixed(2)}%
Harga setelah 3 bln: ${formatRupiah(hargaKopiTigaBulan)}
========================================
`);

// ==========================================
// JAWABAN PERTANYAAN
// ==========================================

/*
1. PERHITUNGAN MANUAL TRANSAKSI PERTAMA

Pesanan:
- Nasi Goreng: 1 x Rp15.000 = Rp15.000
- Es Teh: 4 x Rp5.000 = Rp20.000

Subtotal = Rp15.000 + Rp20.000 = Rp35.000
Potongan member = 10% x Rp35.000 = Rp3.500
Subtotal setelah potongan = Rp35.000 - Rp3.500 = Rp31.500
Pajak = 11% x Rp31.500 = Rp3.465
Total bayar = Rp31.500 + Rp3.465 = Rp34.965
Uang bayar = Rp40.000
Kembalian = Rp40.000 - Rp34.965 = Rp5.035

Hasil manual sama dengan hasil program.

2. PERBANDINGAN || DAN && PADA GRATIS ANTAR

Transaksi pertama:
- Subtotal Rp35.000, jadi subtotal >= 100000 bernilai false.
- Jumlah item 5, jadi jumlahSeluruhItem >= 5 bernilai true.

Dengan ||:
false || true = true
Hasil gratisAntar adalah true.

Jika || diganti &&:
false && true = false
Hasil gratisAntar menjadi false.

Operator || cukup membutuhkan satu kondisi true.
Operator && membutuhkan kedua kondisi true.

3. PERHITUNGAN YANG HASILNYA BERUBAH JIKA KURUNG DIHAPUS

Contoh pajak transaksi pertama:

Dengan kurung:
(subtotal - potongan) * 0.11
= (35000 - 3500) * 0.11
= 31500 * 0.11
= 3465

Tanpa kurung:
subtotal - potongan * 0.11
= 35000 - (3500 * 0.11)
= 35000 - 385
= 34615

Hasilnya berbeda karena perkalian dikerjakan lebih dahulu
daripada pengurangan jika tidak ada tanda kurung.

4. CONTOH VARIABEL CONST DAN LET

Contoh const:
- const kedai: object kedai tidak perlu ditugaskan ulang.
- const menu: array menu tidak perlu ditugaskan ulang ke array lain.
- const totalBayarTransaksiPertama: nilai total bayar disimpan
  sebagai hasil perhitungan yang tidak perlu ditugaskan ulang.

Catatan: const mencegah penugasan ulang variabel, bukan
mengunci seluruh isi object atau array.

Contoh let:
- let subtotal: nilainya bertambah selama menghitung pesanan.
- let pendapatanHarian: nilainya bertambah memakai +=.
- let jumlahTransaksi: nilainya bertambah memakai ++.

5. MENGAPA MENGGUNAKAN **, BUKAN * 3?

Kenaikan 5% setiap bulan berarti harga bulan sebelumnya
dikalikan 1.05 berulang kali selama tiga bulan.

1.05 ** 3 = 1.157625
Artinya kenaikan dihitung secara majemuk.

Sementara itu:
1.05 * 3 = 3.15

Mengalikan dengan 3 bukan menghitung kenaikan majemuk.
Rumus yang benar adalah harga awal * (1.05 ** 3).

6. APAKAH HASIL PERHITUNGAN BERUBAH OTOMATIS?

Tidak. Nilai hasil perhitungan yang sudah disimpan dalam
variabel tidak otomatis dihitung ulang ketika harga menu berubah.

Buktinya:

const hargaAwal = menu[0].harga;
const totalAwal = hitungTransaksi(transaksi[0]).totalBayar;

menu[0].harga = hargaAwal + 1000;

// totalAwal tetap menyimpan hasil perhitungan sebelumnya.
console.log("Total lama:", totalAwal);

// Perhitungan baru membaca harga menu yang sudah diubah.
const totalBaru = hitungTransaksi(transaksi[0]).totalBayar;
console.log("Total baru:", totalBaru);

// Mengembalikan harga agar data awal tidak berubah.
menu[0].harga = hargaAwal;

Total baru berbeda karena fungsi hitungTransaksi dipanggil lagi
setelah harga menu diubah. Variabel totalAwal tidak berubah
karena nilainya sudah disimpan sebelumnya.
*/