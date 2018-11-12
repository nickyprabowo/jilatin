import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

export default class AddModal extends Component {
	constructor(props) {
	  	super(props);
	    this.state = {
			title: 'modal'
	    }
	}

	render(){
		return (
			<div className="overlay">
				<div className="modal">
					{
						this.props.render(this.state.title)
					}
				</div>
			</div>
		)
	}
}