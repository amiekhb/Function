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
function too(x, array = [1, 2, 3, 4, 5]) {
  for (let i = 0; i < array.length; i++)
    if (x === array[i]) {
      return x;
    } else if (x !== array[i]) {
      return -1;
    }
}
x = 3;
console.log("search:", hailt);
