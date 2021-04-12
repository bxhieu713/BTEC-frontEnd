//1
// a,
// let arr = [];
// let s = String(prompt('Nhập chuỗi số nguyên:'));
//  let s1 = (s.split(','));
// for (const x of s1) {
//     arr.push(Number(x));
// }
// console.log(arr);
// let  n = arr.length;

// arr.sort(function(a,b){
//     return a - b;
// });
// for(x of arr){
//     if(x > arr[0]){
//         console.log(x);
//         break;
//     }

// }
// //b
// for(let i = arr.length-1; i >= 0; i--){
//     if(arr[i]<arr[arr.length-1]){
//         console.log(arr[i]);
//         break;
//     }
// }
//c
// function isPrime(a){
//     if(a<2){
//         return false;
//     }
//     else if(a==2){
//         return true;
//     }else{
//         for(let i = 2; i <= Math.sqrt(a); i++){
//             if(a%i==0){
//                 return false;
//             }
//         }
//         return true;
//     }
// }

// let result =[];
// for(let i =0; i <= arr.length-1;i++){
//     if(isPrime(arr[i])){
//         result.push(i);
//     }

// }
// if(result.length==0){
//     console.log(`NOT FOUND`);
// }else {
//     console.log(result);
// }

//d
// arr.sort(function(a,b){
//     return a -b;
// })

// if(n%2==0){
//     console.log((arr[n/2]+arr[n/2-1])/2);
// } else{
//     console.log(arr[(n-1)/2]);
// }

//e

// arr.sort(function(a,b){
//     return a -b;
// })
// let newArr = [];
// for(let i = 0; i < n;i++){
//     let pair = [];
//     let sum = arr[i] + arr[n-i-1];
//     if(sum > 5){
//         arr.pop();
//     } else if(sum < 5){
//         arr.shift();
//     } else if(sum == 5) {
//         pair.push(arr.shift());
//         pair.push(arr.pop());
//     }
//     if(pair.length> 0)  newArr.push(pair);

//     n = arr.length;
// }

// if(newArr.length == 0){
//     console.log(`NOT FOUND`);
// }
// else {console.log(newArr);}


//2
// let s = String(prompt('Nhập chuỗi :'));
// let s1 = (s.split(','));
// let  n = s1.length;
// function isReverses(a) {
//     let a1 = a.split("");
//     if (JSON.stringify(a1) === JSON.stringify(a1.reverse())) {
//         return true;
//     } else {
//         return false;
//     }
// }
// let newPush = [];
// for(let i = 0; i < n; i++ ){
//     if(isReverses(s1[i])){
//         newPush.push(i);
//     }
// }
// if(newPush.length ==0){
//     console.log(`NOT FOUND`);
// } else {
//     console.log(newPush);
// }

//3
let row = prompt(`Nhập số hàng của ma trận`);
let col = prompt(`Nhập số cột của ma trận`);
let a = [];
let col_arr = [];

for (let i = 0; i < col; i++) {
    let row_arr = [];
    for (let j = 0; j < row; j++) {
        row_arr.push(Number(prompt("Nhập phần tử: ")));
    }
    a.push(row_arr);
}
console.log(a);

// console.log(a[1][1]);

//b

// for (let i = 0; i < row; i++) {
//     let sum =  0;
//     for(let j = 0; j < col; j++){
//         sum+= a[i][j];
//     }
//     console.log(`Tổng hàng thứ ${i} là: ${sum}`);
// }

//c
// for (let i = 0; i < row; i++) {
//     let sum =  0;
//     for(let j = 0; j < col; j++){
//         sum+= a[j][i];
//     }
//     console.log(`Tổng cột thứ ${i} là: ${sum}`);
// }

//d
// let sum =  0;
// for (let i = 0; i < row; i++) {

//     for(let j = 0; j < col; j++){
//         if(i==j || i +j == col-1){
//             sum+= a[i][j];
//         }
//     }
// }
// console.log(` ${sum}`);

//e
// let max = a[0][0];
// let min = a[0][0];

// for (let i = 0; i < row; i++) {

//     for(let j = 0; j < col; j++){
//         if(a[i][j] > max) {
//             max = a[i][j];
//         }
//         if(a[i][j] < min) {
//             min = a[i][j];
//         }
//     }
// }
// console.log(`Số nhỏ nhất là: ${min}` );
// console.log(`Số lớn nhất là: ${max}` );

//f

let tongduong = 0, tongam = 0;
for (let i = 0; i < row; i++) {

    for (let j = 0; j < col; j++) {
        if (a[i][j] > 0) {
            tongduong += a[i][j];
        }
        if (a[i][j] < 0) {
            tongam += a[i][j];
        }
    }
}
console.log(`Tổng các số dương là: ${tongduong}`);
console.log(`Tổng các số âm là: ${tongam}`);