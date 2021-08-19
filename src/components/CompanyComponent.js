import React from 'react';
export default function Company(props){
 return(
    <div style={{height:"120vh"}}>
     <p>Company</p>
   
     <form>
     <span>Enter compnay:(from child): </span><input type="text" id="name"
    ></input> <br />
     <button type="submit"> Submit </button>
     </form>
     </div>
 )

}