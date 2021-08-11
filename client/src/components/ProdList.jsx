import React, { useEffect, useState } from 'react'
import ProdItem from './ProdItem'

export default function ProdList({addToCart}) {

    const [productsArr, setProductsArr] = useState([])

    useEffect(() => {
       const fetchProdFromServer = async () => {
        try {
            const res = await fetch('http://localhost:1000/products')
            const data = await res.json()
            console.log(data)
            setProductsArr(data) 
           } catch (err) {
               console.log(err)
           }
       }
       fetchProdFromServer()
    }, [])

    return (
        <div className="prod-list">
            {productsArr.map(prod=> (<ProdItem key={prod.id} prod={prod} addToCart={addToCart} />))}
        </div>
    )
}
