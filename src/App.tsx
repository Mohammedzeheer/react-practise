import * as React from 'react';
import { useState,useEffect,useRef } from 'react';
import './style.css';

export default function App() {
   const [count,setCount]= useState(0)
   const [name,setname]=useState('hello')
  
   const ref=useRef(null)

   useEffect(()=>{
     console.log('hello')
   },[count])
  return (    
    <div>
      <input ref={ref} type="text" />
      <button onClick={()=>{ref.current.focus()}}>Focus Input</button>

      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>count</button>
      <input value={name} type="text" onChange={(e)=>{setname(e.target.value)}}/>
      <p>{name}</p>
    </div>
  );
}
