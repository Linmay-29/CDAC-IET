
function recursive(num){
    if(num==0)
        return 1;

    return (num * recursive(--num));
}
function loop(num){
    let fact = 1;
    for(let i=1;i<=num;i++){
        fact = fact * i;
    }
    return fact;
}

function getFactorial(choice){
    let num = 5;
    if(choice == "loop"){
        console.log("Factorial of "+num+" is = "+loop(num));
    }else{
        console.log("Factorial of "+num+" is = "+recursive(num));
    }
}
let choice2 = "Recursion";
let choice1 = "loop";
getFactorial(choice1);