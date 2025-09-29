
export default function MyFunction(props){
    function fact(n1){
        let fact1 = 1;
        for(let i=1;i<=n1;i++){
            fact1 *= i;
        }
        return fact1;
    }
    function sum(n1,n2){
        return n1+n2;
    }
    function sub(n1,n2){
        return n1 - n2;
    }
    function div(n1,n2){
        return n1/n2;
    }
    function mul(n1,n2){
        return n1*n2;
    }
    function display(method){
        if(method == "factorial"){
            return fact(5);
        }
        if(method == "Addition"){
            let data = prompt("Enter the number : ")
            let data1 = prompt("Enter the number : ")
            return sum(data,data1);
        }
        if(method == "Substraction"){
            let data = prompt("Enter the number : ")
            let data1 = prompt("Enter the number : ")
            return sub(data,data1);
        }
        if(method == "Division"){
            let data = prompt("Enter the number : ")
            let data1 = prompt("Enter the number : ")
            return div(data,data1);
        }
        if(method == "Multiplication"){
            let data = prompt("Enter the number : ")
            let data1 = prompt("Enter the number : ")
            return mul(data,data1);
        }
    }
    return <>
        <h1>Result : {display(props.method)}</h1>
    </>
}


