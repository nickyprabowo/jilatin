import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

class Control extends Component {

	openModal = () => {
		this.props.toggleModal()
	}

	render(){
		return (
			<div className="control">
				<button className="btn btn__purple" onClick={this.openModal}>+ <span>Input Menu</span></button>
			</div>
		)
	}
}

export default Control