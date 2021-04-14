
//1
// let s = String(prompt('Nhập vào một chuỗi:'));


// let arr = s.split("");

// let newString ="";

// let n = arr.length;
// for(let i = n-1; i >=0; i-- ){
//     newString+=String(arr[i]);
// }
// console.log(newString);

//2
// let s = String(prompt(`Nhập một chuỗi bất kì:`));
// let arr = s.toLowerCase().split(" ");
// let upcase = "";
// let n = arr.length;
// for (let i = 0; i < n; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
//     upcase += arr[i] + " ";
// }
// console.log(upcase);

//3

// function isArr(arr) {

//     let arr2 = [];
//     for (const x of arr) {
//         if (arr2.indexOf(x) == -1) {
//             arr2.push(x);
//         }
//     }

//     arr = arr2;
//     return arr;
// }
// let arr = ["on", "two", "three", "one","two"];
// // let arr = [“one”,”two”,”three”,”one”,”one”,”four”,”five”,”four”,”five”five”];
// // let arr = [1, 2, 3, 3, 2, 4, 5, 5, 6, 3];
// console.log(arr);
// console.log(isArr(arr));

//4
// let mindX = [
//     {
//         name : "hieu",
//         age : 20,
//         salary : 500,
//         job: "gg",
//     },
//     {
//         name : "hai",
//         age : 24,
//         salary : 500,
//         job: "student",
//     },
//     {
//         name : "gg",
//         age : 20,
//         salary : 300,
//         job: "student",
//     }
// ]

// let check = true;
// while (check) {

//     let s = String(prompt(`Nhap thao tác cần thực hiện:`));
//     switch (s) {
//         case "C":
//             let name = String(prompt("Nhap tên can them:"));
//             let age = Number(prompt("Nhap tuổi can them:"));
//             let salary = String(prompt("Nhap số mức lương can them:"));
//             let job = String(prompt("Nhap job can them:"));
//             let newPerson = {
//                 name: name,
//                 age: age,
//                 salary: salary,
//                 job: job
//             }
//             mindX.push(newPerson);

//             alert(`Them thanh cong`);
//             break;
//         case "R":
//             console.table(mindX);
//             break;
//         case "U":
//             let u = Number(prompt(`nhap index ten muon update`));
//             let name1 = (prompt("Nhap Name can update:"));
//             let age1 = Number(prompt("Nhap tuổi can update:"));
//             let salary1 = String(prompt("Nhap số điện thoại can update:"));
//             let job1 = (prompt("Nhap job1 can update:"));
//             let newPerson1 = {
//                 name: name1,
//                 age: age1,
//                 salary: salary1,
//                 job: job1
//             }
//             mindX[u] = newPerson1;
//             alert('Đã được update');
//             break;
//         case "D":
//             mindX.splice(prompt("Nhap index can xoa:"), 1);
//             let result = confirm("Do you want to delete?");

//             if (result) {
//                 alert("Xóa thành công");
//             } else {
//                 alert("Hủy việc xóa");
//             }
//             break;

//         case "0":
//             check = false;
//             break;
//         default:
//             alert(`Nhap ki tu khac:`);
//             break;
//     }
// }


//5
//A
let d = Number(prompt(`Nhập ngày:`));
let m = Number(prompt(`Nhập tháng:`));
let y = Number(prompt('Nhập năm:'));

let date = new Date(y, m - 1, d);

if ((date.getFullYear() == y && date.getMonth() + 1 == m && date.getDate() == d)
    || (date.getYear() == y && date.getMonth() + 1 == m && date.getDate() == d)
) {
    console.log(`${d}/${m}/${y} là ngày hợp lệ`);
    // let today = new Date(y, m, d);
    // var mai = today.setDate(today.getDate() + 1);
    // console.log(mai);



} else {
    console.log(`${d}/${m}/${y} là ngày không hợp lệ`);
}








