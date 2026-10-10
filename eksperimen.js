// ==========================================
// BAGIAN 5.1: TEBAK
// ==========================================

// Tebakan: hasilnya "55" karena angka 5 digabung dengan string "5".
console.log(5 + "5");
// Hasil asli: "55" (string)

// Tebakan: hasilnya 6 karena operator - mengubah string angka menjadi number.
console.log("10" - 4);
// Hasil asli: 6 (number)

// Tebakan: hasilnya 20 karena operator * mengubah string angka menjadi number.
console.log("10" * "2");
// Hasil asli: 20 (number)

// Tebakan: hasilnya "string" karena "5" + 5 menghasilkan "55".
console.log(typeof ("5" + 5));
// Hasil asli: "string"

// Tebakan: hasilnya 1 karena 9 dibagi 4 bersisa 1.
console.log(9 % 4);
// Hasil asli: 1

// Tebakan: hasilnya 25 karena 2 + 3 = 5, lalu 5 pangkat 2.
console.log((2 + 3) ** 2);
// Hasil asli: 25

// Tebakan: hasilnya 2.5 karena 10 dibagi 4.
console.log(10 / 4);
// Hasil asli: 2.5

// Tebakan: hasilnya Infinity karena angka positif dibagi nol.
console.log(1 / 0);
// Hasil asli: Infinity

// Tebakan: hasilnya NaN karena "abc" bukan angka yang valid untuk perkalian.
console.log("abc" * 2);
// Hasil asli: NaN

// Tebakan: hasilnya "number" karena NaN termasuk tipe number di JavaScript.
console.log(typeof NaN);
// Hasil asli: "number"

// Tebakan: hasilnya true karena kondisi terakhir 1 === 1 bernilai true.
console.log((5 > 3 && 2 > 4) || 1 === 1);
// Hasil asli: true

// Tebakan: hasilnya true karena !false bernilai true.
console.log(!true || !false);
// Hasil asli: true

// Tebakan: hasilnya true karena "5" == 5 benar dan "5" !== 5 juga benar.
console.log("5" == 5 && "5" !== 5);
// Hasil asli: true

// Tebakan: hasilnya true karena typeof array dan object biasa sama-sama "object".
console.log(typeof [] === typeof {});
// Hasil asli: true

// Tebakan: hasilnya 50 karena elemen indeks 1 adalah 20 dan indeks 2 adalah 30.
console.log([10, 20, 30][1] + [10, 20, 30][2]);
// Hasil asli: 50


// ==========================================
// BAGIAN 5.2: EKSPERIMEN VAR DAN LET
// ==========================================

// Eksperimen 1: var dan let di dalam blok

{
    var variabelVar = "Saya dari var";
    let variabelLet = "Saya dari let";

    console.log("Di dalam blok - var:", variabelVar);
    console.log("Di dalam blok - let:", variabelLet);
}

// Tebakan: variabelVar masih bisa dibaca di luar blok.
console.log("Di luar blok - var:", variabelVar);
// Hasil asli: "Saya dari var"

// Tebakan: variabelLet tidak bisa dibaca di luar blok.
// Baris berikut sengaja dijadikan komentar agar program tetap berjalan.
// Jika diaktifkan, hasilnya ReferenceError: variabelLet is not defined.
// console.log("Di luar blok - let:", variabelLet);


// Eksperimen 2: deklarasi nama variabel yang sama

// Tebakan: var boleh dideklarasikan ulang dalam lingkup yang sama.
var namaVar = "Nilai pertama";
var namaVar = "Nilai kedua";

console.log("Deklarasi ulang var:", namaVar);
// Hasil asli: "Nilai kedua"

// Tebakan: let tidak boleh dideklarasikan ulang dengan nama yang sama
// dalam lingkup yang sama.
// Baris berikut sengaja dijadikan komentar agar program tetap berjalan.
// Jika kedua deklarasi let berikut diaktifkan dalam lingkup yang sama,
// akan muncul SyntaxError: Identifier 'namaLet' has already been declared.

let namaLet = "Nilai pertama";
// let namaLet = "Nilai kedua";

console.log("Deklarasi let:", namaLet);
// Hasil asli: "Nilai pertama"


// ==========================================
// BAGIAN 5.3: JAWABAN DAN PENJELASAN
// ==========================================

