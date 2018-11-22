import React, { Component, Fragment } from 'react'
import { CSSTransition } from 'react-transition-group'

export default class EditModal extends Component {
	constructor(props){
		super(props)
		// pre filled the form with existing data
		this.state = {
			id: this.props.data.id,
			name: this.props.data.name,
			description: this.props.data.description,
			price: this.props.data.price,
			quantity: this.props.data.quantity,
			image: this.props.data.image
		}
	}
	
	onChange = e => {
		const target = e.target
		const name = target.name
		const value = target.value

		this.setState({
			[name]: value
		})
	}

	onClose = (e) => {
		e.preventDefault()
		this.props.deselectItem()
		this.props.onClose()
	}

	onSubmit = (e) => {
		e.preventDefault()

		const formData = new FormData
		formData.append('id', this.state.id)
		formData.append('name', this.state.name)
		formData.append('description', this.state.description)
		formData.append('price', this.state.price)
		formData.append('quantity', this.state.quantity)
		formData.append('image', this.state.image)

		this.props.onSubmit(formData)
	}

	render(){
		return (
			<form id="edit_gelato">
				<div className="modal__header">
					<h1>Edit Gelato</h1>
				</div>
				<div className="modal__body">
					<div className="form">
						<div className="form__field">
							<p className="form__label">Name</p>
							<input className="form__input" type="text" name="name" onChange={this.onChange} defaultValue={this.state.name} required/>
						</div>
						<div className="form__field">
							<p className="form__label">Description</p>
							<textarea className="form__input"  name="description" onChange={this.onChange} defaultValue={this.state.description} required/>
						</div>
						<div className="form__field">
							<p className="form__label">Stock</p>
							<input className="form__input"  name="quantity" onChange={this.onChange} type="number" defaultValue={this.state.quantity} required/>
						</div>
						<div className="form__field">
							<p className="form__label">Price</p>
							<input className="form__input"  name="price" onChange={this.onChange} type="number" defaultValue={this.state.price} required/>
						</div>
						<div className="form__field">
							<p className="form__label">Picture</p>
							<input className="form__input" name="image" type="file"/>
						</div>
					</div>	
				</div>
				<div className="modal__footer">
					<div className="group">
						<button className="btn btn__purple" type='submit' onClick={this.onSubmit}>Save</button>
						<button className="btn btn__cancel" onClick={this.onClose}>Cancel</button>
					</div>
				</div>
			</form>
		)
	}
}