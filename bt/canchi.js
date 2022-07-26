let year = +prompt("moi ban nhap vao nam duong lich");
// b1: Cho phép nhập vào năm dương lịch promt
// b2: Tính phần dư của năm dương lịch cho 10: a
let a = year%10;
// b3: Tính phần dư của năm dương lịch cho 12: b
let b = year%12;
// b4: tính can theo a
let can = "";
switch(a){
    case 0:
        can= "Canh";
        break;
    case 1:
        can= "Tân";
        break;
    case 2:
        can= "Nhâm";
        break;
    case 3:
        can= "Quý";
        break;
    case 4:
        can= "Giáp";
        break; 
    case 5:
        can= "Ất";
        break;
    case 6:
        can= "Bính";
        break;
    case 7:
        can= "Đinh";
        break;
    case 8:
        can= "Mậu";
        break;
    case 9:
        can= "Kỷ";
        break;             
        
}
// b5: tính chi theo b

let chi = "";
switch(b){
    case 0:
        chi= "Thân";
        break;
    case 1:
        chi= "Dậu";
        break;
    case 2:
        chi= "Tuất";
        break;
    case 3:
        chi= "Hợi";
        break;
    case 4:
        chi= "Tý";
        break; 
    case 5:
        chi= "Sửu";
        break;
    case 6:
        chi= "Dần";
        break;
    case 7:
        chi= "Mão";
        break;
    case 8:
        chi= "Thình";
        break;
    case 9:
        chi= "Tỵ";
        break;  
    case 10:
        chi= "Ngọ";
            break;   
    case 11:
        chi= "Mùi";
        break;          
        
}
// b6: in ra can + chi
alert(can + " "+ chi);