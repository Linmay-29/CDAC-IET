import { Component } from "react";
export default class Registration extends Component{
    constructor(props){
        super(props)
        this.state = ({
            name : '',
            mail : '',
            degree : '',
            flag : 0,
            submit : false
        })
    }
    input = (e)=>{
        e.preventDefault();
        if(e.target.type == 'text'){  
            this.setState({
                name : e.target.value,
                flag : 1,
                submit : false
            })
        }else{
            if(this.state.flag == 1){
                this.setState({
                    mail : e.target.value,
                    flag : 2,
                    submit : false
                })
            }else{
                alert("Enter First Name");
            }
        }
    }
    selectedDegree = (e)=>{
        if(e.target.value == ""){
            alert("Invalid Option");
        }else if(this.state.flag == 2){
            if(e.target.value == 'UG'){
                this.setState({
                    degree : 'UG',
                    submit : false
                })
            }else if(e.target.value == 'G'){
                this.setState({
                    degree : 'G',
                    submit : false
                })
            }else{
                this.setState({
                    degree : 'PG',
                    submit : false
                })
            }
        }else{
            alert("Enter above details")
        }
    }    
    submitted = (e)=>{
        if(!(this.state.degree == "")){
            this.setState({
                submit : true
            })
        }else{
            alert("Enter degree details");
        }
    }
    render(){
        return(<>
            <h1>Registration Form</h1>
            <input type='text' placeholder="Enter Name"  onBlur={this.input}></input>
            <br></br>
            <input type='email' placeholder="Enter Email"  onBlur={this.input}></input>
            <br></br>
            <select onChange={this.selectedDegree}>
                <option value="">Choose an option</option>
                <option value='UG'>Under Graduate</option>
                <option value='G'>Graduate</option>
                <option value='PG'>Post Graduate</option>
            </select>
            <br></br>
            {this.state.degree == 'UG' && (<>
                <h1>Enter your Degree Details</h1>
                <input type='text' placeholder="Enter Degree"></input><br></br>
                <input type='year' placeholder="Enter Year of starting"></input><br></br>
                <input type='text' placeholder="Enter Percenatge"></input><br></br>
                <input type='text'placeholder="Enter Universty Name"></input>
                </>)
            }
            {this.state.degree =='G' && (<>
                <h1>Enter your Degree Details</h1>
                <input type='text' placeholder="Enter Degree"></input><br></br>
                <input type='year' placeholder="Enter Graduation Year"></input><br></br>
                <input type='text' placeholder="Enter Percenatge"></input><br></br>
                <input type='text'placeholder="Enter Universty Name"></input>
                </>)
            }
            {this.state.degree == 'PG' && (<>
                <h1>Enter your Degree Details</h1>
                <input type='text' placeholder="Enter Degree"></input><br></br>
                <input type='year' placeholder="Enter Post Graduation Year"></input><br></br>
                <input type='text' placeholder="Enter Percenatge"></input><br></br>
                <input type='text'placeholder="Enter Universty Name"></input>
                </>)
            }
            <button type="button" onClick={this.submitted}>Submit</button>
            {this.state.submit ? <h1>Data is Submitted</h1> :<h1></h1>}
        </>
        )
    }
}