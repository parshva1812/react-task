import React,{useState} from 'react';
import Company from './CompanyComponent';
export default function Home(){
const [compnay,setcompnay]=useState('');
 const handlesubmit =(e)=>{
    <Company compnay={compnay} changevalue={changevalue} handlesubmit={handlesubmit}/>

    e.preventDefault();

 }
 const changevalue= (e)=>{
     setcompnay(e.target.value)
 }

 return(
     <div style={{height:"120vh"}}>
     
     <p>Home</p>
     <form onSubmit={(e)=>handlesubmit(e)}>
     <span>Enter compnay:(from parent): </span><input type="text" id="name"
     onChange={(e) =>changevalue(e)}></input> <br />
     <button type="submit"> Submit </button>
     </form>

     </div>
 )

}