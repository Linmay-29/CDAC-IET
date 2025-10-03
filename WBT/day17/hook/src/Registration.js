import { useEffect, useState } from "react"

export default function Validation(){
    let [name,setName] = useState([]);
    let [email,setEmail] = useState([]);
    let [button1,setButton] = useState(false);
    let [flag,setFlag] = useState(false);
    let [validate,setValidate] = useState(0);
    useEffect(()=>{
        if(button1){
            if(name.length > 0  && email.length > 0){
                setFlag(true);
            }
        }
    },[button1])
    return <>
        <h1>Registration</h1><br></br>
        <input type="text" placeholder="Enter Name" onBlur={(e)=>{
            setName([...name,e.target.value]);
            setFlag(false); 
            setButton(false);
            setValidate(validate+1);       
        }}></input>
        <input type="text" placeholder="Enter Email" onBlur={(e)=>{
            setEmail([...email,e.target.value]);       
            setFlag(false); 
            setButton(false); 
            setValidate(validate+1);   
        }}></input>
        <button type="button" onClick={()=>{
            if(validate % 2 == 0)
                setButton(true);
            else{
                setValidate(validate-1);
                alert("Enter both details");
            }
        }}>Submit</button>
        {flag && <>
            <h1>User Details</h1>
            {name.map((n)=>{
               return <h2>Name : {n}</h2>    
            })}
            {email.map((n)=>{
                return <h2>Email : {n}</h2>    
            })}
            
        </>}
    </>
}