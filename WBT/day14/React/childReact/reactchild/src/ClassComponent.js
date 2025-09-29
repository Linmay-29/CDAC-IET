

import { Component } from "react";

export default class C1 extends Component{
    constructor(props){
        super(props);
        this.a = props.text;
    }
    Upper(e){
        console.log(e.target.value);
        let p1 = document.getElementById("p1");
        let input = document.getElementById("input");
        p1.innerHTML = input.value.toUpperCase();
    }
    Lower(eve){
        console.log(eve.target.value);
        let p1 = document.getElementById("p1");
        let input = document.getElementById("input");
        p1.innerHTML = input.value.toLowerCase(); 
    }
    // display(e) {
    //     let p1 = document.getElementById("p1");
    //     let input = document.getElementById("input");
    //     console.log(e.target.value);
    //     if(e.target.value == 'Upper'){
    //         p1.innerHTML = `Output= ${input.value.toUpperCase()}`;
    //     }else if(e.target.value == 'Lower'){
    //         p1.innerHTML = `Output = ${input.value.toLowerCase()}`;
    //     }else{
    //         p1.innerHTML = "Invalid Option";
    //     }
        // return "From ot render = "+this.a;
    //}
    render(){
        return <>
            <input type="text" id="input"  placeholder="Enter the text"></input><br></br>
            <button type="button" value="Upper" onClick={this.Upper}>UPPERCASE</button>
            <button type="button" value="Lower" onClick={this.Lower}>lowercase</button>

            <p id="p1"></p>
        </>
    }
}