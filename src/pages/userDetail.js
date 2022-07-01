import React, {useState,useEffect} from 'react'
import {useParams} from "react-router-dom"

function UserDetail() {
  const[user,setUser]=useState(null);
  const {id} =useParams();

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => res.json())
    .then((data)=> setUser(data));
    
  },[id]);

  return (
    <div className='center'>
      <h2> User Informations</h2>
       
        {user && 
          <ul>
            <li>Name : {user.name}</li>
            <li>E-mail: {user.email}</li>
            <li>Phone: {user.phone}</li>
            <li>Website: {user.website}</li>
          </ul>
        }
        
        
        
        
    </div>
    
  )
}

export default UserDetail