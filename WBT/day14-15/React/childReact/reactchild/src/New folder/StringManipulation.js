import { Component } from "react"
export default class StringM extends Component{
    constructor(props){
        super(props);
        this.state = ({
            text : '',
            toggle : false,
            op : '',
        })
    }
    getInput = (e)=>{
        e.preventDefault();
        this.setState({
            text : e.target.value, 
            toggle : false
        })  
    }
    output = (e) =>{
        e.preventDefault();
        if(e.target.name == 'Upper'){
            console.log(this.state.text);
            this.setState({
                op : this.state.text.toUpperCase(),
                toggle : true
            })
        }else if(e.target.name == 'Lower'){
            this.setState({
                op : this.state.text.toLowerCase(),
                toggle : true
            })
        }else{
            this.setState({
                op : this.state.text.toLowerCase().split(' ').map(word =>{
                    return word.charAt(0).toUpperCase() + word.slice(1)
                }).join(' '),
                toggle : true
            })
        }
    }
    render(){
        return(
            <> 
                <input type="text" placeholder="Enter text" onBlur={this.getInput}></input>
                <br></br>
                <label>UpperCase</label>
                <input type="radio" name='Upper' onClick={this.output}></input>
                <br></br>
                <label>LowerCase</label>
                <input type="radio" name='Lower'  onClick={this.output}></input>
                <br></br>
                <label>TitleCase</label>
                <input type="radio" name='Title'  onClick={this.output}></input>
                <br></br>
                {this.state.toggle ? (<>
                    <h3>Output = {this.state.op}</h3> 
                </>)
                :(
                    <h3></h3>
                )} 
            </>
        )
    }    
}
