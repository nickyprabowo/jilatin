import React, { Component } from 'react'

export default class AddModal extends Component {
	constructor(props) {
	  	super(props);
	    this.state = {
	      	name: '',
			description: '',
			stock: 0
	    }
	}

	onClose = () => {
		this.props.toggleModal()
	}

	onClick = () => {
		this.setState({
			description: 1
		})
	}

	onInputChange = (e) => {
		const target = e.target
		const value = target.value
		const name = target.name

		this.setState((prevState, props) => {
			return {
				[name]: value
			}
		})
	}

	onSubmit = (e) => {
		e.preventDefault()
		const data = new FormData(e.target)
		console.log(data)
		/*const { name, description, stock } = this.state

		const formData = new FormData()
		formData.append('name', name)
		formData.append('description', description)
		formData.append('quantity', stock)
		*/
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
								<input className="form__input" type="text" name="name" onChange={this.onInputChange} />
							</div>
							<div className="form__field">
								<p className="form__label">Description</p>
								<textarea className="form__input" onChange={this.onInputChange} name="description" />
							</div>
							<div className="form__field">
								<p className="form__label">Stock</p>
								<input className="form__input" onChange={this.onInputChange} name="quantity" type="number"/>
							</div>
							<div className="form__field">
								<p className="form__label">Picture</p>
								<input className="form__input" name="image" type="file"/>
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