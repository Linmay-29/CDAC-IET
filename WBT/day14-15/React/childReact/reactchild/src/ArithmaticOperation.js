export default function ArithmaticOperation(props){
    let n1 = parseFloat(props.num1)
    let n2 = parseFloat(props.num2)
    let option = props.operation;
    function Calculator(){
        switch (option) {
        case "add" :{
            return n1 + n2;
        }
        case "sub" :{
            return n1 - n2;
        }
        case "div" :{
            return n1 / n2;
        }
        case "mul" :{
            return n1 * n2;
        }
    }
    }
    return<>

    <h3>operation = {props.operation}</h3>
    <h3>Result = {Calculator()}</h3>
    </>
}

