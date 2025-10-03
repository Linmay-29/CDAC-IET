import { useEffect, useState } from "react"

export default function UseEffect(){
   let [cnt,setCount]=useState(0)


   useEffect(()=>{
      console.log("component mounted");
      // setInterval(counter,1000)
      return()=>{
         console.log("component unmounted");
      }
   },[])
   useEffect(()=>{
      console.log("component updated");


   },[cnt])
   
   const counter = ()=>{
      
      setCount(cnt+1)
   }
   return(<>
        Counter : {cnt}
        <br></br>
        <button onClick={counter}>click</button>
        <table><th>No. Of Click</th></table>
   </>)
}