import React from 'react'
import Item from './Item'

export default function List({menu, history, match, add}) {
    return (
        <div>
            <h1>HELLO FROM LIST</h1>
            <h2>You came here from: / {match.params.type}</h2>
            {menu
            .filter(item=>item.type===match.params.type)
            .map(item=><Item item={item} key={Math.random()} add={add}/>)}
            {/* {menu.map(item=><h1>HELLO</h1>)} */}
        </div>
    )
}
