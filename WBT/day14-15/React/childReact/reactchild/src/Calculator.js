export default function Calculator(props){
    let n1 = parseFloat(props.num1);
    let n2 = parseFloat(props.num2)

return <>
    <h1>Calculator</h1>
    <h3>Addition : {n1+n2}</h3>
    <h3>Substraction : {n1-n2}</h3>
    <h3>Division : {n1/n2}</h3>
    <h3>Multiplication : {n1*n2}</h3>
</>
}