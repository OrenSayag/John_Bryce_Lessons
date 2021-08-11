import React from 'react'

export default function CartItem({item, del}) {
    return (
        <div className="cart-item">
            <img src={'/imgs/'+item.img} alt="menu img"/>
            <h1>{item.name}</h1>
            <p>Units: {item.units}</p>
            <h1>${item.price*item.units}</h1>
            <button onClick={()=>del(item.id)}>Remove</button>
        </div>
    )
}
