/**
Even Pairs Sum
--------------
Implementasikan function `evenPairsSum` yang akan menjumlahkan pasangan-pasangan angka genap yang
ada di dalam `str`.
Contoh
- input: '34102180'
  pasangan: 34, 10, 21, 80
  output: 124
  Karena ada pasangan genap (34, 10, 80) maka akan dijumlahkan
- input: '31913791'
  pasangan: 31, 91, 37, 91
  output: 0
  Karena tidak ada pasangan genap
- input: '2130113'
  pasangan: 21, 30, 11, 32
  output: 62
  Karena ada pasangan genap (30, 32) maka akan dijumlahkan
NOTE: Jika angka terakhir tidak memiliki pasangan, maka pasangkan dengan angka pertama seperti
      pada contoh terakhir
RULES:
 - WAJIB MENGGUNAKAN algoritma/pseudocode, tidak menyertakan algoritma/pseudocode maka codingan dianggap tidak valid
*/

function evenPairsSum(str) {
    //1. cek apakah panjang str ganjil, jika iya maka append angka str dengan str index 0
    if (str.length % 2 !== 0) {
        str += str[0]
    }
    //2. buat variabel num untuk menampung hasil penjumlahan tiap pasangan genap
    var num = 0;
    //3. lakukan perulangan sebanyak panjang str untuk menambahkan pasangan genap ke variabel num. Karena soal memasangkan bilangan maka increment i dengan 2 tiap perulangan
    for (var i = 0; i < str.length; i = i + 2) {
        //4. lakukan pengecekan apakah suatu pasangan bilangan genap atau bukan, bila genap tambahkan pasangan genap ke variabel num
        if (Number(str[i] + str[i + 1]) % 2 === 0) {
            //5. jumlahkan num dengan bilangan (str index i append str index ke i+1)
            num += Number(str[i] + str[i + 1]);
        }
    }
    //6. setelah perulangan selesai kembalikan nilai num.
    return num;
}

console.log(evenPairsSum('2044101211')); // 86
console.log(evenPairsSum('33791363')); // 0
console.log(evenPairsSum('23426766201')); // 140
console.log(evenPairsSum('2478201')); // 134