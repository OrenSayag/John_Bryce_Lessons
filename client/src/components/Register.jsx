import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Register({history}) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    


    return (
        <div>
          <h1>register </h1>  
          <input type="text" placeholder="username" onChange={e=>{
              setUsername(e.target.value)
          }} />
          <input type="password" placeholder="password"  onChange={e=>{
              setPassword(e.target.value)
          }}/>
          <input type="text" placeholder="first name"  onChange={e=>{
              setFname(e.target.value)
          }}/>
          <input type="text" placeholder="last name"  onChange={e=>{
              setLname(e.target.value)
          }}/>
          <button onClick={async ()=>{
              try {
                  const res = await fetch('http://localhost:1000/auth/register', {
                      method:"post",
                      headers:{"content-type":"application/json"},
                      body: JSON.stringify({username, password, fname, lname})
                  })
                  console.log(res)
                  const data = await res.json()
                  console.log(data)
                  if(data.id){
                      history.push('/login')
                  }
              } catch (err) {
                  console.log(err)
              }
          }} >Register</button>
          <p>already have an account? <Link to={"/login"}>Login</Link> page </p>
        </div>
    )
}
