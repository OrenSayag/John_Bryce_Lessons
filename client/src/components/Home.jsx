import React, { useEffect, useState } from 'react'
import CartList from './CartList'
import ProdList from './ProdList'

export default function Home({history}) {

    const [cartArr, setCartArr] = useState([])

    const addToCart = async (id) => {
        try {
            const res = await fetch('http://localhost:1000/cart',{
                method:"post",
                body:JSON.stringify({prodId:id}),
                headers: {
                    "content-type":"application/json",
                    "authorization": localStorage.token
                }
            })
            const data = await res.json()
            setCartArr(data)
        } catch (err) {
            console.log(err)
        }
    }

    const delFromCart = async(id) => {
        try {
            const res = await fetch('http://localhost:1000/cart',{
                method:"delete",
                body:JSON.stringify({prodId:id}),
                headers: {
                    "content-type":"application/json",
                    "authorization": localStorage.token
                }
            })
            const data = await res.json()
            setCartArr(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
       if (!localStorage.token) {
           history.push('/login')
       }

       const fetchCartArr = async () =>{
        try {
            const res = await fetch('http://localhost:1000/cart', {
            method:"get",    
            headers: {
                    "authorization": localStorage.token
                }
            })
            const data = await res.json()
            console.log(data)
            setCartArr(data) 

        } catch (err) {
            console.log(err)
        }
       }

       fetchCartArr()

    }, [])

    return (
    <>
            <button onClick={()=>{
                localStorage.removeItem("token")
                history.push('/login')
            }}>Logout</button>
        <div className="container">
            <ProdList addToCart={addToCart} />
            <CartList
                cartArr={cartArr}
                delFromCart={delFromCart}
            />
        </div>
    </>
    )
}
