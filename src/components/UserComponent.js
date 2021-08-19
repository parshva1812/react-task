import React,{useEffect,useState} from 'react';




export default function User(){
 const [items,setitems]=useState([])
 useEffect(
    ()=>{
       fetch("http://fakeapi.jsonparseronline.com/posts").then((res)=>res.json()).then((res)=>{
           setitems(res)
       })
    },[]
 )
 return(
    <div style={{height:"800vh"}}>
     <p>User</p>
     <table>
         <tr>
             <th>ID</th>
             <th>Title</th>
             <th>Likes</th>
             <th>Hits</th>
         </tr>
     {
     items.map((item) => ( 
                <tr>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.likes}</td>
                    <td>{item.hits}</td>
                </tr>
                ))
    }
            </table>
     </div>
 )

}