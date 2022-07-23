// let diemtichluy = +prompt("nhap diem tich luy cua khach");
// let tongtien = +prompt("Nhap vao tong tien");
// if(diemtichluy>500){
//     alert("chuc mung ban dc giam 7%");
//     let phaitra = tongtien*93/100;
//     alert("so tien phai tra la "+ phaitra);
// }
// else{
//     alert("Chuc mung ban da dc giam 3%");
//     let phaitra = tongtien*97/100;
//     alert("so tien phai tra "+ phaitra);
// }
// diem tich luy 501 
// so tien la 100
// let d = +prompt("Moi nhap diem");

// if(d>=0 && d<=10){
//     if(d<5){
//         alert("Khong dat");
//     }
//     else{
//         if(d<7){
//             alert("Dat");
//         }
//         else{
//             alert("Tot");
//         }
//     }
// }
// else{
//     alert("du lieu khong hop le");
// }

//switch--case
let gender = prompt("Moi nhap vao gioi tinh");
switch(gender){
    case "nam":
        alert("Re trai");
        break;
    case "nu":
        alert("Re phai");
        break;
    case "linhtinh":
        alert("di thang");
        break;
    default:
        alert("quay ra phia sau");    
}

