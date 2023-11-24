// let month = +prompt("bạn sinh tháng mấy ?");
// let day = +prompt("ngày sinh của bạn là ?");

// switch (month) {
//   case 1:
//     if (day >= 1 && day <= 19) {
//       alert("cung ma kết");
//     } else {
//       alert("cung bảo bình");
//     }
//     break;
//   case 2:
//     if (day >= 1 && day <= 18) {
//       alert("cung bảo bình");
//     } else {
//       alert("cung Song Ngư");
//     }
//     break;
//   case 3:
//     if (day >= 1 && day <= 20) {
//       alert("cung Song Ngu");
//     } else {
//       alert("cung bạch dương");
//     }
//     break;
//   case 4:
//     if (day >= 1 && day <= 19) {
//       alert("cung bạch dương");
//     } else {
//       alert("cung Kim ngưu");
//     }
//     break;
//   case 5:
//     if (day >= 1 && day <= 20) {
//       alert("cung Kim ngưu");
//     } else {
//       alert("cung song tử");
//     }
//     break;
//   case 6:
//     if (day >= 1 && day <= 21) {
//       alert("cung song tử");
//     } else {
//       alert("cung cự giải");
//     }
//     break;
//   case 7:
//     if (day >= 1 && day <= 22) {
//       alert("cung cự giải");
//     } else {
//       alert("cung sư tử");
//     }
//     break;
//   case 8:
//     if (day >= 1 && day <= 23) {
//       alert("cung sư tử");
//     } else {
//       alert("cung Xử Nữ");
//     }
//     break;
//   case 9:
//     if (day >= 1 && day <= 23) {
//       alert("cung Xử Nữ");
//     } else {
//       alert("cung Thiên Bình");
//     }
//     break;
//   case 10:
//     if (day >= 1 && day <= 23) {
//       alert("cung Thiên Bình");
//     } else {
//       alert("cung hổ cáp");
//     }
//     break;
//   case 11:
//     if (day >= 1 && day <= 24) {
//       alert("cung hổ cáp");
//     } else {
//       alert("cung nhân mã");
//     }
//     break;
//   case 12:
//     if (day >= 1 && day <= 22) {
//       alert("cung nhân mã");
//     } else {
//       alert("cung Ma kết");
//     }
//     break;

//   default:
//     break;
// }

// bài 1
// let age = +prompt("số tuổi của bạn là ?");

// if (age <= 18) {
//   alert("bạn chưa đủ tuổi");
// } else {
//   alert("bạn đã đủ tuổi");
// }

// let hour = prompt("bây h là mấy h");
// hour = parseInt(hour);

// if (hour < 18) {
//   alert("chúc 1 ngày tốt lành");
// } else {
//   alert("bạn đã vất vả r");
// }

let number = +prompt("nhập vào một số bất kì");

number = parseInt(number);
if (number % 2 == 0) {
  alert("số" + number + "là số chẵn");
} else {
  alert("số" + number + "là số lẻ");
}
