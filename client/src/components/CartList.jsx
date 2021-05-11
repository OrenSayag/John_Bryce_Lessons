import React from 'react'
import CartItem from './CartItem'

export default function CartList({cartArr, delFromCart}) {
    return (
        <div className="cart-list">
           {cartArr.map((item, i)=>(<CartItem key={i} item={item} delFromCart={delFromCart} />))} 
        </div>
    )
}
