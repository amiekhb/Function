//1. Ugugdsun array iin hamgiin tom, hamgiin bagiin olj, dundajiin olj, min, max, avg gsn 3 utag butsaadag function bichih. jishee ni: input [1, 2, 3, 4, 5] output { min: 1, max: 5, avg: 3 }
function findMinMaxAvg(arr) {
  let sum = 0;
  let avg = 0;
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  avg = sum / arr.length;
  let obj = {
    min: min,
    max: max,
    avg: avg,
  };
  return obj;
}
let result = findMinMaxAvg([19, 23, 68, 94, 15]);

console.log("utga:", result);
//2. Ugugdsun zahialguudiin niit borluulaltiin dun oldog function bichih.
//const orders = [ { orderId: 1, items: [{ itemName: 'Apple', price: 1 }, { itemName: 'Banana', price: 2 }] }, { orderId: 2, items: [{ itemName: 'Orange', price: 1.5 }, { itemName: 'Grapes', price: 3 }] } ];
