function add(...n){
    let sum = 0;
    n.forEach(element => {
        sum += element; 
    });
    if(sum==0){
        console.log("Value required");
    }
    else{
    console.log(sum);
    }
}
add();
const Student = new Object({
    Name : '    Linmay  ',
    Rollno : 35,
    BloodGrp : "Ove-"
});
console.log((Student.Name).trim()+"Test");
class Test{
    a=null;
    b=10;
}
obj = new Test();
obj.a=10;
let a = "abc";
let b = "abc";
console.log(a==b);