<<<<<<< HEAD
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
=======
import React, { Component } from 'react'
import Item from './Item';

export default class List extends Component {
	render() {
		return (
			<div>
				{this.props.todos.map(todo=>(<Item todo={todo} />))}
			</div>
		)
	}
>>>>>>> 05a0de1b1ffaa48442a10d0d5276e702a5f9c7a7
}
