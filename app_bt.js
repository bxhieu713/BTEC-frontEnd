//bai1:

const btn1 = document.getElementById("btn1");
const bl1 = document.getElementById("bl1");

btn1.onclick = function() {
    if (bl1.style.display === "none") {
        bl1.style.display = "block";
    } else {
        bl1.style.display = "none";
    }
}


//bai2
const btn2 = document.getElementById("btn2");
const bl2 = document.getElementById("bl2");

btn2.onclick = function() {
    // const color = bl2.style.backgroundColor;
    switch (bl2.style.backgroundColor) {
        case "blue":
            bl2.style.backgroundColor = "red";
            break;
        case "red":
            bl2.style.backgroundColor = "pink";
            break;
        case "pink":
            bl2.style.backgroundColor = "yellow";
            break;
        case "yellow":
            bl2.style.backgroundColor = "green";
            break;
        default:
            bl2.style.backgroundColor = "blue";
            break;
    }
}



//bai3
const btn3 = document.getElementById("btn3");
const bl3a = document.getElementById("bl3a");
const bl3b = document.getElementById("bl3b");

btn3.onclick = function() {
    let a = bl3a.innerHTML;
    bl3a.innerHTML = bl3b.innerHTML;
    bl3b.innerHTML = a;
}

//bai4

const btn4 = document.getElementById("btn4");
const bl4 = document.getElementById("bl4");

size = 20;
btn4.onclick = function() {
    size += 1;
    bl4.style.fontSize = size + 'px';
}