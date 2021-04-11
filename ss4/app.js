//1

// let x = Number(prompt(`nhập x`));
// let y = Number(prompt(`nhập y`));
// let arr=[];
// let sum = 0;
// if(y<x) {
//     alert(`không hợp lệ`);
// }
// else {
//     for(let i = x; i <= y; i+=2) {
//         arr.push(i);
//         sum +=i;
//     }
//     let avg = sum/arr.length;
//     console.log(arr);
//     console.log(`Trung bình cộng của mảng là: ${avg}`);
// }

//2
// let arr = [];
// let s = String(prompt('Nhập chuỗi cần tính:'));
// let n = (s.split(','));
// for (const x of n) {
//     arr.push(Number(x));
// }
// console.log(arr);
// let tongchan = 0, tongle = 0;
// for (const x of arr) {
//     if (x % 2 == 0) {
//         tongchan += x;
//     } else {
//         tongle += x;
//     }
// }
// console.log(`Tổng phần tử chẵn là: ${tongchan}`);
// console.log(`Tổng phần tử lẻ là: ${tongle}`);

// arr.sort(function(a,b){
//     return a - b;
// });
// console.log(`phần tử min là: ${arr[0]}`);
// console.log(`Phần tử max là: ${arr[arr.length-1]}`);


//3
// let arr = [1, 2, 4, 6, [3, 5], [10, 12]];
// let newArr = arr.reduce(
//     (a,b)=>a.concat(b),[]);
// console.log(newArr);
// //a,
// console.log(newArr.reduce((a,b)=>a+b));
// //b,
// console.log(newArr.map(a=>a+10));  



//4
// let arr = [];
// let s = String(prompt('Nhập chuỗi số nguyên:'));
// let n = (s.split(','));
// for (const x of n) {
//     arr.push(Number(x));
// }
// console.log(arr);
// //b
// let arr2 = [];
// for (const x of arr) {
//     if(arr2.indexOf(x)==-1) {
//         arr2.push(x);
//     }
// }
// console.log(arr2);

//5
// let s = String(prompt(`Nhập một câu bất kì:`));
// let arr = s.toLowerCase().split(" ");
// let upcase = "";
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
//     upcase += arr[i] + " ";
// }
// console.log(upcase);

//6
// let arr = [];
// let s = String(prompt('Nhập chuỗi số nguyên:'));
// let s1 = (s.split(','));
// for (const x of s1) {
//     arr.push(Number(x));
// }
// console.log(arr);

// //b,
// let n = Number(prompt('Nhập n:'));
// //arr.slice():sao chép tham chiếu đối tượng vào mảng mới.
// let newArr = (arr.slice(0,n));
// console.log(newArr);

//7
//a,
// let arr = [];
// let s = String(prompt('Nhập chuỗi số nguyên:'));
// let s1 = (s.split(','));
// for (const x of s1) {
//     arr.push(Number(x));
// }
// console.log(arr);
// //b,
// let n = Number(prompt('Nhập n là số phần tử của mảng con'));
// let result = [];
// for (let i = 0; i < arr.length; i += n) {
//     result.push(arr.slice(i, i + n));
// }
// console.log(result);

//8
// a,
// let arr = [];
// let s = String(prompt('Nhập chuỗi số nguyên:'));
// let s1 = (s.split(','));
// for (const x of s1) {
//     arr.push(Number(x));
// }
// console.log(arr);

// //b
// arr.sort(
//     function(a,b){
//         return a-b;
//     }
// )
// let min = arr[arr.length -1]-arr[0];
// console.log(`${min} là hiệu của ${arr[arr.length -1]} và ${arr[0]}`);

//9
// // a,
// let arr = [];
// let s = String(prompt('Nhập chuỗi số nguyên:'));
//  let s1 = (s.split(','));
// for (const x of s1) {
//     arr.push(Number(x));
// }
// console.log(arr);
// //b
// function mode(array) {
//     if (array.length == 0)
//         return null;
//     let max = [];
//     let obj = {};
//     let most = 0;
//     for (let i = 0; i < array.length; i++) {
//         let el = array[i];
//         if (obj[el]==null) {
//             obj[el] = 1;
//         } else {
//             obj[el]++;
//         }

//         if (obj[el] > most) {
//             most = obj[el];
//             max = [el];
//         } else if (obj[el] === most) {
//             max.push(el);
//         }
//     }

//     return max;
// }
// console.log(mode(arr));

//10
// let s = String(prompt(`Nhập vào một chuỗi bất kì:`));
// let n = s.split("");
// console.log(s);
// console.log(n);
// console.log(n.reverse());
// if(JSON.stringify(n)===JSON.stringify(n.reverse())){
//     console.log(`Correct`);
// } else{
//     console.log(`false`);
// }

