export default function Factorial(props){
    let n = parseFloat(props.num)
    let fact = 1;
    for(let i =1;i<=n;i++){
        fact *= i;
    }
    return <>
    <h1>Factorial</h1>
    <h3>Factorial : {fact}</h3>
    </>
}