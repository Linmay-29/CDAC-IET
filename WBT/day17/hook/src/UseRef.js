import { useEffect, useRef, useState } from "react"

export default function UseRef(){
    let check = useRef(0);
    let [temp,setTemp] = useState("");
    useEffect(()=>{
        // check.current = 0;
    },[])
    return <>
        <input onChange={(e)=>{
            if(!e.target.value.trim()){
                check.current = 0;
                console.log("not valid");
                setTemp(e.target.value);
                
            }else{
                check.current++;
                setTemp(e.target.value);
            }
        }}></input>
        <p>{check.current}</p>
    </>
}