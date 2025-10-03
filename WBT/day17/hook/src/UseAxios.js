import { useEffect, useState } from "react";
import axios from "axios";
export default function UseAxios(){
    let [data1,setdata] = useState([]);
    let [flag,setFlag] = useState(false);
    useEffect(()=>{
        if(flag == true){
            axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
                setdata(res.data);  
            }).catch(err=>{console.log(err)});
        }else{
            console.log("Its First Render");
        }
    },[flag])
    return <>
        <button type="button" onClick={(e)=>{
                setFlag(true)
        }}>Show Data
        </button>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                {data1.map((value,index)=>{
                    return <tr key={index}>  
                        <td>{value.id}</td>
                        <td>{value.title}</td>
                    </tr>
                })}
                
            </tbody>
        </table>
    </>
}