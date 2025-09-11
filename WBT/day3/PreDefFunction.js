// let a = [0,1,2,3,4];
// let b = "Hello world";
// for(let i = 0;i<a.length;i++){
// console.log(a[i]);
// }
// a.push(5);
// // a.forEach(element => {
// //     console.log(element);
// // });
// a.unshift('linmay');
// a.forEach(element => {
//     console.log(element);
// });
// a.pop();
// a.forEach(element => {
//     console.log(element);
// });
// a.shift();
// a.forEach(element => {
//     console.log(element);
// });
// let c = [0,1,2,3,4];
// c.splice(1,2);
// console.log(c);
// c.splice(1,2,1,2);
// console.log(c);


// let a = [0,1,2,3,4];
// function print(){
// let add = a[0] + a[1];
// console.log(add);
// }
// let c = print;
// c();


// let add = (a,b) =>{
//     console.log(a+b);
// }
// add(10,20);

let arr = ['kunal','mohit','linmay','chetan'];

// arr.forEach((ele)=>
//     console.log(ele.substring(0,2))
// );

console.log(arr.map(ele=>{
     return ele.substring(0,2)
}
));

console.log(arr.map(ele=>{
     return ele.toUpperCase()
}
));

let arr2 = [10,9,1,8,2,5];
//it iterates on every ele and but return only filtered means satisfied data 
let oddArr = (arr2.filter(ele=>{
     return ele % 2 != 0;
}
));

//it iterates on every ele and returns bool
let oddArr1 = (arr2.map(ele=>{
    return ele % 2 != 0;
}
));
console.log(oddArr1);

let sortArr = arr2.sort((a,b) => b-a);
console.log(sortArr);

function reduceArr(arr2){

    return arr2.reduce((max,current) => {
         return (current > max) ? current : max
    },arr2[2]);
    
}
console.log(reduceArr(arr2));


