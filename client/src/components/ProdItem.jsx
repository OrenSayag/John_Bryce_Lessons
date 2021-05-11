import React from 'react'

export default function ProdItem({prod, addToCart}) {
    return (
        <div>
            <img src={prod.img} alt="prod img" className="prod-list-img" />
            <h1>{prod.name}, ${prod.price}</h1>
            <button onClick={()=>addToCart(prod.id)} >ADD TO CART</button>
        </div>
    )
}
