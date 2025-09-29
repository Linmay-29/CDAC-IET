const { Component } = require("react");

export default class Addition extends Component{
    constructor(props){
        super(props);
        this.state = {
            num1 : '',
            num2 : '',
            op : '0',
            toggle : false
        }
        // this.getNums= this.getNums.bind(this);
        // this.output = this.output.bind(this);
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
    output = (e)=>{
        e.preventDefault();
        this.setState({
            op : parseFloat(this.state.num1) + parseFloat(this.state.num2),
            toggle : true
        })
    }
    render(){
        return <>
            <h1>Addition Operation</h1>
                <input type="number" placeholder="Enter Number" defaultValue='num1' onBlur={this.getNums}></input>
                <input type="number" placeholder="Enter Number" defaultValue='num2' onBlur={this.getNums}></input>
                <button type="button" onClick={this.output}>Additon</button>
            
            {this.state.toggle ? <h3>Output = {this.state.op}</h3> : <h3></h3>} 
        </>
    }
}