const { Component } = require("react");

export default class Addition extends Component{
    constructor(props){
        super(props);
        this.state = {
            num1 : '',
            num2 : '',
            op : '0',
            toggle : false,
            operation : ''
        }
    }
    getNums = (e)=>{
        e.preventDefault();
        if(e.target.defaultValue == 'num1'){
            this.setState({
                num1 : e.target.value, 
                toggle : false 
            })
        }else{
            this.setState({
                num2 : e.target.value,
                toggle : false
            })
        }
    }
    calculate = (e)=>{
        if(e.target.value == 'Add'){
            this.setState({
                op : parseFloat(this.state.num1) + parseFloat(this.state.num2),
                operation : 'Addition',
                toggle : true
            })
        }else if(e.target.value == 'Sub'){
            this.setState({
                op : parseFloat(this.state.num1) - parseFloat(this.state.num2),
                operation : 'Subtraction',
                toggle : true
            })
        }else if(e.target.value == 'Mul'){
            this.setState({
                op : parseFloat(this.state.num1) * parseFloat(this.state.num2),
                operation : 'Multiplication',
                toggle : true
            })
        }else{
            this.setState({
                op : parseFloat(this.state.num1) / parseFloat(this.state.num2),
                operation : 'Division',
                toggle : true
            })
        }
    }
    render(){
        return <>
            <h1>Calculator</h1>
                <input type="number" placeholder="Enter Number" defaultValue='num1' onBlur={this.getNums}></input>
                <input type="number" placeholder="Enter Number" defaultValue='num2' onBlur={this.getNums}></input>
                <button type="button" value='Add' onClick={this.calculate}>Additon</button>
                <button type="button" value={'Sub'} onClick={this.calculate}>Subtraction</button>
                <button type="button" value={'Mul'} onClick={this.calculate}>Multiplication</button>
                <button type="button" value={'Div'} onClick={this.calculate}>Division</button>
            
            {this.state.toggle ? (<>
                <h4>Operation : {this.state.operation}</h4> 
                <h3>Output = {this.state.op}</h3> 
            </>)
            :(
                <h3></h3>
            )} 
        </>
    }
}