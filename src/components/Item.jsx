import React from 'react'

export default function Item({item, add}) {
    return (
        <div className="menu-item">
            <img src={'/imgs/' + item.img} alt="img" className="menu-img"/>
            <h1>{item.name}</h1>
            <h1>${item.price}</h1>
            <button onClick={()=>add(item.id)}>Add</button>
        </div>
    )
}