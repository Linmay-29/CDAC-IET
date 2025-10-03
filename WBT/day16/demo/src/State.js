import { useState } from "react";

export default function UseState(){
    const [cnt , setCount]=useState(0);
    const counter = (e)=>{
        setCount(cnt+1);
    }
    console.log(cnt);
    return(<>
    Count = {cnt}
    <br/>
    <button onClick={counter}>Click Me</button><br/>
    </>);
}