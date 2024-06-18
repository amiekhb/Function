let a = 10;
let b = 20;
let c = 0;

function hevle() {
  console.log("2 toonii niilber:", a + b);
}
function hevle2(too1, too2) {
  console.log("2 toonii niilber:", too1 + too2);
}

function nemeh(x, y) {
  return x + y;
}
console.log("functions");
hevle();
hevle2(11, 33);
let h2 = hevle2(22, 77);
let sum = nemeh(15, 15);
console.log("hevle:", h2);
console.log("nemeh:", sum);
//1 declaration
function uildel1(number1, number2) {
  return number1 + number2;
}
console.log("niilber:", uildel1(10, 5));
//
function uildel2(number1, number2) {
  return number1 - number2;
}
console.log("ylgavar:", uildel2(10, 5));
//
function uildel3(number1, number2) {
  return number1 * number2;
}
console.log("urjver:", uildel3(10, 5));
//
function uildel4(number1, number2) {
  return number1 / number2;
}
console.log("noogdvor:", uildel4(10, 5));

//nergui-anonymous function
let huvaa = function () {};
//2 expression
let huvaah = function (x, y) {
  return x / y;
};
huvaah();
//3  ES6 => arrow function
let square = (x) => {
  return x * x;
};

//1. Өгөгдсөн 2 тооны ихийг олох функц бич.
function ugugdul(n1, n2) {
  if (n1 > n2) {
    return n1;
  } else if (n1 < n2) {
    return n2;
  }
}
console.log("max:", ugugdul(15, 35));

//2.Өгөгдсөн array -аас өгөгдсөн тоо байгаа эсэхийг олох функц бич. Тухайн тоо байвал индексийг буцаана. Байхгүй бол -1 буцаана.
// array = [1, 2, 3, 4, 5];

// for (let i = 0; i < array.length; i++)
// while (i < array.length) {
//   function too(x, array = [1, 2, 3, 4, 5]) {
//     if (x === array[i]) {
//       return array[i];
//     } else if (x !== array[i]) {
//       return -1;
//     }
//     i++;
//   }
// }
// let x = 3;
// console.log("search:", too);

let arr = [1, 2, 3, 4, 5];
function findIndex(searchArr, findToo) {
  console.log("search arr:", arr);
  console.log("find number:", findToo);
  for (let i = 0; i < searchArr.length; i++) {
    if (searchArr[i] === findToo) {
      return i;
    }
  }
  return -1;
}
let idx = findIndex(arr, 3);
console.log("index:", idx);
idx = findIndex([23, 4, 5, 6, 76], 53);
console.log("Index:", idx);
idx = findIndex([23, 4, 5, 6, 76], 76);
console.log("Index:", idx);
//3.Өгөгдсөн тэмдэгт мөрөөс -аас өгөгдсөн тэмдэгт байгаа эсэхийг олох функц бич. Тухайн тэмдэгт байвал индексийг буцаана. Байхгүй бол -1 буцаана.

//4. Өгөгдсөн array - ийн дундажыг олох функц бич.
let arra = [23, 4, 5, 6, 76];
function dundaj_oloh(ugugdul) {
  let mean = 0;
  let sum = 0;
  for (let i = 0; i < ugugdul.length; i++) {
    sum += ugugdul[i];
    mean = sum / ugugdul.length;
  }
  return mean;
}
let arrayDundaj = dundaj_oloh(arra);
console.log("dundaj:", arrayDundaj);

//5. Өгөгдсөн array - ийн нийлбэрийг олох функц бич.
let array = [23, 4, 5, 6, 76];
function niilber_oloh(ugugdul) {
  let sum = 0;
  for (let i = 0; i < ugugdul.length; i++) {
    sum += ugugdul[i];
  }
  return sum;
}
let nemsen = niilber_oloh(array);
console.log("niilber:", nemsen);

//6. Өгөгдсөн тоо анхны эсэхийг олох функц бич
function too(x) {
  if (x<=1) return false {
    return x;
  }
  return null;
}
let anhnii_too = too(2);
console.log("anhnii too:", anhnii_too);



//library
let mm = Math.max(22, 12, 14, 15, 9);
console.log("max:", mm);
