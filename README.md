# Evaluasi Pekan 5 — JavaScript dan Git

## Deskripsi Proyek

Proyek ini merupakan tugas evaluasi untuk mempelajari JavaScript dasar dan penggunaan Git. Proyek berisi latihan operator, tipe data, perhitungan kasir, perbaikan kesalahan kode, serta eksperimen tentang scope dan deklarasi variabel.

## Daftar File

- `index.html` — halaman utama proyek.
- `script.js` — eksperimen dan latihan JavaScript utama.
- `perbaikan.html` — halaman untuk menjalankan kode perbaikan.
- `perbaikan.js` — kode JavaScript yang telah diperbaiki.
- `eksperimen.html` — halaman untuk menjalankan eksperimen JavaScript.
- `eksperimen.js` — eksperimen operator, tipe data, `var`, dan `let`.
- `.gitignore` — daftar file atau folder yang tidak perlu dilacak Git.
- `README.md` — dokumentasi proyek.

## Cara Menjalankan

1. Clone repository GitHub ke komputer atau buka folder proyek yang sudah tersedia.
2. Buka folder proyek menggunakan Visual Studio Code.
3. Buka `index.html` di browser.
4. Tekan `F12`, lalu buka tab **Console** untuk melihat hasil JavaScript.
5. Untuk menguji file lain, buka `perbaikan.html` atau `eksperimen.html`.

## Teknologi yang Digunakan

- HTML5
- JavaScript
- Git
- GitHub

## Penulis

Muhammad Arief Syam

## Riwayat Git

Hasil perintah `git log --oneline --graph`:

```text
[TEMPEL HASIL ASLI PERINTAH GIT LOG DI SINI]
```

## Git Blame pada index.html

Perintah yang digunakan:

```bash
git blame -L '/<title>/,+1' index.html
```

Hasil perintah:

```text
[TEMPEL HASIL ASLI GIT BLAME DI SINI]
```

Baris `<title>` terakhir diubah oleh **[nama atau identitas penulis pada hasil git blame]**, pada commit **[hash commit]**. Informasi tersebut diambil dari hasil `git blame`, bukan perkiraan.

## Jawaban Pertanyaan

### 1. Apa perbedaan git add dan git commit?

`git add` digunakan untuk memilih perubahan yang akan dimasukkan ke dalam commit. Sementara itu, `git commit` digunakan untuk menyimpan perubahan yang sudah dipilih ke dalam riwayat Git dengan sebuah pesan.

### 2. Mengapa konflik terjadi pada Bagian 6.1 dan bagaimana cara menyelesaikannya?

Konflik terjadi karena dua branch mengubah baris yang sama pada `index.html` dengan isi yang berbeda. Git tidak dapat menentukan perubahan mana yang harus dipertahankan secara otomatis. Saya menyelesaikannya dengan membuka file yang berkonflik, memilih judul yang sesuai, menghapus penanda konflik, lalu menjalankan `git add` dan membuat commit penyelesaian konflik. Setelah itu, hasilnya digabungkan ke branch `main`.

### 3. Apa perbedaan fork dan clone? Apa gunanya Pull Request?

**Fork** membuat salinan repository milik akun lain ke akun GitHub saya sendiri. **Clone** menyalin repository ke komputer lokal agar bisa dikerjakan menggunakan editor dan Git.

**Pull Request (PR)** digunakan untuk mengusulkan perubahan dari satu branch ke branch lain atau dari fork ke repository asal. PR memudahkan pemeriksaan perubahan, diskusi, dan persetujuan sebelum perubahan digabungkan.
