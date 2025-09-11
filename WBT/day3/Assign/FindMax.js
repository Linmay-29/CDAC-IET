let arr2 = [2,4,5,1,8,3]
function reduceArr(arr2){

    return arr2.reduce((max,current) => {
         return (current > max) ? current : max
    },arr2[0]);
    
}
console.log("Max using Reduce() = "+reduceArr(arr2));

let sortArr = arr2.sort((a,b) => b-a);
console.log("Max using Sort() = "+sortArr[0]);


let largest = arr2[0];

arr2.forEach(element => (largest < element) ? largest=element:element)
console.log("Max using For Each Loop = "+largest);