import React from 'react'
import CartItem from './CartItem'

export default function Cart({orders, del}) {
    return (
        <div>
            {orders.map(item=><CartItem key={Math.random()} del={del} item={item}/>)}
        </div>
    )
}