/*
1. MENGAPA 5 + "5" DAN "10" - 4 BERBEDA?

   5 + "5" menghasilkan "55" karena operator + dapat menggabungkan
   string dengan angka menjadi string.

   "10" - 4 menghasilkan 6 karena operator - mengubah string "10"
   menjadi angka sebelum melakukan pengurangan.

   Jadi, hasil pertama berupa string, sedangkan hasil kedua number.


2. APA ARTI NaN DAN MENGAPA TIPENYA NUMBER?

   NaN adalah singkatan dari Not a Number. Nilai ini menunjukkan
   hasil operasi numerik yang tidak menghasilkan angka valid.

   Contohnya, "abc" * 2 menghasilkan NaN karena "abc" tidak dapat
   dikonversi menjadi angka yang valid untuk perkalian.

   typeof NaN menghasilkan "number" karena NaN merupakan nilai khusus
   dalam tipe data Number pada JavaScript.


3. URUTAN EVALUASI KONDISI LOGIKA

   Ekspresi:
   5 > 3 && 2 > 4 || 1 === 1

   Langkah 1:
   5 > 3 menghasilkan true.

   Langkah 2:
   2 > 4 menghasilkan false.

   Langkah 3:
   true && false menghasilkan false karena && membutuhkan
   kedua kondisi bernilai true.

   Langkah 4:
   1 === 1 menghasilkan true.

   Langkah 5:
   false || true menghasilkan true karena || cukup membutuhkan
   satu kondisi bernilai true.

   Hasil akhirnya adalah true. Operator && dievaluasi lebih dahulu
   daripada ||.


4. BAGAIMANA MEMBEDAKAN ARRAY DAN OBJECT BIASA?

   typeof [] dan typeof {} sama-sama menghasilkan "object".
   Karena itu, typeof saja tidak cukup untuk membedakannya.

   Gunakan Array.isArray():

   Array.isArray([])  // true
   Array.isArray({})  // false

   Cara ini lebih tepat untuk memeriksa apakah suatu nilai array.


5. STATEMENT DAN EXPRESSION

   Kode:
   let hasil = 5 + 10;
   console.log(hasil * 2);

   Statement pertama:
   let hasil = 5 + 10;
   Ini adalah deklarasi variabel sekaligus inisialisasi.

   Expression 5 + 10:
   Nilainya 15.

   Statement kedua:
   console.log(hasil * 2);
   Ini adalah pemanggilan fungsi untuk mencetak hasil.

   Expression hasil * 2:
   Nilainya 15 * 2 = 30.

   Expression juga terdapat pada argumen console.log, yaitu hasil * 2.
   Nilainya 30.


6. DI MANA eksperimen.js DIJALANKAN?

   Dalam tugas ini, eksperimen.js dijalankan oleh JavaScript engine
   di browser melalui file eksperimen.html yang memanggilnya
   menggunakan tag script.

   Jika dijalankan lewat Node.js, JavaScript diproses oleh runtime
   Node.js dari terminal tanpa harus melalui halaman HTML.

   Browser menyediakan objek seperti window dan document untuk
   interaksi halaman web. Node.js menyediakan API untuk lingkungan
   server dan sistem, bukan DOM browser secara langsung.

   Modul ini menggunakan let dan const karena keduanya memiliki
   block scope dan membantu mencegah deklarasi ulang atau perubahan
   nilai yang tidak disengaja. var memiliki function scope dan dapat
   menimbulkan kebingungan ketika digunakan di dalam blok.


7. HASIL EKSPERIMEN VAR DAN LET

   Kasus pertama:
   variabelVar dideklarasikan menggunakan var di dalam blok.
   Variabel tersebut masih dapat diakses dari luar blok karena
   var tidak memiliki block scope.

   variabelLet dideklarasikan menggunakan let di dalam blok.
   Variabel tersebut hanya dapat diakses di dalam blok.
   Jika dipanggil dari luar, terjadi ReferenceError.

   Kasus kedua:
   namaVar dideklarasikan dua kali menggunakan var.
   Program tidak error dan nilai akhirnya menjadi "Nilai kedua".

   namaLet dideklarasikan menggunakan let.
   Jika deklarasi let dengan nama yang sama dibuat lagi dalam
   lingkup yang sama, JavaScript menghasilkan SyntaxError.


8. CONTOH BUG AKIBAT VAR DALAM PROGRAM BESAR

   Contoh:
   if (true) {
       var diskon = 10000;
   }

   console.log(diskon);

   Variabel diskon tetap dapat diakses di luar blok if.
   Dalam program besar, hal ini bisa menyebabkan nama variabel
   yang seharusnya hanya digunakan pada satu bagian program
   terbaca atau tertimpa oleh bagian lain.

   Contoh lainnya adalah mendeklarasikan var dengan nama yang sama
   dua kali tanpa sengaja. Nilai variabel dapat tertimpa dan
   menyebabkan perhitungan diskon atau total transaksi menjadi salah.

   Menggunakan let atau const membantu membatasi lingkup variabel
   dan mengurangi risiko kesalahan tersebut.
*/