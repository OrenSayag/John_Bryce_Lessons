import React, { Component } from 'react'

export default class Form extends Component {
	state = {
		value:"",
	}
	
	render() {
		return (
			<div>
				<input type="text" value={this.state.value} onChange={
					e=>{this.setState({value: e.target.value})}
				}/>
				<button onClick={()=>{
					this.props.addToDo(this.state.value);
					this.setState({value:""});
				}}>Add</button>
			</div>
		)
	}
}
