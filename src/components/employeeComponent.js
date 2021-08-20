import React,{useState} from 'react';
export default function Employee(props){

 

 return(
     <div style={{height:"120vh"}}>
     
     <h3>Employee</h3>
     <form>
     <span>Enter compnay:(from child): </span><input type="text" id="name"
    value={props.compnay} onChange={(e)=>props.changevalue(e)}></input> <br />
     
     </form>
       
     </div>
 )

}