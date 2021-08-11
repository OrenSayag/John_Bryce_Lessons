<<<<<<< HEAD
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
=======
import React, { Component } from 'react'

export default class Item extends Component {
	render() {
		return (
			<div>
				<input type="checkbox" checked={this.props.todo.completed}/>
				<h1>{this.props.todo.title}</h1>
			</div>
		)
	}
}
>>>>>>> 05a0de1b1ffaa48442a10d0d5276e702a5f9c7a7
