import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login({history}) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div>
          <h1>login</h1>  
          <input type="text" placeholder="username" onChange={e=>{
              setUsername(e.target.value)
          }} />
          <input type="password" placeholder="password"  onChange={e=>{
              setPassword(e.target.value)
          }}/>

          <button onClick={async ()=>{
              try {
                  const res = await fetch('http://localhost:1000/auth/login', {
                      method:"post",
                      headers:{"content-type":"application/json"},
                      body: JSON.stringify({username, password})
                  })
                  console.log(res)
                  const data = await res.json()
                  console.log(data)
                  if(data.token){
                      localStorage.token = data.token
                      history.push('/home')
                  }
              } catch (err) {
                  console.log(err)
              }
          }} >Login</button>
           <p>don't have an account yet? <Link to={"/register"}>Register</Link> page </p>
        </div>
    )
}
