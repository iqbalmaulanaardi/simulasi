/*
Count solo
===========
Diberikan sebuah function countSolo, dimana function ini akan menerima parameter sebagai array
dan akan mereturn total jumlah dari angka angka yang TIDAK memiliki pasangan.
Example:
input: [ 5, 5, 6, 6, 3, 1, 2, 7, 7 ]
proses: 3 + 1 + 2
result: 6
RULES:
 - TIDAK BOLEH MENGGUNAKAN built in function .map, .filter, .reduce!
 - TIDAK BOLEH MENGGUNAKAN built in function .indexOf dan .include!
*/

function countSolo(numbers) {
    var obj = {}
    var keys = Object.keys(obj);
    var values = Object.values(obj);
    var output = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (obj[numbers[i]] === undefined) {
            obj[numbers[i]] = 1
        } else {
            obj[numbers[i]] += 1
        }
    }
    for (var j = 0; j < keys.length; j++) {
        if (values[j] === 1) {
            output += Number(keys[j]);
        }
    }
    return output;
}

console.log(countSolo([5, 5, 6, 6, 3, 1, 2, 7, 7])) // 6
console.log(countSolo([3, 6, 3, 6, 1, 1, 2, 1])) // 2
console.log(countSolo([3, 3, 3, 3, 4, 5, 8, 10, 11])) // 38