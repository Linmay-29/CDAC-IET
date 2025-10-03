import {useState } from "react";

export default function TextInList(){
    let [text,setText] = useState([]);
    const addText = (e)=>{
        e.preventDefault();
        setText([...text,e.target.value]);
    }
    return(<>
        <input type="text" onBlur={addText}></input>
        <ul>
            {text.map((value,index)=><li key={index}>{value}</li>)}
        </ul>
    </>)
}   