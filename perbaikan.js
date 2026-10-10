/* Program hitung transaksi Kedai Senja */

// FIX 1: Komentar pembuka ditutup agar kode JavaScript bisa dijalankan.
const namaKedai = "Kedai Senja";
const HARGA_KOPI = 18000;
const HARGA_ROTI = 15000;
const TARIF_PAJAK = 0.11;

let jumlahKopi = 3;

// FIX 2: Gunakan number, bukan string, agar perhitungan jumlah benar.
let jumlahRoti = 2;

let transaksiSelesai = 0;

// Jumlah seluruh item. Seharusnya: 5
// FIX 3: Jumlahkan dua angka, bukan angka dan string.
let jumlahItem = jumlahKopi + jumlahRoti;

// Subtotal. Seharusnya: 84000
// FIX 4: Nama variabel harus sesuai huruf besar-kecilnya.
// FIX 5: Kalikan harga roti dengan jumlahRoti.
let subtotal =
    HARGA_KOPI * jumlahKopi + HARGA_ROTI * jumlahRoti;

// Pajak 11% dari subtotal setelah dipotong diskon 10000.
// Seharusnya: 8140
// FIX 6: Hitung diskon terlebih dahulu, lalu kalikan hasilnya dengan pajak.
let pajak = (subtotal - 10000) * TARIF_PAJAK;

// Total bayar. Seharusnya: 82140
// FIX 7: Akhiri pernyataan dengan titik koma.
let totalBayar = subtotal - 10000 + pajak;

// Pelanggan membayar 100000. Cukup? Seharusnya: true
let uangBayar = 100000;

// FIX 8: Gunakan >= untuk membandingkan uang bayar dengan total.
let uangCukup = uangBayar >= totalBayar;

// Kembalian. Seharusnya: 17860
// FIX 9: Kembalian adalah uang bayar dikurangi total bayar.
let kembalian = uangBayar - totalBayar;

// Jumlah item genap? Seharusnya: false
// FIX 10: Untuk mengecek genap, sisa bagi 2 harus sama dengan 0.
let itemGenap = jumlahItem % 2 === 0;

// Transaksi selesai bertambah 1. Seharusnya: 1
// FIX 11: Gunakan ++ agar nilai variabel bertambah satu.
transaksiSelesai++;

// Kedai berganti nama. Seharusnya "Kedai Senja Baru"
// FIX 12: Gunakan let untuk namaKedai agar bisa diubah.
// Deklarasi awal juga harus menggunakan let, bukan const.
let namaKedaiBaru = "Kedai Senja Baru";

// Gunakan namaKedaiBaru pada hasil akhir.
// Tarif pajak tetap 0.11 dan tidak diubah.

console.log(
    namaKedaiBaru,
    jumlahItem,
    subtotal,
    pajak,
    totalBayar,
    uangCukup,
    kembalian,
    itemGenap,
    transaksiSelesai
);

// ==========================================
// CATATAN BUG
// ==========================================

/*
1. Komentar pembuka tidak ditutup.
   Jenis: Menghentikan program dengan error sintaks.
   Penyebab: Komentar blok dimulai dengan /* tetapi tidak ditutup
   dengan  sebelum kode JavaScript.

2. jumlahRoti menggunakan string "2".
   Jenis: Tidak error, tetapi tipe data tidak sesuai.
   Penyebab: Angka disimpan sebagai teks. Operator + dapat
   menggabungkan string, bukan menjumlahkan angka.

3. jumlahItem menggunakan jumlah angka dan string.
   Jenis: Tidak error, tetapi hasil salah.
   Penyebab: Operator + menggabungkan 3 dan "2" menjadi "32".
   Setelah jumlahRoti menjadi number, hasilnya 5.

4. jumlahkopi menggunakan huruf kecil.
   Jenis: Menghentikan program dengan ReferenceError.
   Penyebab: JavaScript membedakan huruf besar dan kecil.
   Variabel yang benar adalah jumlahKopi.

5. Perhitungan subtotal tidak lengkap atau salah.
   Jenis: Menghentikan program karena kesalahan nama variabel
   dan dapat menghasilkan nilai salah jika rumus tidak tepat.
   Penyebab: Nama jumlahKopi salah dan perhitungan harus
   mencakup harga kopi serta harga roti dikalikan jumlahnya.

6. Rumus pajak salah.
   Jenis: Tidak error, tetapi hasil salah.
   Penyebab: subtotal - 10000 * TARIF_PAJAK membuat perkalian
   dikerjakan lebih dahulu. Rumus yang benar:
   (subtotal - 10000) * TARIF_PAJAK.

7. Pernyataan totalBayar tidak memiliki titik koma.
   Jenis: Tidak selalu error.
   Penyebab: JavaScript dapat menambahkan titik koma otomatis,
   tetapi titik koma membuat akhir pernyataan lebih jelas.

8. uangCukup menggunakan operator penugasan =.
   Jenis: Tidak error, tetapi hasil salah.
   Penyebab: Operator = memberikan nilai, bukan membandingkan.
   Gunakan >= untuk mengecek apakah uang bayar mencukupi.

9. Rumus kembalian terbalik.
   Jenis: Tidak error, tetapi hasil salah.
   Penyebab: Total bayar dikurangi uang bayar, padahal seharusnya
   uang bayar dikurangi total bayar.

10. Pemeriksaan itemGenap menggunakan === 1.
    Jenis: Tidak error, tetapi hasil salah.
    Penyebab: Bilangan genap memiliki sisa bagi 2 sebesar 0,
    bukan 1.

11. transaksiSelesai + 1 tidak menyimpan perubahan.
    Jenis: Tidak error, tetapi hasil salah.
    Penyebab: Hasil penjumlahan tidak disimpan ke variabel.
    Gunakan transaksiSelesai++.

12. Nama kedai dideklarasikan ulang dan konstanta pajak diubah.
    Jenis: Deklarasi ulang const/let pada nama yang sama
    dapat menyebabkan SyntaxError; mengubah const menyebabkan
    TypeError.
    Penyebab: Nama variabel yang sama tidak boleh dideklarasikan
    ulang dalam lingkup yang sama menggunakan let atau const.
    Konstanta TARIF_PAJAK tidak boleh diberi nilai baru.
    Perbaikannya adalah menggunakan variabel namaKedai yang
    dapat diubah sejak awal, kemudian mengganti nilainya.
*/
