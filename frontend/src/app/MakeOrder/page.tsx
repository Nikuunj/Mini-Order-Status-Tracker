'use client'
import React from 'react'
import { useAppContext } from '../context/Appcontext';
import axios from 'axios';


function MakeOrder() {
  const { id, name, status, handleId, handleName, handleStatus } = useAppContext();

  const handleAddd = async (e : Event) => {
    e.preventDefault();
    try {
      if(name === '') {
        alert('enter name')
        return
      }
      const response:any = await axios.post('http://localhost:4000/api/addOrder', {name});
      console.log(response.data);
      if(response.data.id) {
        handleId(response.data.id)
      }
      if(response.data.status) {
        handleStatus(response.data.status)
      }
  } catch (error) {
      alert('Somthing broked.')
    }
  }

  if(!id || !name || !status) {
    return (
      <div>

        {id}
        <br/>
        {name}
        <br/>
        {status}
        <br/>
        <input type="text" value={name} onChange={e => handleName(e.target.value)}/>
        <button onClick={handleAddd}>click</button>
      </div>
    )
  }


  return (
    <div>
       {id}
        <br/>
        {name}
        <br/>
        {status}
        <br/>
      MakeOrder
    </div>
  )
}

export default MakeOrder