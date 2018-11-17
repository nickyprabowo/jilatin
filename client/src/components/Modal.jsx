import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

// I want to create Modal
// called with <Modal {..some props} />
// you can put anything into a modal
// the Modal only provide a popup mechanism and a cancel button

const Modal = props => {
	if(props.modalActive === props.name){
		return (
			<div className="overlay">
				<div className="modal">
					{props.render}
				</div>
			</div>
		)
	}else return null	
}

export default Modal