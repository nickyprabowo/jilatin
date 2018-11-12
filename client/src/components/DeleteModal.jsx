import React, { Component, Fragment } from 'react'
import { CSSTransition } from 'react-transition-group'

export default class DeleteModal extends Component {

	onClose = () => {
		this.props.selectItem()
		this.props.toggleModal()
	}

	onSubmit = (e) => {
		e.preventDefault()
		const { selectedItem } = this.props
		this.props.deleteGelato(selectedItem)
		this.onClose()
	}

	render(){
		return (
			<div className="overlay">
				<div className="modal">
					<div className="modal__header">
						<h1>Delete Gelato</h1>
					</div>
					<div className="modal__body">
						<p>Are you sure to delete this ?</p>
					</div>
					<div className="modal__footer">
						<div className="group">
							<button className="btn btn__purple" onClick={this.onSubmit} type='submit'>Save</button>
							<button className="btn btn__cancel" onClick={this.onClose}>Cancel</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}