import React, { Component, Fragment } from 'react'
import { CSSTransition } from 'react-transition-group'

export default class InsertModal extends Component {

	onClose = (e) => {
		e.preventDefault()
		this.props.toggleModal()
	}

	onSubmit = (e) => {
		e.preventDefault()
		const data = new FormData(e.target)
		
		this.props.submit(data)
	}

	render(){
		return (
			<div className="overlay">
				<div className="modal">
					<form id="add_gelato" onSubmit={this.onSubmit}>
					<div className="modal__header">
						<h1>Add Gelato</h1>
					</div>
					<div className="modal__body">
						<div className="form">
							<div className="form__field">
								<p className="form__label">Name</p>
								<input className="form__input" type="text" name="name"  required/>
							</div>
							<div className="form__field">
								<p className="form__label">Description</p>
								<textarea className="form__input"  name="description" required/>
							</div>
							<div className="form__field">
								<p className="form__label">Stock</p>
								<input className="form__input"  name="quantity" type="number" required/>
							</div>
							<div className="form__field">
								<p className="form__label">Price</p>
								<input className="form__input"  name="price" type="number" required/>
							</div>
							<div className="form__field">
								<p className="form__label">Picture</p>
								<input className="form__input" name="image" type="file" required/>
							</div>
						</div>	
					</div>
					<div className="modal__footer">
						<div className="group">
							<button className="btn btn__purple" type='submit'>Save</button>
							<button className="btn btn__cancel" onClick={this.onClose}>Cancel</button>
						</div>
					</div>
					</form>
				</div>
			</div>
		)
	}
}