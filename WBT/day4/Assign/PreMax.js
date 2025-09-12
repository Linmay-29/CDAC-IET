let arr = [1,4,6,87,4,7,98,5];
console.log(Math.max(1,2,3,4,5));
let max = arr.reduce((a,b)=> Math.max(a,b) , arr[0]);
console.log(max);
