
let arr = ['Apple', 'Banana', 'Orange', 'Strawberry', 'Mango'];
let check = true;
while (check) {
    let s = String(prompt(`Nhap thao tac:`));
    switch (s) {
        case "C":
            arr.push(prompt("Nhap tu can them:"));
            alert(`Them thanh cong`);
            break;
        case "R":
            console.table(arr);
            break;
        case "U":
            let u = Number(prompt(`nhap index từ muon update`));
            arr[u] = prompt('Tu update la: ')
            alert('Tu da duoc update');
            break;
        case "D":
            arr.splice(prompt("Nhap index can xoa:"), 1);
            let result = confirm("Do you want to delete?");
            if (result) {
                alert("Xóa thành công");
            } else {
                alert("Đã hủy thao tác xóa");
            }
            break;
        case "S":
            let arr2 = [];
            let s1 = String(prompt(`Nhap chuoi can search:`));
            for (i of arr) {
                if (i.includes(s1)) {
                    arr2.push(i);
                }
            }
            console.table(arr2);
            break;
        case "0":
            check = false;
            break;
        default:
            alert(`Vui lòng nhap ki tu khac:`);
            break;

    }
}
