import { useEffect, useState } from "react"

export default function PasswordGen(){
    let [input,setInput] = useState();
    let [submit,setSubmit] = useState(false);
    let [op,setOp]=useState('');
    useEffect(()=>{
        if(submit == true){
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';
            let pass = '';
            if(input>0){
                for(let i=0;i<input;i++){
                    const singleChar = Math.floor(Math.random() * chars.length);
                    pass += chars[singleChar];
                }
                    setOp(pass);
                    setSubmit(false);
            }else{
                setOp("Invalid Length")
            }
            
        }
    },[submit])
    return <>
        <input type="number" placeholder="ENter length of password" onBlur={(e)=>{
                setInput(e.target.value);
        }}></input>
        <button type="button" onClick={(e)=>{
            setSubmit(true);
        }}>Generate</button>
        <h3>Generated Password = {op}</h3>
    </>
}