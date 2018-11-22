import React, { Component, Fragment } from 'react'
import { CSSTransition } from 'react-transition-group'

export default class InsertModal extends Component {

	state = {
		name: '',
		description: '',
		quantity: '',
		price: '',
		image: ''
	}

	onChange = e => {
		const target = e.target
		const name = target.name
		const value = target.value

		this.setState({
			[name]: value
		})
	}

	handleImageChange = e => {
	    e.preventDefault();

	    let file = e.target.files[0]
	    let reader = new FileReader()
	    reader.onloadend = () => {
	      this.setState({
	        image: file
	      })
	    }

	    reader.readAsDataURL(file) 
	    
	}

	onSubmit = (e) => {
		e.preventDefault()
		const formData = new FormData()
		formData.append('name',this.state.name)
		formData.append('description',this.state.description)
		formData.append('quantity',this.state.quantity)
		formData.append('price',this.state.price)
		formData.append('image',this.state.image)
		
		this.props.onSubmit(formData)
	}

	render(){
		return (
			<div>
				<form id="add_gelato">
					<div className="modal__header">
						<h1>Insert Gelato</h1>
					</div>
					<div className="modal__body">
						<div className="form">
							<div className="form__field">
								<p className="form__label">Name</p>
								<input className="form__input" type="text" name="name" onChange={this.onChange}/>
							</div>
							<div className="form__field">
								<p className="form__label">Description</p>
								<textarea className="form__input"  name="description" onChange={this.onChange}/>
							</div>
							<div className="form__field">
								<p className="form__label">Stock</p>
								<input className="form__input"  name="quantity" type="number" onChange={this.onChange}/>
							</div>
							<div className="form__field">
								<p className="form__label">Price</p>
								<input className="form__input"  name="price" type="number" onChange={this.onChange}/>
							</div>
							<div className="form__field">
								<p className="form__label">Picture</p>
								<input className="form__input" name="image" onChange={this.handleImageChange} type="file"/>
							</div>
						</div>	
					</div>
				</form>
				<div className="modal__footer">
					<div className="group">
						<button className="btn btn__purple" onClick={this.onSubmit} type='submit'>Save</button>
						<button className="btn btn__cancel" onClick={this.props.onClose}>Cancel</button>
					</div>
				</div>
			</div>
		)
	}
}