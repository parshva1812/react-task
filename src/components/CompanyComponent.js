import React,{useState} from 'react';
import Employee from './employeeComponent';
export default function Company(){
    const [compnay ,setcompnay]=useState('');
    const changevalue = (e) =>{
        setcompnay(e.target.value)
    }
 return(
    <div style={{height:"120vh"}}>
     <h3>Company</h3>
   
     <form>
     <span>Enter compnay:(from parent): </span><input type="text" id="name"
    value={compnay} onChange={(e)=>changevalue(e)}></input> <br />
     
     </form>
     <Employee compnay={compnay} changevalue={changevalue} />
     </div>
 )

}