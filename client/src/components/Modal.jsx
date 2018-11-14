import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

const Modal = (props) => {
	
	const {title} = props

	return (
		<div className="overlay">
			<div className="modal">
				{
					props.render(title)
				}
			</div>
		</div>
	)
	
}

export default Modal