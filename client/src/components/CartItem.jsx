import React from 'react'

export default function CartItem({item, delFromCart}) {
    return (
        <div className="cart-list-item">
            <img src={item.img} alt="img" />
            <div className="info">
                <h3>{item.name}</h3>
                <h2>{item.price}</h2>
                <button onClick={()=>delFromCart(item.id)} >DELETE</button>
            </div>
        </div>
    )
}
